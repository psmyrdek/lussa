import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersContainerComponent } from './players/players-container/players-container.component';
import { SuppliersContainerComponent } from './suppliers/suppliers-container/suppliers-container.component';
import { FieldContainerComponent } from './field/field-container/field-container.component';
import { StageComponent } from './stage/stage.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersContainerComponent,
    SuppliersContainerComponent,
    FieldContainerComponent,
    StageComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
