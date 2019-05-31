import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import { SuppliersContainerComponent } from '../suppliers/suppliers-container/suppliers-container.component';
import { RejectedColorsComponent } from '../suppliers/rejected-colors/rejected-colors.component';
import { FieldContainerComponent } from '../field/field-container/field-container.component';
import { PlayersContainerComponent } from '../players/players-container/players-container.component';
import { SupplierComponent } from '../suppliers/supplier/supplier.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../_app-state/app.reducer';

describe('StageComponent', () => {
  let component: StageComponent;
  let fixture: ComponentFixture<StageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          app: appReducer
        })
      ],
      declarations: [
        StageComponent,
        SuppliersContainerComponent,
        RejectedColorsComponent,
        FieldContainerComponent,
        SupplierComponent,
        PlayersContainerComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
