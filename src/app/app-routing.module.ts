import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringResultComponent } from './scoring/main-scoring/scoring-result.component';
import { PairingComponent } from './pairing/main-pairing/pairing.component';
import { TournamentDetailsResolve } from './services/tournament-details-resolve.service';
import { TournamentLeaderboardDetailsResolveService } from './services/tournament-leaderboard-details-resolve.service';

const appRoutes: Routes = [
  { path: 'pairing/:id',
    component: PairingComponent,
    resolve: {
      response: TournamentDetailsResolve
    }
  },
  { path: 'scoring/:id',
    component: ScoringResultComponent,
    resolve: {
      response: TournamentLeaderboardDetailsResolveService
    }
  },
  { path: '**', redirectTo: 'pairing' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
    TournamentDetailsResolve, TournamentLeaderboardDetailsResolveService
  ],
})
export class AppRoutingModule { }
