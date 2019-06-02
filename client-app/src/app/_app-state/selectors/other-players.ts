import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const selectOtherPlayers = createSelector(
    getAppState,
    (state: AppState) => (state.players || []).filter(x => x.id !== state.playerId)
) 