import { Component } from '@angular/core';
import { AppState } from '../_app-state/state';
import { Store, select } from '@ngrx/store';
import { Color } from '../_models/ColorEnum';

@Component({
  selector: 'app-bonus-colors',
  templateUrl: './bonus-colors.component.html',
  styleUrls: ['./bonus-colors.component.scss']
})
export class BonusColorsComponent {

  roundNo: number;
  bonusColor: Color;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {
        this.roundNo = state.roundNo;
        if (this.roundNo > 0) {
          this.bonusColor = state.bonusColors[this.roundNo - 1];
        }
      })
  }

}
