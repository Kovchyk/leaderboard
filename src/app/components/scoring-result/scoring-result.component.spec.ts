import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringResultComponent } from './scoring-result.component';

describe('ScoringResultComponent', () => {
  let component: ScoringResultComponent;
  let fixture: ComponentFixture<ScoringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
