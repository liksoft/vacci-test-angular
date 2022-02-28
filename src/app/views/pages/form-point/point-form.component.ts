import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { PointService } from '../../../providers/point/point.service';
import { Point } from '../../../models/point';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-points',
  templateUrl: './point-form.component.html'
})

export class PointFormComponent extends ActionProcess  implements OnInit {


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

  public modelToUpdate : Point ;


  constructor(
    protected service: PointService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,
    private route: ActivatedRoute

  ) {
    super()
  }

  ngOnInit(): void {
    this.buildForm();
    this.getUrlParam()
    this.getPersonDataToUpadate()

  }

  getUrlParam() {
    this.route.queryParams.subscribe(params => {
      if (params.id != null) {
        this.ToUpdate = params.id ;
        //  this.uiState.startAction();
      }
    });

  }









}



