
import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { PointService } from '../../../providers/point/point.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'PointsHome',
  templateUrl: './home.component.html'
})
export class PointsHomeComponent extends ActionProcess implements OnInit {



   formParam =  [

        {

          "label": "Nom",
          "type": "text",
          "formControlName": "label",
          "classes": "clr-input",
          "requiredIf": null,
          "items": [],
          "rules": {"isRequired": true},
          "placeholder": "Saisir un nom ...",
          "disabled": false,
          "readonly": false,
          "descriptionText": "Saisir un nom de laboratoire .",
          "formControlGroupKey": null,
          "formControlIndex": 1,
          "hidden": false,
          "isRepeatable": false,
          "uniqueCondition": "",
          "containerClass": "clr-col-12 clr-col-sm-6",
        }
  ] ;


  constructor(
    protected service: PointService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,
    protected router: Router,
  ) {
    super()
  }

  ngOnInit(): void {
    this.buildForm();
    this.getData();
  }

  Add() {
    this.router.navigate([`${this.routeDefinitions.pointsRoute}/${this.routeDefinitions.createRoute}`]);
  }

  Update(point: any) {
    this.router.navigate([`${this.routeDefinitions.pointsRoute}/${this.routeDefinitions.createRoute}`],  { queryParams: { id: point.id } });
  }



}



