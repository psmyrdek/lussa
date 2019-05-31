import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  colors: Color[] = [];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select('app'))
      .subscribe(
        (state: AppState) => {
          this.colors = state.playerTurnColors
        }
      )
  }

  ngOnInit() {
  }

}
