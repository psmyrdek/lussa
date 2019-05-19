import { Action } from '@ngrx/store';

export enum AppActionTypes {
    InitSuppliers = '[App] Init Suppliers'
}

export class InitSuppliersAction implements Action {
    readonly type = AppActionTypes.InitSuppliers;

    constructor(public payload: { noOfPlayers: number }) { }
}