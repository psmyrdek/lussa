import { Action } from '@ngrx/store';
import { Supplier } from '../_models/Supplier';
import { AppActionTypes, AddPlayerAction } from './actions/app.actions';
import { getForSupplier } from './utils/colors';
import { TurnActionTypes } from './actions/turn.actions';
import { AppState, defaultAppState } from './state';
import { PlayerActionTypes, TakeFromSupplierAction } from './actions/player.actions';
import { Color } from '../_models/ColorEnum';
import { generatePlayer } from './utils/player-generator';

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

            const filteredSuppliers = state.suppliers.map((supplier) => {
                if (supplier.id !== actionPayload.supplierId) {
                    return supplier;
                } else {
                    playerTurnColors = supplier.colors.filter(c => c === actionPayload.color)
                    return { ...supplier, colors: supplier.colors.filter(c => c != actionPayload.color)}
                }
            });

            return {
                ...state,
                suppliers: filteredSuppliers,
                playerTurnColors
            }

        }
    }
}