import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringResultComponent } from '../components/scoring-result/scoring-result.component';
import { PairingComponent } from '../components/pairing/pairing.component';
import { PlayerResultComponent } from '../components/player-results/player-result.component';
import { ScoringResultDetailsComponent } from '../components/scoring-result-details/scoring-result-details.component';
import { TournamentDetailsResolve } from '../services/tournament-details-resolve.service';
import { TournamentLeaderboardDetailsResolveService } from '../services/tournament-leaderboard-details-resolve.service';

const scoringResultRoutes: Routes = [
  { path: 'scoring-results/:id',
    component: ScoringResultComponent,
    resolve: {
      response: TournamentLeaderboardDetailsResolveService
    }
  },
  { path: 'scoring-results/:id_tournament/:id_tournamentPlayer',
    component: ScoringResultDetailsComponent,
    // resolve: {
    //   response: TournamentLeaderboardDetailsResolveService
    // }
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
