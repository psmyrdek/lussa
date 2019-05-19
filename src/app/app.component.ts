import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitSuppliersAction } from './_app-state/actions/app.actions';
import { InitSupplierColorsAction } from './_app-state/actions/turn.actions';
import { AppState } from './_app-state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
    // Initial setup
    this.store.dispatch(new InitSuppliersAction({ noOfPlayers: 4 }));
    
    // Turn setup
    this.store.dispatch(new InitSupplierColorsAction());
  }

}
