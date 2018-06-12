import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getTournamentDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicDetails?tournamentSecretKey=' + id);
  }
  getPublicLeaderBoardDetails(id, id_flight?, hdcp_format?) {
    id_flight = id_flight || '';
    hdcp_format = hdcp_format || 1;

    return this.http.get(
      'https://leaderboard/proxy/TournamentPublicLeaderBoardDetails?tournamentSecretKey=' + id +
      '&id_tournamentFlight=' + id_flight + '&id_tournamentHandicapFormat=' + hdcp_format
    );
  }
  getPublicFlightList(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicFlightList?tournamentSecretKey=' + id);
  }
  getScorecardDetails(id, id_flight?, hdcp_format?) {
    return forkJoin(
      this.getPublicLeaderBoardDetails(id, id_flight, hdcp_format),
      this. getPublicFlightList(id)
    );
  }
  getPlayerDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicPlayerScorecardDetails?id_tournamentPlayer=' + id);
  }
  getTeamDetails(id) {
    return this.http.get('https://leaderboard/proxy/TournamentPublicTeamScorecardDetails?id_tournamentTeam=' + id);
  }
}
