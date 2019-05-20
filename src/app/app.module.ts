import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersContainerComponent } from './players/players-container/players-container.component';
import { SuppliersContainerComponent } from './suppliers/suppliers-container/suppliers-container.component';
import { FieldContainerComponent } from './field/field-container/field-container.component';
import { StageComponent } from './stage/stage.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { ColumnsComponent } from './field/columns/columns.component';
import { ColumnComponent } from './field/column/column.component';
import { RejectedColorsComponent } from './suppliers/rejected-colors/rejected-colors.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './_app-state/app.reducer';
import { PlayerHandComponent } from './field/player-hand/player-hand.component';
import { PlayerActionsComponent } from './field/player-actions/player-actions.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersContainerComponent,
    SuppliersContainerComponent,
    FieldContainerComponent,
    StageComponent,
    SupplierComponent,
    ColumnsComponent,
    ColumnComponent,
    RejectedColorsComponent,
    PlayerHandComponent,
    PlayerActionsComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
