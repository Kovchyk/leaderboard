import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-scoring-result',
  templateUrl: './content-scoring-result.component.html',
  styleUrls: ['./content-scoring-result.component.css']
})
export class ContentScoringResultComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  @Input() leaderBoardDetails: any;
  private leaderBoardResultlist: Array<any> = [];
  private numberOfRounds = 0;
  private id_tournament = this.route.snapshot.paramMap.get('id');


  ngOnInit() {
    this.leaderBoardResultlist = this.leaderBoardDetails.resultList;
    this.numberOfRounds = this.leaderBoardDetails.numberOfRounds;
    console.log(this.leaderBoardResultlist);
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
       items.push(i);
    }
    return items;
  }
}
