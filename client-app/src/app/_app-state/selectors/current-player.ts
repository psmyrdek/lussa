import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const selectCurrentPlayer = createSelector(
    getAppState,
    (state: AppState) => state.players.find(x => x.id === state.playerId)
) 