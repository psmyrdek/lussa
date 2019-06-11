import { Component } from '@angular/core';
import { ScoreStep } from '../_models/ScoreStep';
import { AppState } from '../_app-state/state';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

type PlayerScore = { score: number; scoreSteps: ScoreStep[]; isReady: boolean; isPlayerTurn: boolean; }

@Component({
  selector: 'app-score-summary',
  templateUrl: './score-summary.component.html',
  styleUrls: ['./score-summary.component.scss']
})
export class ScoreSummaryComponent {

  turnNotificationFired: boolean = false;

  playersScore: PlayerScore[] = [];

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {

    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {
        this.playersScore = state.players.map((player, index) => ({
          isReady: player.isReady,
          score: player.score,
          scoreSteps: player.scoreSteps,
          isPlayerTurn: state.playerTurnIndex === index
        }));

        if (state.gameStarted) {
          this.updateTurnNotification(state);
        }

      });

  }

  private updateTurnNotification(state: AppState) {
    if (state.playerTurnIndex === state.playerIndex && !this.turnNotificationFired) {
      this.snackBar.open('Your turn!', null, { verticalPosition: 'top' });
      this.turnNotificationFired = true;
    }

    if (state.playerTurnIndex !== state.playerIndex) {
      this.turnNotificationFired = false;
    }
  }

}
