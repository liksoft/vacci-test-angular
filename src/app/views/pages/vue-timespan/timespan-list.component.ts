import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { TimespanService } from '../../../providers/timespan/timespan.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';


@Component({
  selector: 'timespan-list',
  templateUrl: './timespan-list.component.html',
})
export class TimespanListComponent extends ActionProcess  implements OnInit {

  formParam =  [

      {

        "label": "Intervalle",
        "type": "text",
        "formControlName": "time",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": "Saisir un nombre de minute ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un nombre (le nombre saisi est en unité de minute) .",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      }
  ] ;

  constructor(
    protected service: TimespanService,
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


