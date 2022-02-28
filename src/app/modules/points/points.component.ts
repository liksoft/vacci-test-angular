import { Component, OnInit } from '@angular/core';
import { RoutesMap } from '../../lib/core/routes';
import { partialConfigs } from '../../config/partials-configs';


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {


  public routesMap: RoutesMap[];
  public routeDefinitions: { [index: string]: string };
  public loading: boolean = undefined;

  constructor() { }

  ngOnInit(): void {
    this.routeDefinitions = {
      topbar_career: 'Tableau de bord',
    };
    this.routesMap = [
      {
        key: 'topbar_career',
        route: `/${partialConfigs.routes.commonRoutes.careerRoute}/${partialConfigs.routes.commonRoutes.homeRoute}`
      }
    ];
  }

}
