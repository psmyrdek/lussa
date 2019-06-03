import { Action } from '@ngrx/store';
import { AppState } from '../state';
import { Color } from 'src/app/_models/ColorEnum';

export enum GameActionTypes {
    SetupGameId = 'setupGameId',
    AddPlayer = 'addPlayer',
    UpdateGameState = 'updateGameState',
    MarkReadiness = 'markReadiness',
    TakeFromSupplier = 'takeFromSupplier',
    FillColumn = 'fillColumn',
    SkipTurn = 'skipTurn',
    TakeFromRejectedColors = 'takeFromRejectedColors'
}

export class AddPlayerAction implements Action {
    readonly type = GameActionTypes.AddPlayer;

    constructor(public payload: { playerId: string }) { }
}

export class SetupGameIdAction implements Action {
    readonly type = GameActionTypes.SetupGameId;

    constructor(public payload: { gameId: string }) { }
}

export class UpdateGameStateAction implements Action {
    readonly type = GameActionTypes.UpdateGameState;

    constructor(public payload: { state: AppState }) { }
}

export class MarkReadinessAction implements Action {
    readonly type = GameActionTypes.MarkReadiness;

    constructor(public payload: { playerId: string }) { }
}

export class TakeFromSupplierAction implements Action {
    readonly type = GameActionTypes.TakeFromSupplier;

    constructor(public payload: { color: Color, supplierId: number }) { }
}

export class FillColumnAction implements Action {
    readonly type = GameActionTypes.FillColumn;

    constructor(public payload: { columnId: number, fillJokers: boolean }) { }
}

export class TakeFromRejectedColorsAction implements Action {
    readonly type = GameActionTypes.TakeFromRejectedColors;

    constructor(public payload: { color: Color }) { }
}

export class SkipTurnAction implements Action {
    readonly type = GameActionTypes.SkipTurn;
}