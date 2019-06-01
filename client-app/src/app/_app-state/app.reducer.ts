import { Action } from '@ngrx/store';
import { Supplier } from '../_models/Supplier';
import { AppActionTypes, AddPlayerAction, InitStateAction, UpdateStateAction } from './actions/app.actions';
import { getForSupplier } from './utils/get-for-supplier';
import { RoundActionTypes } from './actions/round.actions';
import { AppState, defaultAppState } from './state';
import { PlayerActionTypes, TakeFromSupplierAction, FillColumnAction, TakeFromRejectedColorsAction } from './actions/player.actions';
import { Color } from '../_models/ColorEnum';
import { generatePlayer } from './utils/player-generator';
import { Column } from '../_models/Column';
import { ColumnVariantEnum } from '../_models/ColumnVariantEnum';
import { getCurrentPlayer } from './utils/get-current-player';
import { updatePlayer } from './utils/update-player';
import { getUpdatedColumn } from './utils/update-column';
import { updateScoreSteps, calcTurnPenalty } from './utils/broken-stones';

export function appReducer(state: AppState = defaultAppState, action: Action): AppState {
    switch (action.type) {
        case AppActionTypes.InitState: {
            const actionPayload = (action as InitStateAction).payload;
            return actionPayload.state;
        }
        case AppActionTypes.UpdateState: {
            const actionPayload = (action as UpdateStateAction).payload.update;

            return {
                ...state,
                roundNo: actionPayload.roundNo,
                suppliers: actionPayload.suppliers,
                colors: actionPayload.colors,
                players: actionPayload.players
            }
        }
        case AppActionTypes.AddPlayer: {

            const actionPayload = (action as AddPlayerAction).payload;

            return {
                ...state,
                playerId: actionPayload.id,
                players: [...state.players, generatePlayer(actionPayload.id)]
            }
        }
        case AppActionTypes.InitSuppliers: {
            return {
                ...state,
                suppliers: [
                    { id: 0, colors: [] },
                    { id: 1, colors: [] },
                    { id: 2, colors: [] },
                    { id: 3, colors: [] },
                    { id: 4, colors: [] },
                    { id: 5, colors: [] },
                    { id: 6, colors: [] }
                ]
            }
        }
        case RoundActionTypes.InitSupplierColors: {

            let availableColors = state.colors
            let toGet, toKeep;

            const filledSuppliers: Supplier[] = state.suppliers.map(supplier => {
                ([toGet, toKeep] = getForSupplier(availableColors));
                availableColors = toKeep
                return { ...supplier, colors: toGet }
            })

            return {
                ...state,
                colors: availableColors,
                suppliers: filledSuppliers
            }
        }
        case RoundActionTypes.MarkNextRound: {
            return {
                ...state,
                roundNo: state.roundNo + 1
            }
        }
        case PlayerActionTypes.TakeFromSupplier: {

            const actionPayload = (action as TakeFromSupplierAction).payload;
            let playerTurnColors: Color[] = [];
            let rejectedSupplierColors: Color[] = [];

            const filteredSuppliers = state.suppliers.map((supplier) => {
                if (supplier.id !== actionPayload.supplierId) {
                    return supplier;
                } else {
                    playerTurnColors = supplier.colors.filter(c => c === actionPayload.color)
                    rejectedSupplierColors = supplier.colors.filter(c => c !== actionPayload.color)

                    return { ...supplier, colors: [] }
                }
            });

            return {
                ...state,
                suppliers: filteredSuppliers,
                playerTurnColors,
                rejectedSupplierColors: [...state.rejectedSupplierColors, ...rejectedSupplierColors]
            }

        }
        case PlayerActionTypes.FillColumn: {

            const actionPayload = (action as FillColumnAction).payload;
            const colorsInHand = state.playerTurnColors;
            const columnId = actionPayload.columnId;

            // Get player
            const player = getCurrentPlayer(state);

            // Block picking disabled column
            const column: Column = player.columns.find(c => c.id === columnId)
            if (column.isDisabled || column.isColumnCompleted) {
                return { ...state };
            }

            // Update variant and colors to break
            const variant = column.activeVariant === ColumnVariantEnum.A
                ? column.variantA : column.variantB;

            const toBreak: Color[] = [];
            colorsInHand.forEach(color => {
                const toFill = variant.fields.find(f => f.color === color && !f.isFilled)
                if (toFill) {
                    toFill.isFilled = true;
                } else {
                    toBreak.push(color)
                }
            });

            // Empty player turn colors
            state.playerTurnColors = [];

            // Update column
            player.columns = player.columns.map((column, index) => getUpdatedColumn(column, {
                columnIndex: columnId
            }))

            // Add scores from column
            if (variant.fields.every(f => f.isFilled)) {
                player.score += player.columns
                    .filter(c => c.id >= columnId && c.isVariantCompleted)
                    .reduce((prev, current) => {
                        return prev + current.value;
                    }, 0);
            }

            // Update broken stones penalty
            player.score += calcTurnPenalty(toBreak.length, player.scoreSteps);
            player.scoreSteps = updateScoreSteps(toBreak.length, player.scoreSteps);

            return {
                ...state,
                brokenColors: [...state.brokenColors, ...toBreak],
                players: updatePlayer(state, player)
            }

        }
        case PlayerActionTypes.SkipTurn: {

            const player = getCurrentPlayer(state);

            player.columns = player.columns.map(column => ({
                ...column,
                isDisabled: false
            }))

            return {
                ...state,
                players: updatePlayer(state, player)
            }

        }
        case PlayerActionTypes.MarkReadiness: {

            const player = getCurrentPlayer(state);

            player.isReady = true;

            return {
                ...state,
                players: updatePlayer(state, player)
            }

        }
        case PlayerActionTypes.TakeFromRejectedColors: {

            const actionPayload = (action as TakeFromRejectedColorsAction).payload;

            const playerTurnColors = state.rejectedSupplierColors.filter(c => c === actionPayload.color)
            const rejectedSupplierColors = state.rejectedSupplierColors.filter(c => c !== actionPayload.color)

            // Add -1 if first take

            return {
                ...state,
                rejectedSupplierColors,
                playerTurnColors
            }

        }
        default: {
            return state;
        }
    }
}