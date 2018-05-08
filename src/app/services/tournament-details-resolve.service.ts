import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Injectable()
export class TournamentDetailsResolve implements Resolve<any>{

  constructor(private service: FetchDataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTournamentDetails(route.paramMap.get('id'));
  }

}