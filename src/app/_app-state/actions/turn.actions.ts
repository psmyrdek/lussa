import { Action } from '@ngrx/store';

export enum TurnActionTypes {
    InitSupplierColors = '[Turn] Init Supplier Colors'
}

export class InitSupplierColorsAction implements Action {
    readonly type = TurnActionTypes.InitSupplierColors;
}