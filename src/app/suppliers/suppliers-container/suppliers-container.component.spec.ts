import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersContainerComponent } from './suppliers-container.component';

describe('SuppliersContainerComponent', () => {
  let component: SuppliersContainerComponent;
  let fixture: ComponentFixture<SuppliersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersContainerComponent ]
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
