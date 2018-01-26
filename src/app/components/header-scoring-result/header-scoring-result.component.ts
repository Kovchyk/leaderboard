import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-scoring-result',
  templateUrl: './header-scoring-result.component.html',
  styleUrls: ['./header-scoring-result.component.css']
})
export class HeaderScoringResultComponent implements OnInit {

  constructor(private location: Location) { }

  @Input() tournamentDetails: any;
  startDate: any = 'JANUARY 10';
  endDate: any = '12, 2018';
  name = 'ARTEM TEST 3 ROUND 9 HOLES';
  roundList: Array<any> = [];
  courseName = '';

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const dummyDate = 171215;
    this.name = this.tournamentDetails.name ? this.tournamentDetails.name : this.name;
    this.startDate = this.tournamentDetails.startDate ? moment(this.tournamentDetails.startDate, 'YYMMDD').format('MMMM DD') : moment(dummyDate, 'YYMMDD').format('MMMM DD');
    this.endDate = this.tournamentDetails.endDate ? moment(this.tournamentDetails.endDate, 'YYMMDD').format('DD, YYYY') : moment(dummyDate, 'YYMMDD').format('DD, YYYY');
    this.roundList = this.tournamentDetails.resultList;
    this.courseName = this.tournamentDetails.courseName;
  }

}
