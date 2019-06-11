import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Store } from '@ngrx/store';
import { AppState } from '../_app-state/state';

import { GameActionTypes, UpdateGameStateAction, GameStartedAction, GameEndedAction } from '../_app-state/actions/game.actions';
import { GameAction } from '../_models/GameAction';

@Injectable({ providedIn: 'root' })
export class MessagingService {

    started: boolean = false;
    ended: boolean = false;

    constructor(
        private gameSocket: Socket,
        private store: Store<AppState>
    ) {
        this.gameSocket.on(GameActionTypes.UpdateGameState, (state: AppState) => {

            if (!this.started && state.gameStarted) {
                this.store.dispatch(new GameStartedAction());
                this.started = true;
            }

            if (!this.ended && state.gameEnded) {
                this.store.dispatch(new GameEndedAction());
                this.ended = true;
            }

            this.store.dispatch(new UpdateGameStateAction({ state }))
        })
    }

    emitAction(gameAction: GameAction) {
        this.gameSocket.emit(gameAction.type, gameAction)
    }

}