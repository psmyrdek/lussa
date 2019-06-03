import { AppState } from '../_app-state/state';
import { Action } from '@ngrx/store';

export class GameAction {

    type: string;
    gameId: string;
    playerId: string;
    
    constructor(public action: Action, state: AppState) {
        this.type = action.type;
        this.gameId = state.gameId;
        this.playerId = state.playerId;
    }
}