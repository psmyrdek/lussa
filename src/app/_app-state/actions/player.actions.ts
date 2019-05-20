import { Action } from '@ngrx/store';
import { Color } from '../../_models/ColorEnum';

export enum PlayerActionTypes {
    TakeFromSupplier = '[Player] Take From Supplier',
    TakeFromBrokenColors = '[Player] Take From Broken Colors',
    FillColumn = '[Player] Fill Column',
    SkipTurn = '[Player] Skip Turn'
}

export class TakeFromSupplierAction implements Action {
    readonly type = PlayerActionTypes.TakeFromSupplier;

    constructor(public payload: { color: Color, supplierId: number }) { }
}

export class FillColumnAction implements Action {
    readonly type = PlayerActionTypes.FillColumn;

    constructor(public payload: { columnId: number, fillJokers: boolean }) { }
}

export class SkipTurnAction implements Action {
    readonly type = PlayerActionTypes.SkipTurn;
}

export class TakeFromBrokenColorsAction implements Action {
    readonly type = PlayerActionTypes.TakeFromBrokenColors;

    constructor(public payload: { color: Color }) { }
}