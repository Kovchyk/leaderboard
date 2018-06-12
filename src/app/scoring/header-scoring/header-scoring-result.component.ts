import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-scoring-result',
  templateUrl: './header-scoring-result.component.html',
  styleUrls: ['./header-scoring-result.component.css']
})
export class HeaderScoringResultComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() leaderBoardDetails: any;
  @Input() flightList: any;
  startDate: any = 'JANUARY 10';
  endDate: any = '12, 2018';
  name = 'ARTEM TEST 3 ROUND 9 HOLES';
  private roundList: Array<any> = [];
  private round = 0;
  roundCourseName = '';
  selectOptions: Array<any> = ['Gross', 'Net'];
  private flightRequest: Array<any> = [{hdcpf: 1}, {hdcpf: 2}];
  selectValueSelected = '';
  id_tournament = this.route.snapshot.paramMap.get('id');
  private id_tournamentFlight: number;
  private id_tournamentHandicapFormat: number;

  getRoundInfo(val) {
    const queryParams = this.flightRequest[val];
    this.selectValueSelected = this.selectOptions[val];
    this.router.navigate(['scoring/', this.id_tournament], { queryParams: queryParams });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_tournamentFlight = +params['id_flight'];
      this.id_tournamentHandicapFormat = params['hdcpf'];
    });

    this.flightList.forEach(flight => {
      this.selectOptions.push(flight.flightName + '-Gross');
      this.selectOptions.push(flight.flightName + '-Net');

      for (let format = 1; format <= 2; format++) {
        this.flightRequest.push({
          id_flight: flight.id_tournamentFlight,
          hdcpf: format
        });
      }
    });

    const dummyDate = 171215;
    this.name = this.leaderBoardDetails.name ? this.leaderBoardDetails.name : this.name;
    // tslint:disable-next-line:max-line-length
    this.startDate = this.leaderBoardDetails.startDate ? moment(this.leaderBoardDetails.startDate, 'YYMMDD').format('MMMM DD') : moment(dummyDate, 'YYMMDD').format('MMMM DD');
    this.endDate = this.leaderBoardDetails.endDate ? moment(this.leaderBoardDetails.endDate, 'YYMMDD').format('DD, YYYY') : moment(dummyDate, 'YYMMDD').format('DD, YYYY');
    this.roundList = this.leaderBoardDetails.resultList[0].roundScoreList;
    this.roundCourseName = this.leaderBoardDetails.courseName;
    this.selectValueSelected = this.selectOptions[0];
    this.flightRequest.forEach( (option, i) => {

      if (option.id_flight && option.id_flight === this.id_tournamentFlight && option.hdcpf === +this.id_tournamentHandicapFormat) {
        this.selectValueSelected = this.selectOptions[i];
      } else if (!option.id_flight && option.hdcpf === +this.id_tournamentHandicapFormat) {
        this.selectValueSelected = this.selectOptions[i];
      }

    });

  }

}
