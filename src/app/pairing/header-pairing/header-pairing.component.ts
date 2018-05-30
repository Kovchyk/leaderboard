import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-pairing',
  templateUrl: './header-pairing.component.html',
  styleUrls: ['./header-pairing.component.css']
})
export class HeaderPairingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() tournamentDetails: any;
  private startDate: any = 'JANUARY 10';
  private endDate: any = '12, 2018';
  private name = 'ARTEM TEST 3 ROUND 9 HOLES';
  private roundList: Array<any> = [];
  private round = 0;
  private selectOptions: Array<any> = [];
  private roundCourseName = '';
  private sub: Subscription;
  private selectValueSelected = '';
  private isSelectOpen = false;
  private id_tournament = this.route.snapshot.paramMap.get('id');

  getRoundInfo(val) {
    const round = this.roundList[val].roundNumber;
    this.roundCourseName = this.roundList[val].courseName;
    this.selectValueSelected = this.selectOptions[val];
    this.router.navigate(['pairing/', this.id_tournament], { queryParams: { round: round } });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.round = +params['round'] || 1;
      this.selectValueSelected = 'Round' + this.round;
    });

    const dummyDate = 171215;
    this.name = this.tournamentDetails.name ? this.tournamentDetails.name : this.name;
    // tslint:disable-next-line:max-line-length
    this.startDate = this.tournamentDetails.startDate ? moment(this.tournamentDetails.startDate, 'YYMMDD').format('MMMM DD') : moment(dummyDate, 'YYMMDD').format('MMMM DD');
    this.endDate = this.tournamentDetails.endDate ? moment(this.tournamentDetails.endDate, 'YYMMDD').format('DD, YYYY') : moment(dummyDate, 'YYMMDD').format('DD, YYYY');
    this.roundList = this.tournamentDetails.resultList;
    this.roundCourseName = this.roundList[this.round - 1].courseName;

    this.roundList.forEach(element => {
      const item = 'Round' + element.roundNumber;
      this.selectOptions.push(item);
    });

  }

}
