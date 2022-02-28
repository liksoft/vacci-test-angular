import { Component, OnInit } from '@angular/core';
import { defaultPath, routeDefinitions } from '../../../config/partials-configs';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public listPointRoutePath: string;

  constructor() { }

  ngOnInit(): void {
    this.listPointRoutePath = `/${routeDefinitions.centersRoute}`;

  }

}


