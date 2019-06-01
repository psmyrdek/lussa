import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { GamesService } from '../_services/games.service';
import { ActivatedRoute } from '@angular/router';
import { InitStateAction } from '../_app-state/actions/app.actions';
import { MarkReadinessAction } from '../_app-state/actions/player.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  canJoin: boolean = true;
  canMarkReady: boolean = false;

  constructor(
    private store: Store<AppState>,
    private gamesService: GamesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {
        const player = state.players.find(x => x.id === state.playerId)

        this.canJoin = !state.isGameLoaded;
        this.canMarkReady = state.isGameLoaded && !player.isReady;
      })
  }

  joinGame() {
    const gameId = this.route.snapshot.paramMap.get('gameId');

    this.gamesService.joinGame(gameId)
      .subscribe(
        (state: AppState) => {
          this.store.dispatch(new InitStateAction({state}));
        },
        (err) => {
          alert(`Cannot join ${gameId}`)
        }
      )
  }

  markReady() {
    this.store.dispatch(new MarkReadinessAction())
  }

}
