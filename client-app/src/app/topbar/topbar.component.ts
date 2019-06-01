import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { GamesService } from '../_services/games.service';
import { ActivatedRoute } from '@angular/router';
import { InitStateAction } from '../_app-state/actions/app.actions';
import { MessagingService } from '../_services/messaging.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  canJoin: boolean = true;

  constructor(
    private store: Store<AppState>,
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private messaging: MessagingService
  ) { }

  ngOnInit() {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {
        this.canJoin = !state.isGameCreated
      })
  }

  joinGame() {
    const gameId = this.route.snapshot.paramMap.get('gameId');

    this.gamesService.joinGame(gameId)
      .subscribe(
        (state: AppState) => {
          this.store.dispatch(new InitStateAction({state}));
          this.messaging.emitJoin(gameId);
        },
        (err) => {
          alert(`Cannot join ${gameId}`)
        }
      )
  }

}
