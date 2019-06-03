import { Action } from '@ngrx/store';
import { AppState, defaultAppState } from './state';
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
        default: {
            return state;
        }
    }
}