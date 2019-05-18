import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenStonesComponent } from './broken-stones.component';

describe('BrokenStonesComponent', () => {
  let component: BrokenStonesComponent;
  let fixture: ComponentFixture<BrokenStonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenStonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
