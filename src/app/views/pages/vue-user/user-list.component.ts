import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { UserService } from '../../../providers/user/user.service';
import { UserProfilService } from '../../../providers/user-profil/user-profil.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';


import {  map} from 'rxjs/operators';



@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent extends ActionProcess  implements OnInit {

  formParam : any[] =  [

    {
      "label": "",
      "type": "text",
      "formControlName": "type",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": false},
      "placeholder": "  ...",
      "disabled": false,
      "readonly": false,
      "descriptionText": " ",
      "formControlGroupKey": null,
      "formControlIndex": 1,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-12 clr-col-sm-10",
    },
      {
        "label": "Nom d'utilisateur",
        "type": "text",
        "formControlName": "login",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " nom d'utilisateur ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un nom d'utilisateur .",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Mot de passe",
        "type": "password",
        "formControlName": "password",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " mon motde passe ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un mot de passe .",
        "formControlGroupKey": null,
        "formControlIndex": 2,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Confirmer le mot de passe",
        "type": "password",
        "formControlName": "password_confirmation",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " mot de passe de confirmation",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Confirmer le mot de passe .",
        "formControlGroupKey": null,
        "formControlIndex": 2,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Profil",
        "type": "select",
        "formControlName": "profil_id",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " selectionner un profil ",
        "disabled": false,
        "readonly": false,
        "descriptionText": "selectionner un profil",
        "formControlGroupKey": null,
        "formControlIndex": 3,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      }
  ] ;

  constructor(
    protected service: UserService,
    protected UserProfilService: UserProfilService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();

    this.getData();
    this.builselect() ;
  }



  protected builselect() {

    this.UserProfilService.get()
        .pipe(
          map((state: any) => {
            const { data } = state.items;

            //Check if the form property is defined
            if (this.form) {
            // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
            this.form = this.rebuild_select_control_items(
                this.form,
                'profil_id',
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


