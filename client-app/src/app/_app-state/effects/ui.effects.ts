import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { GameActionTypes, GameEndedAction } from '../actions/game.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { LeaderboardService } from 'src/app/_services/leaderboard.service';

@Injectable({ providedIn: 'root' })
export class UiEffects {

    @Effect({ dispatch: false })
    fillColumn = this.actions$.pipe(
        ofType(GameActionTypes.GameEnded),
        withLatestFrom(this.store.select('app')),
        tap(([action, state]: [GameEndedAction, AppState]) => {
            this.leaderboardService.showLeaderboard();
        })
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private leaderboardService: LeaderboardService
    ) { }
}