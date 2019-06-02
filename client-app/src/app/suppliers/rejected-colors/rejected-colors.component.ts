import { Component } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
// import { TakeFromRejectedColorsAction } from 'src/app/_app-state/actions/player.actions';

@Component({
  selector: 'app-rejected-colors',
  templateUrl: './rejected-colors.component.html',
  styleUrls: ['./rejected-colors.component.scss']
})
export class RejectedColorsComponent {

  rejectedColors: Color[] = []

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select('app'))
      .subscribe(
        (state: AppState) => {
          this.rejectedColors = state.rejectedSupplierColors
        }
      )
  }

  takeAll(colorToTake: Color) {
    // this.store.dispatch(new TakeFromRejectedColorsAction({ color: colorToTake }));
  }

}
