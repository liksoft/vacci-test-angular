import { Component, HostBinding, Input, OnInit } from '@angular/core';


@Component({
  selector: 'grid-branchs',
  templateUrl: './grid-branch.component.html',
})
export class GridBranchComponent  {


  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('cest gaté')
    console.log(this.data)
  }

  

}
