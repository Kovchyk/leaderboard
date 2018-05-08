import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-scoring-result',
  templateUrl: './content-scoring-result.component.html',
  styleUrls: ['./content-scoring-result.component.css']
})
export class ContentScoringResultComponent implements OnInit {

  @Input() leaderBoardDetails: any;
  leaderBoardResultlist: Array<any> = [];
  numberOfRounds: number = 0;

  constructor() { }

  ngOnInit() {
    this.leaderBoardResultlist = this.leaderBoardDetails.resultList;
    this.numberOfRounds = this.leaderBoardDetails.numberOfRounds;
    console.log(this.leaderBoardResultlist);
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
}
