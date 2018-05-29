import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderPairingComponent } from './pairing/header-pairing/header-pairing.component';

import { PairingComponent } from './pairing/main-pairing/pairing.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './pairing/select/select.component';

import { AppRoutingModule } from './app-routing.module';
import { ScoringModule } from './scoring/scoring.module';
import { FetchDataService } from './services/fetch-data.service';

import { ContentPairingComponent } from './pairing/content-pairing/content-pairing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPairingComponent,
    PairingComponent,
    ContentPairingComponent,
    FooterComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScoringModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    FetchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
