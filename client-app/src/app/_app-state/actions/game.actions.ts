import { Action } from '@ngrx/store';
import { AppState } from '../state';
import { Color } from 'src/app/_models/ColorEnum';

export enum GameActionTypes {
    SetupGameId = 'setupGameId',
    AddPlayer = 'addPlayer',
    GameStarted = 'gameStarted',
    UpdateGameState = 'updateGameState',
    MarkReadiness = 'markReadiness',
    TakeFromSupplier = 'takeFromSupplier',
    FillColumn = 'fillColumn',
    SkipTurn = 'skipTurn',
    TakeFromRejectedColors = 'takeFromRejectedColors',
    GameEnded = 'gameEnded'
}

export class AddPlayerAction implements Action {
    readonly type = GameActionTypes.AddPlayer;
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

export class GameStartedAction implements Action {
    readonly type = GameActionTypes.GameStarted;
}

export class GameEndedAction implements Action {
    readonly type = GameActionTypes.GameEnded;
}