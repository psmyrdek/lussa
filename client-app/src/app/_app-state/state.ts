import { Supplier } from '../_models/Supplier';
import { Color } from '../_models/ColorEnum';
import { Player } from '../_models/Player';
import { defaultColors } from './utils/default-colors';

export interface AppState {
    gameId: string;
    gameStarted: boolean;
    playerId: string;
    playerIndex: number;
    suppliers: Supplier[];
    colors: Color[];
    rejectedSupplierColors: Color[];
    brokenColors: Color[];
    bonusColors: Color[];
    players: Player[];
    roundNo: number;
    playerTurnIndex: number;
    firstPlayerId: string | null;
}

export const defaultAppState: AppState = {
    gameId: '',
    gameStarted: false,
    playerId: '',
    playerIndex: 0,
    suppliers: [],
    colors: defaultColors,
    rejectedSupplierColors: [],
    brokenColors: [],
    bonusColors: [],
    players: [],
    roundNo: 0,
    playerTurnIndex: 0,
    firstPlayerId: null
}