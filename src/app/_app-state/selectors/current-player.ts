import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const selectCurrentUser = createSelector(
    getAppState,
    (state: AppState) => state.players.find(x => x.id === state.playerId)
)