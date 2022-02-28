import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-grid-column]',
  templateUrl: './grid-column.component.html',
})
export class GridColumnComponent implements OnInit {


  @Input() set _d(value: {id:number}[]) {
    this.d = value;
  }
  get _d() {
    return this.d;
  }

  @Input() set _x(value: []) {
    this.x = value;
  }
  get _x() {
    return this.x;
  }


  @Input() set _data(value: []) {
    this.data = value;
  }
  get _data() {
    return this.data;
  }

  public data: [] = [];
  public d: {id:number}[];
  public x: any;
  constructor() { }

  ngOnInit(): void {
    console.log('cest gaté')
    console.log(this.data)
    console.log(this.d)
  }

  public counter(i) {
    return new Array(i);
  }




}
