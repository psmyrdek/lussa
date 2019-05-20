import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
import { canSkipTurnAction } from 'src/app/_app-state/selectors/player-actions';
import { SkipTurnAction } from 'src/app/_app-state/actions/player.actions';

@Component({
  selector: 'app-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent {

  canSkipTurn: boolean = false;  

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(canSkipTurnAction))
      .subscribe(
        (canSkipTurn: boolean) => {
          this.canSkipTurn = canSkipTurn;
        }
      )
  }

  skipTurn() {
    this.store.dispatch(new SkipTurnAction());
  }

}
