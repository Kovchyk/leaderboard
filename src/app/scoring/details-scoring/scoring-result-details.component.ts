import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  templateUrl: './scoring-result-details.component.html',
  styleUrls: ['./scoring-result-details.component.css']
})
export class ScoringResultDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: FetchDataService) { }

  private id = +this.route.snapshot.paramMap.get('id_detail');

  ngOnInit() {
    this.getPlayerDetails(this.id);
  }

  getPlayerDetails(id) {
    this.service.getPlayerDetails(id).subscribe(data => {
      console.log(data);
    });
  }
}
