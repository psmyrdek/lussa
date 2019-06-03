import { Action } from '@ngrx/store';
import { Supplier } from '../_models/Supplier';
import { getForSupplier } from './utils/get-for-supplier';
import { AppState, defaultAppState } from './state';
import { Color } from '../_models/ColorEnum';
// import { generatePlayer } from './utils/player-generator';
import { Column } from '../_models/Column';
import { ColumnVariantEnum } from '../_models/ColumnVariantEnum';
import { getCurrentPlayer } from './utils/get-current-player';
import { updatePlayer } from './utils/update-player';
import { getUpdatedColumn } from './utils/update-column';
import { updateScoreSteps, calcTurnPenalty } from './utils/broken-stones';
import { GameActionTypes, SetupGameIdAction, AddPlayerAction, UpdateGameStateAction } from './actions/game.actions';

export function appReducer(state: AppState = defaultAppState, action: Action): AppState {
    switch (action.type) {

        case GameActionTypes.SetupGameId: {

            const actionPayload = (action as SetupGameIdAction).payload;

            return {
                ...state,
                gameId: actionPayload.gameId
            }
        }

        case GameActionTypes.AddPlayer: {

            const actionPayload = (action as AddPlayerAction).payload;

            return {
                ...state,
                playerId: actionPayload.playerId
            }

        }

        case GameActionTypes.UpdateGameState: {

            const gameState = (action as UpdateGameStateAction).payload.state

            return {
                ...state,
                ...gameState
            }

        }

        // case RoundActionTypes.MarkNextRound: {
        //     return {
        //         ...state,
        //         roundNo: state.roundNo + 1
        //     }
        // }

        
        // case PlayerActionTypes.SkipTurn: {

        //     const player = getCurrentPlayer(state);

        //     player.columns = player.columns.map(column => ({
        //         ...column,
        //         isDisabled: false
        //     }))

        //     return {
        //         ...state,
        //         players: updatePlayer(state, player)
        //     }

        // }

        // case PlayerActionTypes.TakeFromRejectedColors: {

        //     const actionPayload = (action as TakeFromRejectedColorsAction).payload;

        //     const playerTurnColors = state.rejectedSupplierColors.filter(c => c === actionPayload.color)
        //     const rejectedSupplierColors = state.rejectedSupplierColors.filter(c => c !== actionPayload.color)

        //     // Add -1 if first take

        //     return {
        //         ...state,
        //         rejectedSupplierColors,
        //         playerTurnColors
        //     }

        // }
        default: {
            return state;
        }
    }
}