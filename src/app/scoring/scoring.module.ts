import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoringRoutingModule } from './scoring-routing.module';

import { ScoringResultComponent } from './main-scoring/scoring-result.component';
import { HeaderScoringResultComponent } from './header-scoring/header-scoring-result.component';
import { ContentScoringResultComponent } from './content-scoring/content-scoring-result.component';
import { ScoringResultDetailsComponent } from './details-scoring/scoring-result-details.component';

@NgModule({
  imports: [
    CommonModule,
    ScoringRoutingModule
  ],
  declarations: [
    ScoringResultComponent,
    HeaderScoringResultComponent,
    ContentScoringResultComponent,
    ScoringResultDetailsComponent
  ]
})
export class ScoringModule { }
