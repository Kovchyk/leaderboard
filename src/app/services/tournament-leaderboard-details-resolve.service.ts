import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Injectable()
export class TournamentLeaderboardDetailsResolveService {

  constructor(private service: FetchDataService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTournamentLeaderBoardDetails(route.paramMap.get('id'));
  }

}
