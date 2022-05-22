import { Component, OnInit, ViewChild, ElementRef,OnChanges } from '@angular/core';
import { defaultPath, routeDefinitions } from '../../../config/partials-configs';
import { GridbranchService } from '../../../providers/grid-branch/grid-branch.service';
import { LevelService } from '../../../providers/level/level.service';
import { Observable,forkJoin } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
})
export class GridListComponent implements OnInit {

  public listPointRoutePath: string;
  public data: {hr_level_id:number}[] = [];
  public branchs:Observable <any>;
  public d: {order:number}[];


  constructor(
    private gridbranchService: GridbranchService,
    private levelService: LevelService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.listPointRoutePath = `/${routeDefinitions.centersRoute}`;
    this.getData();

    console.log('index') ;
    console.log(this.d) ;

  }



  public  getData() {


    let s =this.levelService.get()
    let b = this.gridbranchService.get()
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


