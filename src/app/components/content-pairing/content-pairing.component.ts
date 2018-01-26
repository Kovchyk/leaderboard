import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'content-pairing',
  templateUrl: './content-pairing.component.html',
  styleUrls: ['./content-pairing.component.css']
})
export class ContentPairingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  @Input() roundList: Array<any>;
  private selectedRound: Array<any>;
  private teeTimes: Array<any> = [];
  private round: number = 0;
  private sub: Subscription;

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.round = +params['round'] || 1;
      this.selectedRound = this.roundList[this.round - 1].teeTimes;
      this.teeTimes = [];

      this.selectedRound.forEach(value => {
        this.teeTimes.push(
          {
            dateTime: moment(value.dateTime, 'YYMMDDHHmmssZZ').format("hh:mm A"),
            holeNumber: value.holeNumber ? value.holeNumber : "",
            playersList: value.players
          }
        );
      });
      
    });

  }

}