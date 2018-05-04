import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderPairingComponent } from './components/header-pairing/header-pairing.component';

import { PairingComponent } from './components/pairing/pairing.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ScoringResultModule } from './scoring-result/scoring-result.module';
import { FetchDataService } from './services/fetch-data.service';

import { ContentPairingComponent } from './components/content-pairing/content-pairing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPairingComponent,
    PairingComponent,
    ContentPairingComponent,
    FooterComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScoringResultModule,
    FormsModule
  ],
  providers: [
    FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }