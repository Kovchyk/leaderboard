import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScoringResultComponent } from './header-scoring-result.component';

describe('HeaderScoringResultComponent', () => {
  let component: HeaderScoringResultComponent;
  let fixture: ComponentFixture<HeaderScoringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderScoringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScoringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
