import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { MessagingService } from 'src/app/_services/messaging.service';
import { withLatestFrom, tap } from 'rxjs/operators'
import { AppActionTypes, InitStateAction } from '../actions/app.actions';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { PlayerActionTypes } from '../actions/player.actions';

@Injectable({ providedIn: 'root' })
export class GameEffects {

    @Effect({ dispatch: false })
    $joiners = this.actions$.pipe(
        ofType(AppActionTypes.InitState),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [InitStateAction, AppState]) => {
            this.messaging.emitJoin({gameId: state.gameId});
        })
    )

    @Effect({ dispatch: false })
    $readiness = this.actions$.pipe(
        ofType(PlayerActionTypes.MarkReadiness),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [InitStateAction, AppState]) => {
            const player = state.players.find(x => x.id === state.playerId)
            this.messaging.emitReady({
                gameId: state.gameId,
                playerId: player.id
            });
        })
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private messaging: MessagingService
    ) { }

}