import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusColorsComponent } from './bonus-colors.component';

describe('BonusColorsComponent', () => {
  let component: BonusColorsComponent;
  let fixture: ComponentFixture<BonusColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
