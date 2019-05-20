import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
import { TakeFromBrokenColorsAction } from 'src/app/_app-state/actions/player.actions';

@Component({
  selector: 'app-broken-stones',
  templateUrl: './broken-stones.component.html',
  styleUrls: ['./broken-stones.component.scss']
})
export class BrokenStonesComponent {

  brokenColors: Color[] = []

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select('app'))
      .subscribe(
        (state: AppState) => {
          this.brokenColors = state.brokenColors
        }
      )
  }

  takeAll(colorToTake: Color) {
    this.store.dispatch(new TakeFromBrokenColorsAction({ color: colorToTake }));
  }

}
