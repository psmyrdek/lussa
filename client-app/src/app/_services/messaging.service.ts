import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { StateUpdate } from '../_models/StateUpdate';
// import { UpdateStateAction } from '../_app-state/actions/app.actions';
// import { Player } from '../_models/Player';
// import { PlayerActionUpdate } from '../_models/PlayerActionUpdate';

import { GameActionTypes, UpdateGameStateAction } from '../_app-state/actions/game.actions';

type GameAction = {
    gameId: string;
    action: Action;
}

@Injectable({ providedIn: 'root' })
export class MessagingService {

    constructor(
        private gameSocket: Socket,
        private store: Store<AppState>
    ) {
        this.gameSocket.on(GameActionTypes.UpdateGameState, (state: AppState) => {
            this.store.dispatch(new UpdateGameStateAction({ state }))
        })
    }

    emitAction(gameAction: GameAction) {
        this.gameSocket.emit(gameAction.action.type, gameAction)
    }

}