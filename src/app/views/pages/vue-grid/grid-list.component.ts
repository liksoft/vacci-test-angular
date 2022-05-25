import { Component, OnInit, ViewChild, ElementRef,OnChanges } from '@angular/core';
import { defaultPath, routeDefinitions } from '../../../config/partials-configs';
import { GridbranchService } from '../../../providers/grid-branch/grid-branch.service';
import { LevelService } from '../../../providers/level/level.service';
import { Observable,forkJoin } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls : ['grid-list.component.css']
})
export class GridListComponent implements OnInit {

  public data: {hr_level_id:number}[] = [];
  public branchs:Observable <any>;


  constructor(
    private gridbranchService: GridbranchService,
    private levelService: LevelService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.getData();

    console.log('index') ;
  }



  public  getData() {


    let s =this.levelService.get()
    let b = this.gridbranchService.get('with=children')
    forkJoin(
     [s,b]
    ).subscribe(
        data => {
          this.data = data[0].items.data;
          this.branchs = data[1].items.data;

          console.log(this.data);
          console.log(this.branchs);
        },
        err => console.error(err)
    );

  }


  



}


