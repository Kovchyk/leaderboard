import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringResultComponent } from '../components/scoring-result/scoring-result.component';
import { PairingComponent } from '../components/pairing/pairing.component';
import { TournamentDetailsResolve } from '../services/tournament-details-resolve.service';
import { TournamentLeaderboardDetailsResolveService } from '../services/tournament-leaderboard-details-resolve.service';

const scoringResultRoutes: Routes =[
  { path: 'scoring-results',
    component: ScoringResultComponent,
    resolve: {
      response: TournamentLeaderboardDetailsResolveService
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(scoringResultRoutes),
  ],
  exports: [RouterModule],
  providers: [
    TournamentDetailsResolve, TournamentLeaderboardDetailsResolveService
  ],
})
export class ScoringResultRoutingModule { }
