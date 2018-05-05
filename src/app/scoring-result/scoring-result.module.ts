import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoringResultComponent } from '../components/scoring-result/scoring-result.component';
import { HeaderScoringResultComponent } from '../components/header-scoring-result/header-scoring-result.component';
import { ContentScoringResultComponent } from '../components/content-scoring-result/content-scoring-result.component';
import { ScoringResultDetailsComponent } from '../components/scoring-result-details/scoring-result-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoringResultComponent,
    HeaderScoringResultComponent,
    ContentScoringResultComponent,
    ScoringResultDetailsComponent
  ]
})
export class ScoringResultModule { }
