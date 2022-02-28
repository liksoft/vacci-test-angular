import { Component, OnInit } from '@angular/core';
import { defaultPath, routeDefinitions } from '../../../config/partials-configs';
import { PointService } from '../../../providers/point/point.service';
import { SupplierService } from '../../../providers/supplier/supplier.service';


@Component({
  selector: 'extern-app-list',
  templateUrl: './extern-app-list.component.html',
})
export class ExternAppListComponent implements OnInit {

  public listPointRoutePath: string;
  public data: [] = [];
  public d: []= [];
  constructor(
    private pointService: PointService,
    private supplierService: SupplierService,
  ) { }

  ngOnInit(): void {
    this.listPointRoutePath = `/${routeDefinitions.centersRoute}`;


    this.getData();

  }

  getData() {

    console.log("this.d");

    let u = this.pointService.get().subscribe((d) => {
      this.d = d.items.data;
    });

    let o = this.supplierService.get().subscribe((d) => {
      this.data = d.items.data;
    });



  }

  public counter(i) {
    return new Array(i);
  }

  getoData() {

    this.supplierService.get().subscribe((d) => {
      this.d = d.items.data;
    });

    console.log(this.d);
  }



}


