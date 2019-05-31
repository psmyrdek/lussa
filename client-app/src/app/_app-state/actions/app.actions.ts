import { Action } from '@ngrx/store';
import { AppState } from '../state';

export enum AppActionTypes {
    InitState = '[App] Init State',
    InitSuppliers = '[App] Init Suppliers',
    InitBonusColors = '[App] Init Bonus Colors',
    AddPlayer = '[App] Add Player'
}

export class InitStateAction implements Action {
    readonly type = AppActionTypes.InitState;

    constructor(public payload: { state: AppState }) { }
}

export class InitSuppliersAction implements Action {
    readonly type = AppActionTypes.InitSuppliers;

    constructor(public payload: { noOfPlayers: number }) { }
}

export class AddPlayerAction implements Action {
    readonly type = AppActionTypes.AddPlayer;

    constructor(public payload: { id: string }) { }
}

export class InitBonusColorsAction implements Action {
    readonly type = AppActionTypes.InitBonusColors;
}