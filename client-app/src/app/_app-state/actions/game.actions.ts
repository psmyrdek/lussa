import { Action } from '@ngrx/store';
import { AppState } from '../state';
import { Color } from 'src/app/_models/ColorEnum';

export enum GameActionTypes {
    SetupGameId = 'setupGameId',
    AddPlayer = 'addPlayer',
    UpdateGameState = 'updateGameState',
    MarkReadiness = 'markReadiness',

    TakeFromSupplier = 'takeFromSupplier',
    ColorTakenFromSupplier = 'colorTakenFromSupplier'
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

export class ColorTakenFromSupplierAction implements Action {
    readonly type = GameActionTypes.ColorTakenFromSupplier;

    constructor(public payload: { playerId: string, color: Color, supplierId: number }) { }
}