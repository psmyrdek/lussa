import { AppState } from '../state';

export function getCurrentPlayer(state: AppState) {
    return state.players.find(p => p.id === state.playerId)
}