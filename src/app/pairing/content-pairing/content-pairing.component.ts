import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-pairing',
  templateUrl: './content-pairing.component.html',
  styleUrls: ['./content-pairing.component.css']
})
export class ContentPairingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  @Input() roundList: Array<any>;
  private selectedRound: Array<any>;
  private teeTimes: Array<any> = [];
  private round = 1;
  private sub: Subscription;

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.round = +params['round'] || 1;
      this.selectedRound = this.roundList[this.round - 1].teeTimes;
      this.teeTimes = [];
      // moment(this.round_list.get(this.id_tournamentRound).get("startTime"), "HHmm").format("hh:mm A")
      this.selectedRound.forEach(value => {
        console.log(value);
        this.teeTimes.push(
          {
            dateTime: value.dateTime ? moment(value.dateTime, 'YYMMDDHHmmssZZ').format('hh:mm A') :
            moment(this.roundList[this.round - 1].roundDate, 'YYMMDDHHmmssZZ').format('hh:mm A'),
            holeNumber: value.name ? value.name : '',
            playersList: value.players
          }
        );
      });

    });

  }

}
