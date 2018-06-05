import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringResultComponent } from './main-scoring/scoring-result.component';
import { PairingComponent } from '../pairing/main-pairing/pairing.component';
import { ScoringResultDetailsComponent } from './details-scoring/scoring-result-details.component';

const scoringResultRoutes: Routes = [
  { path: 'scoring/:id_tournament/:id_detail',
    component: ScoringResultDetailsComponent,
    // resolve: {
    //   response: RoundDetailsResolveService
    // }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(scoringResultRoutes),
  ],
  exports: [RouterModule],
  providers: [

  ],
})
export class ScoringRoutingModule { }
