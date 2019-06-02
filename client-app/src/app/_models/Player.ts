import { Column } from './Column';
import { ScoreStep } from './ScoreStep';
import { Color } from './ColorEnum';

export interface Player {
    id: string;
    score: number;
    scoreSteps: ScoreStep[];
    columns: Column[];
    turnColors: Color[];
    isReady: boolean;
}