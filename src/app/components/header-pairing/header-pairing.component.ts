import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header-pairing',
  templateUrl: './header-pairing.component.html',
  styleUrls: ['./header-pairing.component.css']
})
export class HeaderPairingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  @Input() tournamentDetails: any;
  private startDate: any = 'JANUARY 10';
  private endDate: any = '12, 2018';
  private name = 'ARTEM TEST 3 ROUND 9 HOLES';
  private roundList: Array<any> = [];
  private round = 0;
  private roundCourseName = '';
  private sub: Subscription;
  private selectValueSelected = 'Round1';
  private isSelectOpen = false;

  openCloseSelectoptions() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  getRoundNumber(round) {
    this.roundCourseName = this.roundList[round - 1].courseName;
    this.round = round;
    this.selectValueSelected = 'Round' + this.round;
    this.router.navigate(['/'], { queryParams: { round: this.round } });
    this.openCloseSelectoptions();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.round = +params['round'] || 1;
      this.selectValueSelected = 'Round' + this.round;
    });

    const dummyDate = 171215;
    this.name = this.tournamentDetails.name ? this.tournamentDetails.name : this.name;
    this.startDate = this.tournamentDetails.startDate ? moment(this.tournamentDetails.startDate, 'YYMMDD').format('MMMM DD') : moment(dummyDate, 'YYMMDD').format('MMMM DD');
    this.endDate = this.tournamentDetails.endDate ? moment(this.tournamentDetails.endDate, 'YYMMDD').format('DD, YYYY') : moment(dummyDate, 'YYMMDD').format('DD, YYYY');
    this.roundList = this.tournamentDetails.resultList;
    this.roundCourseName = this.roundList[this.round - 1].courseName;
  }

}
