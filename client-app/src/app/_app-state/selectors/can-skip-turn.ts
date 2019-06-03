import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const canSkipTurn = createSelector(
    getAppState,
    (state: AppState) => {
        const player = state.players.find(p => p.id === state.playerId)
        if (!player) { return false; }
        return player.turnColors.length === 0 && player.columns.some(c => c.isDisabled)
    }
)