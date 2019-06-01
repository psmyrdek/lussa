import { Action } from '@ngrx/store';
import { Color } from '../../_models/ColorEnum';

export enum PlayerActionTypes {
    TakeFromSupplier = '[Player] Take From Supplier',
    TakeFromRejectedColors = '[Player] Take From Rejected Colors',
    FillColumn = '[Player] Fill Column',
    SkipTurn = '[Player] Skip Turn',
    MarkReadiness = '[Player] Mark Readiness'
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

export class TakeFromRejectedColorsAction implements Action {
    readonly type = PlayerActionTypes.TakeFromRejectedColors;

    constructor(public payload: { color: Color }) { }
}

export class MarkReadinessAction implements Action {
    readonly type = PlayerActionTypes.MarkReadiness;
}