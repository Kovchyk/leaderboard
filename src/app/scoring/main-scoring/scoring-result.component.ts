import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './scoring-result.component.html',
  styleUrls: ['./scoring-result.component.css']
})
export class ScoringResultComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  leaderBoardDetails: any;

  getTournamentLeaderBoardDetails() {
    this.route.data.subscribe(data => {
      this.leaderBoardDetails = data.response;
    });
  }

  ngOnInit() {
    this.getTournamentLeaderBoardDetails();
  }

}
