import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  tournamentDetails: any;

  getTournamentDetails() {
    this.route.data.subscribe(data => {
      this.tournamentDetails = data.response;
    });
  }

  ngOnInit() {
    this.getTournamentDetails();
  }

}
