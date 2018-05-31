import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) { }


  getTournamentDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicDetails?id_tournament=' + id);
  }

  getTournamentLeaderBoardDetails(id) {
    return forkJoin(
      this.http.get('https://leaderboard/proxy/TournamentPublicLeaderBoardDetails?id_tournament=' + id),
      this.http.get('https://leaderboard/proxy/TournamentPublicFlightList?id_tournament=' + id)
    );
  }

  getPublicFlightList(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicFlightList?id_tournament=' + id);
  }
}
