import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { AppointmentService } from '../../../providers/appointment/appointment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';


@Component({
  selector: 'appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent extends ActionProcess implements OnInit {


  public data: {}[];
  // public id: number;
  // private add: boolean = false
  // private form: any ;
  // public updating : Boolean = false;
  // public formGroup: FormGroup;
  // private _destroy$ = createSubject();

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
    protected service: AppointmentService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,
  ) {
    super()
  }

  ngOnInit(): void {
    this.buildForm();
    this.getData();
  }



}


