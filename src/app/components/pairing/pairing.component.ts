import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService, private route: ActivatedRoute) { }

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
