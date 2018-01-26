import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderPairingComponent } from './components/header-pairing/header-pairing.component';
import { HeaderScoringResultComponent } from './components/header-scoring-result/header-scoring-result.component';
import { PairingComponent } from './components/pairing/pairing.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';

import { FetchDataService } from './services/fetch-data.service';
import { TournamentDetailsResolve } from './services/tournament-details-resolve.service';
import { ContentPairingComponent } from './components/content-pairing/content-pairing.component';
import { ScoringResultComponent } from './components/scoring-result/scoring-result.component';
import { ContentScoringResultComponent } from './components/content-scoring-result/content-scoring-result.component';
import { TournamentLeaderboardDetailsResolveService } from './services/tournament-leaderboard-details-resolve.service';

const appRoutes: Routes =[
  { path: '', 
    component: PairingComponent, 
    resolve: {
      response: TournamentDetailsResolve
    }
  },
  { path: 'scoring-results',
    component: ScoringResultComponent,
    resolve: {
      response: TournamentLeaderboardDetailsResolveService
    }
  },
  { path: '**', redirectTo:'/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderPairingComponent,
    HeaderScoringResultComponent,
    PairingComponent,
    ContentPairingComponent,
    ScoringResultComponent,
    ContentScoringResultComponent,
    FooterComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FetchDataService, TournamentDetailsResolve, TournamentLeaderboardDetailsResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }