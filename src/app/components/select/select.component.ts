import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() array: Array<any> = [];
  @Input() selectedItemIndex: number;
  private selectValueSelected: string = "";
  private isSelectOpen: boolean = false;

  openCloseSelectoptions() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  getValue(index) { 
    this.selectValueSelected = this.array[index - 1];
    this.openCloseSelectoptions();
  }

  ngOnInit() {
    this.selectValueSelected = this.array[this.selectedItemIndex];
  }

}
