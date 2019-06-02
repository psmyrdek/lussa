import { Component } from '@angular/core';
import { ScoreStep } from '../_models/ScoreStep';
import { AppState } from '../_app-state/state';
import { Store, select } from '@ngrx/store';
import { playerScores } from '../_app-state/selectors/player-scores';

type PlayerScore = { score: number; scoreSteps: ScoreStep[]; isReady: boolean; isPlayerTurn: boolean; }

@Component({
  selector: 'app-score-summary',
  templateUrl: './score-summary.component.html',
  styleUrls: ['./score-summary.component.scss']
})
export class ScoreSummaryComponent {

  playersScore: PlayerScore[] = [];

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(playerScores))
      .subscribe(playersScore => {
        this.playersScore = playersScore;
      });
  }
  
}
