import { TestBed, inject } from '@angular/core/testing';

import { TournamentLeaderboardDetailsResolveService } from './tournament-leaderboard-details-resolve.service';

describe('TournamentLeaderboardDetailsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentLeaderboardDetailsResolveService]
    });
  });

  it('should be created', inject([TournamentLeaderboardDetailsResolveService], (service: TournamentLeaderboardDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
