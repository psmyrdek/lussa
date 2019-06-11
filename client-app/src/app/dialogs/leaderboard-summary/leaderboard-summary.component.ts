import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Player } from 'src/app/_models/Player';
import { sortByProp } from 'src/app/_utils/sort-by-prop';

type LeadboardRow = {
  playerId: string;
  playerIndex: number;
  playerScore: number;
}

@Component({
  selector: 'app-leaderboard-summary',
  templateUrl: './leaderboard-summary.component.html',
  styleUrls: ['./leaderboard-summary.component.scss']
})
export class LeaderboardSummaryComponent implements OnInit {

  sortFunc = sortByProp<LeadboardRow>('playerScore', { order: 'desc' });
  leaderboard: LeadboardRow[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select('app'),
      first()
    ).subscribe(
      (state: AppState) => {
        this.updateLeaderboard(state.players);
      }
    )
  }

  updateLeaderboard(players: Player[]) {
    
    const playersWithScores = players.map((p, index) => ({
      playerId: p.id,
      playerIndex: index,
      playerScore: p.score + p.scoreSteps.find(step => step.isActive).value
    }));

    this.leaderboard = playersWithScores.sort(this.sortFunc)

  }

  // createNewGame() {
  //   // todo
  // }

}
