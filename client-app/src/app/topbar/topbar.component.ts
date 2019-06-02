import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { AddPlayerAction, MarkReadinessAction } from '../_app-state/actions/game.actions';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  canJoin: boolean = true;
  canMarkReady: boolean = false;

  playerId: string = uuidv4();
  playerColor: string = '';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {

        const player = state.players.find(x => x.id === state.playerId)

        this.canJoin = !player;

        if (player) {
          this.canMarkReady = state.playerId && !player.isReady;

          if (!this.playerColor) {
            this.updatePlayerColor(state)
          }
        }
      })
  }

  joinGame() {
    this.store.dispatch(new AddPlayerAction({ playerId: this.playerId }));
  }

  markReady() {
    this.store.dispatch(new MarkReadinessAction({ playerId: this.playerId }))
  }

  updatePlayerColor(state: AppState) {
    const index = state.players.findIndex(x => x.id === state.playerId)
    this.playerColor = `topbar-player-${index.toString()}`
  }

}
