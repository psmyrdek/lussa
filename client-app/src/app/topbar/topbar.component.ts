import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { GamesService } from '../_services/games.service';
import { ActivatedRoute } from '@angular/router';
import { InitStateAction } from '../_app-state/actions/app.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  joinGame() {
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
