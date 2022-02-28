import { Component, OnInit, ViewChild, ElementRef,OnChanges } from '@angular/core';
import { defaultPath, routeDefinitions } from '../../../config/partials-configs';
import { PointService } from '../../../providers/point/point.service';
import { ClasseService } from '../../../providers/classe/classe.service';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
})
export class GridListComponent implements OnInit {

  public listPointRoutePath: string;
  public data: {hr_level_id:number}[] = [];
  public d$:Observable <any>;
  public d: {order:number}[];


  constructor(
    private pointService: PointService,
    private classeService: ClasseService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.listPointRoutePath = `/${routeDefinitions.centersRoute}`;


   //this.d = this.getBranchType();
    this.getBranchType();

    console.log('index') ;
    console.log(this.d) ;
    // for (var index of this.d) {
    //   console.log('index') ;

    // }
   //console.log(this.tttt.nativeElement.getElementsByClassName("col0"));


    // this.data.forEach((item, index) => {
    //   if(item.hr_level_id ==  d[0].id)
    // });
    //this.tttt.nativeElement.innerHTML = "DOM updated successfully!!!";



  }

  @ViewChild('tttt', {static: false}) tttt: ElementRef;



  public async getBranchType() {

    this.data = await this.pointService.get().pipe(
      map(a => {
        return a.items.data;
    })).toPromise() ;

    this.d = await this.classeService.get().pipe(
      map(a => {
        return a.items.data;
    })).toPromise() ;

    for (var index of  this.d) {
      console.log(index) ;

    }

    console.log(document.getElementsByClassName("col0"));

    // console.log('fffffffffff');
    // console.log(this.d);

    // this.classeService.get().subscribe((d) => {
    //   this.data = d.items.data;
    //   console.log(this.data);
    // });

  }

  public  getData() {


    this.classeService.get().subscribe((d) => {
      this.data = d.items.data;
      console.log(this.data);
    });

  }

  public counter(i) {
    return new Array(i);
  }

  compare(a : {order:number}, b: {order:number}) {
    // Use toUpperCase() to ignore character casing
    const order1 = a.order;
    const order2 = b.order;

    let comparison = 0;
    if (order1 > order2) {
      comparison = 1;
    } else if (order1 < order2) {
      comparison = -1;
    }
    return comparison;
  }

  getoData() {

    this.classeService.get().subscribe((d) => {
      this.d = d.items.data;
    });

    console.log(this.d);
  }



}


