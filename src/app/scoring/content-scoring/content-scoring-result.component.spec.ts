import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScoringResultComponent } from './content-scoring-result.component';

describe('ContentScoringResultComponent', () => {
  let component: ContentScoringResultComponent;
  let fixture: ComponentFixture<ContentScoringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentScoringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentScoringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
