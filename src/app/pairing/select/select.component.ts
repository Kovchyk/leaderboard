import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() array: Array<any> = [];
  @Input() selectedItemIndex: number;
  @Input() id_tournament: number;
  @Input() selectValueSelected = '';
  private isSelectOpen = false;
  private round = 0;
  private roundCourseName = '';

  openCloseSelectoptions() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  getRoundNumber(round) {
    // this.roundCourseName = this.array[round - 1].courseName;
    this.round = round;
    this.selectValueSelected = 'Round' + this.round;
    this.router.navigate(['pairing/', this.id_tournament], { queryParams: { round: this.round } });
    this.openCloseSelectoptions();
  }

  ngOnInit() {
    // this.selectValueSelected = this.selectValueSelected;
  }

}
