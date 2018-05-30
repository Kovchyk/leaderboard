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
  private startDate: any = 'JANUARY 10';
  private endDate: any = '12, 2018';
  private name = 'ARTEM TEST 3 ROUND 9 HOLES';
  private roundList: Array<any> = [];
  private roundCourseName = '';
  private selectOptions: Array<any> = ['test'];
  private selectValueSelected = '';
  private id_tournament = this.route.snapshot.paramMap.get('id');

  getRoundInfo(val) {
    console.log(val);
  }

  ngOnInit() {
    const dummyDate = 171215;
    this.name = this.leaderBoardDetails.name ? this.leaderBoardDetails.name : this.name;
    // tslint:disable-next-line:max-line-length
    this.startDate = this.leaderBoardDetails.startDate ? moment(this.leaderBoardDetails.startDate, 'YYMMDD').format('MMMM DD') : moment(dummyDate, 'YYMMDD').format('MMMM DD');
    this.endDate = this.leaderBoardDetails.endDate ? moment(this.leaderBoardDetails.endDate, 'YYMMDD').format('DD, YYYY') : moment(dummyDate, 'YYMMDD').format('DD, YYYY');
    this.roundList = this.leaderBoardDetails.resultList;
    this.roundCourseName = this.leaderBoardDetails.courseName;
    this.selectValueSelected = this.selectOptions[0];
  }

}
