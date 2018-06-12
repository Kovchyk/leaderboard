import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() optionsArray: Array<any> = [];
  @Input() selectValueSelected = '';
  @Output() getValue = new EventEmitter<any>();

  isSelectOpen = false;

  openCloseSelectoptions() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  emitValue(value) {
    this.getValue.emit(value);
    this.openCloseSelectoptions();
  }

  ngOnInit() {
    console.log('Select init');
  }

}
