import  { Component, Input, OnDestroy, OnInit, ViewChild }  from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { EntryDetailService } from '../../../providers/entry-detail/entry-detail.service';
import { ArticleService } from '../../../providers/article/article.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import {  map} from 'rxjs/operators';


import { AdComponent} from 'src/app/config/ad.component';



@Component({
  //selector: 'app-form-entry-detail',
  templateUrl: './form-entry-detail.component.html',
})



export class EntryDetailFormComponent extends ActionProcess  implements OnInit,AdComponent {


  @Input() value : any ;



  formParam =  [
    {
      "label": "Article",
      "type": "select",
      "formControlName": "article_id",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": false},
      "placeholder": " selectionner un article ",
      "disabled": false,
      "readonly": false,
      "descriptionText": "selectionner un article ",
      "formControlGroupKey": null,
      "formControlIndex": 1,
      "multiple": 0,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-6 clr-col-sm-6",
    },
    {

      "label": "Quantité",
      "type": "text",
      "formControlName": "qty",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": true},
      "placeholder": "Saisir une quantité.",
      "disabled": false,
      "readonly": false,
      "descriptionText": "Quantité d'articles.",
      "formControlGroupKey": null,
      "formControlIndex": 2,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-4 clr-col-sm-4",
    },

    {

      "label": "entry",
      "type": "text",
      "formControlName": "entry_id",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": true},
      "placeholder": "Saisir une quantité.",
      "disabled": false,
      "readonly": false,
      "descriptionText": "Quantité d'articles.",
      "formControlGroupKey": null,
      "formControlIndex": 2,
      "hidden": true,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-4 clr-col-sm-4",
    },

  ] ;

  constructor(
    protected service: EntryDetailService,
    protected articleService: ArticleService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {
    this.buildForm();
    //this.data = this.value as { [id: string]: any };
    this.builselect() ;
  }


  protected builselect() {

    this.articleService.get("with=article_name,supplier")
        .pipe(
          map((state: any) => {
            const { data } = state.items;

            //Check if the form property is defined
            if (this.form) {
            // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
            this.form = this.rebuild_select_control_items(
                this.form,
                'article_id',
                data
                .map(
                  (value) =>
                    (({ name: value?.article_name?.label.toUpperCase( )+" ("+value?.type_name+"- lab: "+value?.supplier?.label+")", value: value.id } as ISelectItem)),
                )
              )
            }
          })
        ).subscribe() ;

      console.log(this.value)

      if(this.value != undefined){
        this.formGroup.controls['entry_id'].setValue(this.value);
      }
  }




}


