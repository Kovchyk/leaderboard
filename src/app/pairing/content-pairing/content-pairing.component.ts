import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-pairing',
  templateUrl: './content-pairing.component.html',
  styleUrls: ['./content-pairing.component.css']
})
export class ContentPairingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  @Input() roundList: Array<any>;
  selectedRound: Array<any>;
  teeTimes: Array<any> = [];
  round = 1;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.round = +params['round'] || 1;
      this.selectedRound = this.roundList[this.round - 1].teeTimes;
      this.teeTimes = [];
      this.selectedRound.forEach(value => {
        console.log(value);
        this.teeTimes.push(
          {
            dateTime: value.dateTime ? moment(value.dateTime, 'YYMMDDHHmmssZZ').format('hh:mm A') :
            moment(this.roundList[this.round - 1].roundDate, 'YYMMDDHHmmssZZ').format('hh:mm A'),
            hole: value.name ? value.name : value.holeNumber,
            playersList: value.players
          }
        );
      });

    });

  }

}
