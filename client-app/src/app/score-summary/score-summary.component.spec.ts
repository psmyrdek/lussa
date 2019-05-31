import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSummaryComponent } from './score-summary.component';

describe('ScoreSummaryComponent', () => {
  let component: ScoreSummaryComponent;
  let fixture: ComponentFixture<ScoreSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
