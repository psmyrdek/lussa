import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerFieldComponent } from './marker-field.component';

describe('MarkerFieldComponent', () => {
  let component: MarkerFieldComponent;
  let fixture: ComponentFixture<MarkerFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
