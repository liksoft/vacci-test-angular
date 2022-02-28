import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { UserProfilService } from '../../../providers/user-profil/user-profil.service';
import { PermissionService } from '../../../providers/permission/permission.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import {  map} from 'rxjs/operators';



@Component({
  selector: 'user-profil-list',
  templateUrl: './user-profil-list.component.html',
})
export class UserProfilListComponent extends ActionProcess  implements OnInit {

  formParam =  [

      {
        "label": "Nom",
        "type": "text",
        "formControlName": "label",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " nom du profil ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un nom .",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Permissions",
        "type": "select",
        "formControlName": "permission_id",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": false},
        "placeholder": " selectionner une permission ",
        "disabled": false,
        "readonly": false,
        "descriptionText": "selectionner une permission",
        "formControlGroupKey": null,
        "formControlIndex": 3,
        "multiple": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      }
  ] ;

  constructor(
    protected service: UserProfilService,
    protected PermissionService: PermissionService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();
    this.getData();
    this.builselect();
  }

  protected builselect() {

    this.PermissionService.get()
        .pipe(
          map((state: any) => {
            const { data } = state.items;

            //Check if the form property is defined
            if (this.form) {
            // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
            this.form = this.rebuild_select_control_items(
                this.form,
                'permission_id',
                data
                .map(
                  (value) =>
                    (({ name: value.label.toUpperCase( ), value: value.id } as ISelectItem)),
                )
              )
            }
          })
        ).subscribe() ;

  }




}


