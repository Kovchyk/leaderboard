import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getTournamentDetails() {
    return this.http.get('https://leaderboard/proxy/TournamentPublicDetails?id_tournament=200');
  }

  getTournamentLeaderBoardDetails() {
    return this.http.get('https://leaderboard/proxy/TournamentPublicLeaderBoardDetails?id_tournament=200');
  }

}