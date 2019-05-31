import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedColorsComponent } from './rejected-colors.component';

describe('RejectedColorsComponent', () => {
  let component: RejectedColorsComponent;
  let fixture: ComponentFixture<RejectedColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
