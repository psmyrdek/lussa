import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getAppState = createFeatureSelector<AppState>('app');

export const playerScores = createSelector(
    getAppState,
    (state: AppState) => state.players.map(player => ({
        score: player.score,
        scoreSteps: player.scoreSteps
    }))
)