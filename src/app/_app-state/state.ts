import { Supplier } from '../_models/Supplier';
import { Color } from '../_models/ColorEnum';
import { Player } from '../_models/Player';
import { defaultColors } from './utils/default-colors';

export interface AppState {
    suppliers: Supplier[];
    colors: Color[];
    playerId: string;
    playerTurnColors: Color[];
    rejectedSupplierColors: Color[];
    brokenColors: Color[];
    bonusColors: Color[];
    players: Player[];
    roundNo: number;
}

export const defaultAppState: AppState = {
    suppliers: [],
    playerId: '',
    colors: defaultColors,
    playerTurnColors: [],
    rejectedSupplierColors: [],
    brokenColors: [],
    bonusColors: [],
    players: [],
    roundNo: 1
}