import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { AppState } from '../state';
import { Store, select, Action } from '@ngrx/store';
// import { withLatestFrom, switchMap, filter } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { shouldProceedToNextRound } from '../utils/round-checker';
// import { AllowNextTurnAction, AppActionTypes, SetupNewRoundAction } from '../actions/app.actions';
// import { InitSupplierColorsAction } from '../actions/turn.actions';

// type EndOfTurnActions = SetupNewRoundAction | AllowNextTurnAction

@Injectable({ providedIn: 'root' })
export class AppEffects {

    // @Effect()
    // turns$ = this.actions$.pipe(
    //     // filter(action => (action as Action).type !== AppActionTypes.AllowNextTurn),
    //     // withLatestFrom(this.store.pipe(select('app'))),
    //     // switchMap(([action, state]) => {
    //     //     const shouldProceed = shouldProceedToNextRound(state);

    //     //     return shouldProceed
    //     //         ? of<EndOfTurnActions>(new SetupNewRoundAction())
    //     //         : of<EndOfTurnActions>(new AllowNextTurnAction())
    //     // })
    // )

    // @Effect()
    // supplierColors$ = this.actions$.pipe(
    //     ofType(AppActionTypes.InitNewRound),
    //     switchMap(() => of(new InitSupplierColorsAction()))
    // )

    constructor(private actions$: Actions, private store: Store<AppState>) { }

}