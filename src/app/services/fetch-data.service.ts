import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) { }


  getTournamentDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicDetails?id_tournament=' + id);
  }

  getTournamentLeaderBoardDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicLeaderBoardDetails?id_tournament=' + id);
  }

}