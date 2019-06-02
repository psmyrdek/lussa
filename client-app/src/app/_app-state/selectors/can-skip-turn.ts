import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

const getPlayer = (state: AppState) => state.players.find(x => x.id === state.playerId)

export const getAppState = createFeatureSelector<AppState>('app');

export const canSkipTurn = createSelector(
    getAppState,
    (state: AppState) => getPlayer(state).turnColors.length === 0 && getPlayer(state).columns.some(c => c.isDisabled)
)