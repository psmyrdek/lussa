import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const canSkipTurnAction = createSelector(
    getAppState,
    (state: AppState) => state.playerTurnColors.length === 0 && state.players.find(p => p.id === state.playerId).columns.some(c => c.isDisabled)
)