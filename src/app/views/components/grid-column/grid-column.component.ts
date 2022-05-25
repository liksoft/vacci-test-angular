import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.css']
})
export class GridColumnComponent implements OnInit {


  @Input() data: any = [];
  @Input() pos: number;

  constructor() { }

  ngOnInit(): void {
    console.log('cest gaté')
    console.log(this.data)
  }



}
