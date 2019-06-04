import { Action } from '@ngrx/store';
import { AppState, defaultAppState } from './state';
import { GameActionTypes, SetupGameIdAction, AddPlayerAction, UpdateGameStateAction } from './actions/game.actions';
import { v4 as uuidv4 } from 'uuid'

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

            return {
                ...state,
                playerId: uuidv4()
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