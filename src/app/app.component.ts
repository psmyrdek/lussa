import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './_app-state/app.reducer';
import { InitSuppliersAction, InitSupplierColorsAction } from './_app-state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new InitSuppliersAction({ noOfPlayers: 4 }));
    this.store.dispatch(new InitSupplierColorsAction());
  }

}
