import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InitSuppliersAction, AddPlayerAction, InitBonusColorsAction } from './_app-state/actions/app.actions';
import { InitSupplierColorsAction, MarkNextRoundAction } from './_app-state/actions/round.actions';
import { AppState } from './_app-state/state';

import { v4 as uuidv4 } from 'uuid'
import { shouldProceedToNextRound } from './_app-state/utils/round-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // // Initial setup
    // this.store.dispatch(new AddPlayerAction({id: uuidv4()}));

    // this.store.dispatch(new InitSuppliersAction({ noOfPlayers: 4 }));
    // this.store.dispatch(new InitBonusColorsAction());
    
    // // Round setup
    // this.store.dispatch(new InitSupplierColorsAction());

    // this.store.pipe(select('app'))
    //   .subscribe((state: AppState) => {
    //     if (shouldProceedToNextRound(state)) {
    //       alert('Next round!')
    //       this.store.dispatch(new InitSupplierColorsAction());
    //       this.store.dispatch(new MarkNextRoundAction());
    //     }
    //   })
  }

}
