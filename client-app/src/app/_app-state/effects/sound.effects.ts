import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GameActionTypes, FillColumnAction } from '../actions/game.actions';
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

    constructor(
        private actions$: Actions,
        private soundService: SoundService
    ) { }
}