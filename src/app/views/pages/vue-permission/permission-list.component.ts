import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { PermissionService } from '../../../providers/permission/permission.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';


@Component({
  selector: 'permission-list',
  templateUrl: './permission-list.component.html',
})
export class PermissionListComponent extends ActionProcess  implements OnInit {

  formParam =  [

      {
        "label": "Libellé",
        "type": "text",
        "formControlName": "label",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " nom de la permission...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un nom de la permission.",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      }
  ] ;

  constructor(
    protected service: PermissionService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();
    this.getData();
  }



  relaod() {
    this.getData()
  }




}


