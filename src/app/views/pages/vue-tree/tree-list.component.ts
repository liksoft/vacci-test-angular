import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { TreeService } from '../../../providers/Tree/Tree.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';

import { MultidimentionalArray } from 'src/app/config/partials-configs';



@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
})


export class TreeListComponent extends ActionProcess  implements OnInit {

  items : MultidimentionalArray = ["hello",["some","structured",["here","is",["some","structured",["here","is",["some","structured"],"data"]],"data"]],
                                              ["here","is",["some","structured"],"data"],
                                            "Bye"] ;
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
    protected service: TreeService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();
    //this.getData();
  }


}


