import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { withLatestFrom, tap } from 'rxjs/operators'
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { MessagingService } from 'src/app/_services/messaging.service';
import { GameActionTypes, AddPlayerAction, MarkReadinessAction, TakeFromSupplierAction, FillColumnAction } from '../actions/game.actions';
import { GameAction } from 'src/app/_models/GameAction';

@Injectable({ providedIn: 'root' })
export class GameEffects {

    @Effect({ dispatch: false })
    addPlayer = this.actions$.pipe(
        ofType(GameActionTypes.AddPlayer),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [AddPlayerAction, AppState]) => {
            this.messaging.emitAction(new GameAction(action, state));
        })
    )

    @Effect({ dispatch: false })
    markReadiness = this.actions$.pipe(
        ofType(GameActionTypes.MarkReadiness),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [MarkReadinessAction, AppState]) => {
            this.messaging.emitAction(new GameAction(action, state));
        })
    )

    @Effect({ dispatch: false })
    takeFromSupplier = this.actions$.pipe(
        ofType(GameActionTypes.TakeFromSupplier),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [TakeFromSupplierAction, AppState]) => {
            this.messaging.emitAction(new GameAction(action, state));
        })
    )

    @Effect({ dispatch: false })
    fillColumn = this.actions$.pipe(
        ofType(GameActionTypes.FillColumn),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [FillColumnAction, AppState]) => {
            this.messaging.emitAction(new GameAction(action, state));
        })
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private messaging: MessagingService
    ) { }

}