import { AppState } from '../_app-state/state';

export const getCurrentPlayer = (state: AppState) => state.players.find(p => p.id === state.playerId)