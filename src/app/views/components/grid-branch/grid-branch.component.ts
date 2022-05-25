import { Component, HostBinding, Input, OnInit } from '@angular/core';


@Component({
  selector: 'grid-branchs',
  templateUrl: './grid-branch.component.html',
  styleUrls: ['./grid-branch.component.css']
})
export class GridBranchComponent  {


  @Input() data: any;
  @Input() max: number;

  constructor() { }

  ngOnInit(): void {
    console.log('cest gaté')
    console.log(this.data)
  }

  

}
