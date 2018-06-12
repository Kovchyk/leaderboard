import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  templateUrl: './scoring-result.component.html',
  styleUrls: ['./scoring-result.component.css']
})
export class ScoringResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: FetchDataService) { }
  leaderBoardDetails: any;
  flightList: any;

  getScorecardDetails() {
    this.route.data.subscribe(data => {
      this.leaderBoardDetails = data.response[0];
      this.flightList = data.response[1].resultList;
    });
  }

  ngOnInit() {
    this.getScorecardDetails();
  }

}
