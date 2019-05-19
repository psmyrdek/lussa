import { Action } from '@ngrx/store';
import { Color } from '../../_models/ColorEnum';

export enum PlayerActionTypes {
    TakeFromSupplier = '[Player] Take From Supplier',
    FillColumn = '[Player] Fill Column'
}

export class TakeFromSupplierAction implements Action {
    readonly type = PlayerActionTypes.TakeFromSupplier;

    constructor(public payload: { color: Color, supplierId: number }) { }
}

export class FillColumnAction implements Action {
    readonly type = PlayerActionTypes.FillColumn;

    constructor(public payload: { columnId: number, fillJokers: boolean }) { }
}