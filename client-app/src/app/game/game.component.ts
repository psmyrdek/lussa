import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../_app-state/state';
import { ActivatedRoute } from '@angular/router';
import { SetupGameIdAction } from '../_app-state/actions/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const gameId = this.route.snapshot.paramMap.get('gameId');

    this.store.dispatch(new SetupGameIdAction({gameId}));
  }

}
