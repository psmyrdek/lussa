import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { AddPlayerAction, MarkReadinessAction } from '../_app-state/actions/game.actions';

@Component({
  selector: 'app-player-nav',
  templateUrl: './player-nav.component.html',
  styleUrls: ['./player-nav.component.scss']
})
export class PlayerNavComponent implements OnInit {

  canJoin: boolean = true;
  canMarkReady: boolean = false;

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
        }
      })
  }

  joinGame() {
    this.store.dispatch(new AddPlayerAction());
  }

  markReady() {
    this.store.dispatch(new MarkReadinessAction())
  }

}
