import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPairingComponent } from './content-pairing.component';

describe('ContentPairingComponent', () => {
  let component: ContentPairingComponent;
  let fixture: ComponentFixture<ContentPairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
