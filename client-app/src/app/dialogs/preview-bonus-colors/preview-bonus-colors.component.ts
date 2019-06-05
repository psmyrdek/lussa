import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-preview-bonus-colors',
  templateUrl: './preview-bonus-colors.component.html',
  styleUrls: ['./preview-bonus-colors.component.scss']
})
export class PreviewBonusColorsComponent implements OnInit {

  bonusColors: Color[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select('app'),
      first()
    )
    .subscribe(
      (state: AppState) => {
        this.bonusColors = state.bonusColors;
      }
    )
  }

}
