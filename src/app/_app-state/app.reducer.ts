import { Action } from '@ngrx/store';
import { Supplier } from '../_models/Supplier';
import { AppActionTypes, AddPlayerAction } from './actions/app.actions';
import { getForSupplier } from './utils/get-for-supplier';
import { TurnActionTypes } from './actions/turn.actions';
import { AppState, defaultAppState } from './state';
import { PlayerActionTypes, TakeFromSupplierAction, FillColumnAction, TakeFromRejectedColorsAction } from './actions/player.actions';
import { Color } from '../_models/ColorEnum';
import { generatePlayer } from './utils/player-generator';
import { Column } from '../_models/Column';
import { ColumnVariantEnum } from '../_models/ColumnVariantEnum';
import { getCurrentPlayer } from './utils/get-current-player';
import { updatePlayer } from './utils/update-player';
import { getBonusColors } from './utils/get-bonus.colors';

export function appReducer(state: AppState = defaultAppState, action: Action): AppState {
    switch (action.type) {
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
        case AppActionTypes.InitBonusColors: {
            const [toGet, toKeep] = getBonusColors(state.colors);
            return {
                ...state,
                colors: toKeep,
                bonusColors: toGet
            }
        }
        case TurnActionTypes.InitSupplierColors: {

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

            // Block columns to the left from picked
            player.columns = player.columns.map((column, index) => ({
                ...column,
                isDisabled: index < columnId
            }))

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