import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { ArticleNameService } from '../../../providers/article-name/article-name.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import {  map} from 'rxjs/operators';



@Component({
  selector: 'article-name-list',
  templateUrl: './article-name-list.component.html',
})
export class ArticleNameListComponent extends ActionProcess  implements OnInit {

  formParam =  [

      {
        "label": "Nom",
        "type": "text",
        "formControlName": "label",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " nom de produit ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Saisir un nom .",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      }
  ] ;

  constructor(
    protected service: ArticleNameService,
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


