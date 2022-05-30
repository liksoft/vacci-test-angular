import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sup-grid-column',
  templateUrl: './sup-grid-column.component.html',
  styleUrls: ['./sup-grid-column.component.css']
})
export class SupGridColumnComponent implements OnInit {



  @Input() data: any = null;

  constructor() { }

  ngOnInit(): void {
    console.log('fffff',typeof(this.data))
  }



}
