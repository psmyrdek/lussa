import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersContainerComponent } from './suppliers-container.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/_app-state/app.reducer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SuppliersContainerComponent', () => {
  let component: SuppliersContainerComponent;
  let fixture: ComponentFixture<SuppliersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({app: appReducer})
      ],
      declarations: [ 
        SuppliersContainerComponent,
        SupplierComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
