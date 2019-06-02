import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { withLatestFrom, tap } from 'rxjs/operators'
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { MessagingService } from 'src/app/_services/messaging.service';
import { GameActionTypes, AddPlayerAction, MarkReadinessAction, TakeFromSupplierAction, ColorTakenFromSupplierAction } from '../actions/game.actions';

@Injectable({ providedIn: 'root' })
export class GameEffects {

    @Effect({ dispatch: false })
    $joiners = this.actions$.pipe(
        ofType(GameActionTypes.AddPlayer),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [AddPlayerAction, AppState]) => {
            this.messaging.emitAction({gameId: state.gameId, action})
        })
    )

    @Effect({ dispatch: false })
    $readiness = this.actions$.pipe(
        ofType(GameActionTypes.MarkReadiness),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [MarkReadinessAction, AppState]) => {
            this.messaging.emitAction({gameId: state.gameId, action})
        })
    )

    @Effect({ dispatch: false })
    $columnActions = this.actions$.pipe(
        ofType(GameActionTypes.TakeFromSupplier),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [TakeFromSupplierAction, AppState]) => {

            const actionToEmit = new ColorTakenFromSupplierAction({
                playerId: state.playerId,
                color: action.payload.color,
                supplierId: action.payload.supplierId
            })

            this.messaging.emitAction({gameId: state.gameId, action: actionToEmit});
        })
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private messaging: MessagingService
    ) { }

}