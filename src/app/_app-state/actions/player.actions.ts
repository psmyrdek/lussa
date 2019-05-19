import { Action } from '@ngrx/store';
import { Color } from '../../_models/ColorEnum';

export enum PlayerActionTypes {
    TakeFromSupplier = '[Player] Take From Supplier'
}

export class TakeFromSupplierAction implements Action {
    readonly type = PlayerActionTypes.TakeFromSupplier;

    constructor(public payload: { color: Color, supplierId: number }) { }
}