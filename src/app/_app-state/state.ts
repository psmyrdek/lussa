import { Supplier } from '../_models/Supplier';
import { Color } from '../_models/ColorEnum';
import { Player } from '../_models/Player';

export interface AppState {
    suppliers: Supplier[];
    colors: Color[];
    playerId: string;
    playerTurnColors: Color[];
    brokenColors: Color[];
    players: Player[];
}

export const defaultAppState: AppState = {
    suppliers: [],
    playerId: '',
    colors: [
        Color.Orange,
        Color.Orange,
        Color.Orange,

        Color.Cyan,
        Color.Cyan,
        Color.Cyan,

        Color.Magenta,
        Color.Magenta,
        Color.Magenta,

        Color.White,
        Color.White,
        Color.White,

        Color.Yellow,
        Color.Yellow,
        Color.Yellow,

        Color.Cyan,
        Color.White
    ],
    playerTurnColors: [],
    brokenColors: [],
    players: []
}