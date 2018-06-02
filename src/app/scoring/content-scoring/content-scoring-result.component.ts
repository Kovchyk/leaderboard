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

    this.sub = this.route.queryParams.subscribe(params => {
      const id_tournamentFlight = +params['id_flight'];
      const id_tournamentHandicapFormat = params['hdcpf'];
      this.getLeaderoardDetails(this.id_tournament, id_tournamentFlight, id_tournamentHandicapFormat);
    });

    this.leaderBoardResultlist = this.leaderBoardDetails.resultList;
    this.numberOfRounds = this.leaderBoardDetails.numberOfRounds;
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
