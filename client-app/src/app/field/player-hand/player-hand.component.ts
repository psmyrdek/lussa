import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
import { getCurrentPlayer } from 'src/app/_app-state/utils/get-current-player';
import { Player } from 'src/app/_models/Player';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  colors: Color[] = [];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(getCurrentPlayer))
      .subscribe(
        (player: Player) => {
          this.colors = player.turnColors;
        }
      )
  }

  ngOnInit() {
  }

}
