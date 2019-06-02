import { Supplier } from '../_models/Supplier';
import { Color } from '../_models/ColorEnum';
import { Player } from '../_models/Player';
import { defaultColors } from './utils/default-colors';

export interface AppState {
    gameId: string;
    playerId: string;

    suppliers: Supplier[];
    colors: Color[];
    rejectedSupplierColors: Color[];
    brokenColors: Color[];
    bonusColors: Color[];
    players: Player[];
    roundNo: number;
    playerTurnIndex: number;
}

export const defaultAppState: AppState = {
    gameId: '',
    playerId: '',
    
    suppliers: [],
    colors: defaultColors,
    rejectedSupplierColors: [],
    brokenColors: [],
    bonusColors: [],
    players: [],
    roundNo: 0,
    playerTurnIndex: 0
}