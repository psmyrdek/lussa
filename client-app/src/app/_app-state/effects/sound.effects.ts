import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes, FillColumnAction, GameStartedAction, GameEndedAction } from '../actions/game.actions';
import { tap } from 'rxjs/operators';
import { SoundService } from 'src/app/_services/sound.service';

@Injectable({ providedIn: 'root' })
export class SoundEffects {

    @Effect({ dispatch: false })
    fillColumn = this.actions$.pipe(
        ofType(GameActionTypes.FillColumn),
        tap((action: FillColumnAction) => {
            this.soundService.play(action);
        })
    )

    @Effect({ dispatch: false })
    takeFromSupplier = this.actions$.pipe(
        ofType(GameActionTypes.TakeFromSupplier),
        tap((action: FillColumnAction) => {
            this.soundService.play(action);
        })
    )

    @Effect({ dispatch: false })
    takeFromRejected = this.actions$.pipe(
        ofType(GameActionTypes.TakeFromRejectedColors),
        tap((action: FillColumnAction) => {
            this.soundService.play(action);
        })
    )

    @Effect({ dispatch: false })
    start = this.actions$.pipe(
        ofType(GameActionTypes.GameStarted),
        tap((action: GameStartedAction) => {
            this.soundService.play(action);
        })
    )

    @Effect({ dispatch: false })
    end = this.actions$.pipe(
        ofType(GameActionTypes.GameEnded),
        tap((action: GameEndedAction) => {
            this.soundService.play(action);
        })
    )

    constructor(
        private actions$: Actions,
        private soundService: SoundService
    ) { }
}