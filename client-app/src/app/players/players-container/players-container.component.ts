import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/_models/Player';
import { selectOtherPlayers } from 'src/app/_app-state/selectors/other-players';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';

@Component({
  selector: 'app-players-container',
  templateUrl: './players-container.component.html',
  styleUrls: ['./players-container.component.scss']
})
export class PlayersContainerComponent implements OnInit {

  players: Player[];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectOtherPlayers))
      .subscribe(
        (players: Player[]) => {
          this.players = players;
        }
      )
  }

  ngOnInit() {
  }

}
