import { Action } from '@ngrx/store';

export enum AppActionTypes {
    InitSuppliers = '[App] Init Suppliers'
}

export enum TurnActionTypes {
    InitSupplierColors = '[Turn] Init Supplier Colors'
}

export class InitSuppliersAction implements Action {
    readonly type = AppActionTypes.InitSuppliers;

    constructor(public payload: { noOfPlayers: number }) { }
}

export class InitSupplierColorsAction implements Action {
    readonly type = TurnActionTypes.InitSupplierColors;
}