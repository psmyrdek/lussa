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
        this.gameSocket.on('update game state', (stateUpdate: StateUpdate) => {
            this.store.dispatch(new UpdateStateAction({ update: stateUpdate }))
        })
    }

    emitJoin(payload: {gameId: string}) {
        this.gameSocket.emit('join', payload)
    }

    emitReady(payload: {gameId: string, playerId: string}) {
        this.gameSocket.emit('player ready', payload)
    }

}