import { Column } from './Column';
import { ScoreStep } from './ScoreStep';

export interface Player {
    id: string;
    score: number;
    scoreSteps: ScoreStep[];
    columns: Column[];
}