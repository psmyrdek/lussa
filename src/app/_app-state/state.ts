import { Supplier } from '../_models/Supplier';
import { Color } from '../_models/ColorEnum';

export interface AppState {
    suppliers: Supplier[];
    colors: Color[];
    playerTurnColors: Color[];
}

export const defaultAppState: AppState = {
    suppliers: [],
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
        Color.Yellow
    ],
    playerTurnColors: []
}