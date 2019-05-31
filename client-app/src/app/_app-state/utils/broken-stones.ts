import { ScoreStep } from 'src/app/_models/ScoreStep';

export function calcTurnPenalty(noOfBroken: number, scoreSteps: ScoreStep[]): number {
    const currentIndex = scoreSteps.findIndex(s => s.isActive);
    const newIndex = (currentIndex + noOfBroken) % scoreSteps.length;

    return newIndex < currentIndex ? scoreSteps[scoreSteps.length - 1].value : 0;
}

export function updateScoreSteps(noOfBroken: number, scoreSteps: ScoreStep[]): ScoreStep[] {
    
    const currentIndex = scoreSteps.findIndex(s => s.isActive);
    const newIndex = (currentIndex + noOfBroken) % scoreSteps.length;

    return scoreSteps
        .map((step, index) => ({
            ...step,
            isActive: newIndex === index
        }))
}