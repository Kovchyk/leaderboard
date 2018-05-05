import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringResultDetailsComponent } from './scoring-result-details.component';

describe('ScoringResultDetailsComponent', () => {
  let component: ScoringResultDetailsComponent;
  let fixture: ComponentFixture<ScoringResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
