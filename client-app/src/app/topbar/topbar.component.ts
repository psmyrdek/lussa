import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../_app-state/state';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  playerColor: string = '';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {

        const player = state.players.find(x => x.id === state.playerId)

        if (player && !this.playerColor) {
          this.updatePlayerColor(state)
        }
      })
  }

  updatePlayerColor(state: AppState) {
    const index = state.players.findIndex(x => x.id === state.playerId)
    this.playerColor = `topbar-player-${index.toString()}`
  }

}
