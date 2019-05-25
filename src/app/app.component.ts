import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitSuppliersAction, AddPlayerAction, InitBonusColorsAction } from './_app-state/actions/app.actions';
import { InitSupplierColorsAction } from './_app-state/actions/turn.actions';
import { AppState } from './_app-state/state';

import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
    // Initial setup
    this.store.dispatch(new AddPlayerAction({id: uuidv4()}));

    this.store.dispatch(new InitSuppliersAction({ noOfPlayers: 4 }));
    this.store.dispatch(new InitBonusColorsAction());
    
    // Turn setup
    this.store.dispatch(new InitSupplierColorsAction());
  }

}
