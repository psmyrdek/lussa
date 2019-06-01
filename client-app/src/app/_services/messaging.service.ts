import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Store } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { StateUpdate } from '../_models/StateUpdate';
import { UpdateStateAction } from '../_app-state/actions/app.actions';

@Injectable({ providedIn: 'root' })
export class MessagingService {

    constructor(
        private gameSocket: Socket,
        private store: Store<AppState>
    ) {
        this.gameSocket.on('connect', () => {
            console.log('connected')
        });

        this.gameSocket.on('update game state', (stateUpdate: StateUpdate) => {
            this.store.dispatch(new UpdateStateAction({ update: stateUpdate }))
        })
    }

    emitJoin(gameId) {
        this.gameSocket.emit('join', gameId)
    }

}