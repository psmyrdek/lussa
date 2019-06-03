import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
import { canSkipTurn } from 'src/app/_app-state/selectors/can-skip-turn';
import { SkipTurnAction } from 'src/app/_app-state/actions/game.actions';

@Component({
  selector: 'app-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent {

  canSkipTurn: boolean = false;  

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(canSkipTurn))
      .subscribe(
        (canSkipTurn: boolean) => {
          this.canSkipTurn = canSkipTurn;
        }
      )
  }

  skipTurn() {
    if (!this.canSkipTurn) {
      return;
    }
    this.store.dispatch(new SkipTurnAction());
  }

}
