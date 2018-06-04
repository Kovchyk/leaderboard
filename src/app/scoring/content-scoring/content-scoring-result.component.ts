import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-content-scoring-result',
  templateUrl: './content-scoring-result.component.html',
  styleUrls: ['./content-scoring-result.component.css']
})
export class ContentScoringResultComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: FetchDataService) { }

  @Input() leaderBoardDetails: any;
  private leaderBoardResultlist: Array<any> = [];
  private numberOfRounds = 0;
  private id_tournament = +this.route.snapshot.paramMap.get('id');
  private sub: Subscription;
  private id_tournamentFlight;
  private id_tournamentHandicapFormat;

  ngOnInit() {
    console.log('Scoring init');
    this.sub = this.route.queryParams.subscribe(params => {
      const id_tournamentFlight = +params['id_flight'];
      const id_tournamentHandicapFormat = params['hdcpf'];
      this.getLeaderoardDetails(this.id_tournament, id_tournamentFlight, id_tournamentHandicapFormat);
    });

    this.leaderBoardResultlist = this.leaderBoardDetails.resultList;
    this.numberOfRounds = this.leaderBoardDetails.numberOfRounds;

  }

  create_scores_array(array) {
      const scores_array = [];
      for (let i = 0; i < this.numberOfRounds; i++) {
        scores_array.push({});
      }

      for (let i = 0; i < scores_array.length; i++) {
        if (array.roundScoreList[i]) {
          scores_array.splice(array.roundScoreList[i].roundNumber - 1, 1, {score: array.roundScoreList[i].score});
        }
      }

      return scores_array;

  }

  getLeaderoardDetails(id, id_flight, hdcp_format) {
    this.service.getPublicLeaderBoardDetails(id, id_flight, hdcp_format).subscribe(data => {
      this.leaderBoardResultlist = data['resultList'];
    });
  }
  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
       items.push(i);
    }

    return items;
  }
}
