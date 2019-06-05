import { Component, ViewChild, ElementRef } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
import { TakeFromRejectedColorsAction } from 'src/app/_app-state/actions/game.actions';
import { first, tap } from 'rxjs/operators';
import { getCurrentPlayer } from 'src/app/_utils/get-current-player';
import { MatDialog } from '@angular/material/dialog';
import { RejectedColorsWarningComponent } from 'src/app/dialogs/rejected-colors-warning/rejected-colors-warning.component';

@Component({
  selector: 'app-rejected-colors',
  templateUrl: './rejected-colors.component.html',
  styleUrls: ['./rejected-colors.component.scss']
})
export class RejectedColorsComponent {

  @ViewChild('warning', { static: true }) warningRef: ElementRef;

  rejectedColors: Color[] = []

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.store
      .pipe(select('app'))
      .subscribe(
        (state: AppState) => {
          this.rejectedColors = state.rejectedSupplierColors
        }
      )
  }

  takeAll(colorToTake: Color) {
    this.store.pipe(
      select('app'),
      first(),
      tap((state: AppState) => {
        const player = getCurrentPlayer(state);

        if (player.turnColors.length) {
          this.dialog.open(RejectedColorsWarningComponent)
        } else {
          this.store.dispatch(new TakeFromRejectedColorsAction({ color: colorToTake }));
        }
      })
    ).subscribe();
  }

}
