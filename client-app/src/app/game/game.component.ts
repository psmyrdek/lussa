import { Component, OnInit } from '@angular/core';
import { GamesService } from '../_services/games.service';
import { AppState } from '../_app-state/state';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { InitStateAction } from '../_app-state/actions/app.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const gameId = this.route.snapshot.paramMap.get('gameId');

    this.gamesService.joinGame(gameId)
      .subscribe(
        (state: AppState) => {
          this.store.dispatch(new InitStateAction({state}))
        },
        (err) => {
          alert(`Cannot join ${gameId}`)
        }
      )
  }

}
