import { TestBed, inject } from '@angular/core/testing';

import { TournamentDetailsResolve.ServiceService } from './tournament-details-resolve.service.service';

describe('TournamentDetailsResolve.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentDetailsResolve.ServiceService]
    });
  });

  it('should be created', inject([TournamentDetailsResolve.ServiceService], (service: TournamentDetailsResolve.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
