import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scoring-result',
  templateUrl: './scoring-result.component.html',
  styleUrls: ['./scoring-result.component.css']
})
export class ScoringResultComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService, private route: ActivatedRoute) { }
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
