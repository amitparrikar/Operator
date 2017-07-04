import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'op-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  @Input('listData') listItems:Array<{}> = [];
  @Input('selectedItem') selectedItem:string = '';

  constructor() { }

  ngOnInit() {
  }

}
