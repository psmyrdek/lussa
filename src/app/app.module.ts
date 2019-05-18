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
import { BrokenStonesComponent } from './suppliers/broken-stones/broken-stones.component';

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
    BrokenStonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
