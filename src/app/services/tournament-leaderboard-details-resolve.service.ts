import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Injectable()
export class TournamentLeaderboardDetailsResolveService {

  constructor(private service: FetchDataService) { }
  resolve(route: ActivatedRouteSnapshot) {

    const id_tournamentFlight = +route.queryParams['id_flight'];
    const id_tournamentHandicapFormat = route.queryParams['hdcpf'];
    return this.service.getScorecardDetails(route.paramMap.get('id'), id_tournamentFlight, id_tournamentHandicapFormat);

  }

}
