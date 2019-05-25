import { Action } from '@ngrx/store';

export enum AppActionTypes {
    InitSuppliers = '[App] Init Suppliers',
    InitBonusColors = '[App] Init Bonus Colors',
    AddPlayer = '[App] Add Player'
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