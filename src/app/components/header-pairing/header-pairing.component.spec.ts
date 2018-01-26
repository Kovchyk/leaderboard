import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPairingComponent } from './header-pairing.component';

describe('ComponentsComponent', () => {
  let component: HeaderPairingComponent;
  let fixture: ComponentFixture<HeaderPairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
