import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { ArticleService } from '../../../providers/article/article.service';
import { ArticleNameService } from '../../../providers/article-name/article-name.service';
import { SupplierService } from '../../../providers/supplier/supplier.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import { tap, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent extends ActionProcess  implements OnInit {

  formParam =  [


      {
        "label": "Nom",
        "type": "select",
        "formControlName": "article_name_id",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " article ",
        "disabled": false,
        "readonly": false,
        "descriptionText": "article",
        "formControlGroupKey": null,
        "formControlIndex": 1,
        "multiple": 0,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Loboratoire",
        "type": "select",
        "formControlName": "supplier_id",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " Selectionner le laboratoire ",
        "disabled": false,
        "readonly": false,
        "descriptionText": "laboratoire",
        "formControlGroupKey": null,
        "formControlIndex": 2,
        "multiple": 0,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {
        "label": "Type",
        "type": "select",
        "formControlName": "type",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": true},
        "placeholder": " Choisir un type ",
        "disabled": false,
        "readonly": false,
        "descriptionText": "type",
        "formControlGroupKey": null,
        "formControlIndex": 3,
        "multiple": 0,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
      {

        "label": "Description",
        "type": "textarea",
        "formControlName": "detail",
        "classes": "clr-input",
        "requiredIf": null,
        "items": [],
        "rules": {"isRequired": false},
        "placeholder": "Donner plus de deatails ...",
        "disabled": false,
        "readonly": false,
        "descriptionText": "Donner plus de deatails .",
        "formControlGroupKey": null,
        "formControlIndex": 4,
        "hidden": false,
        "isRepeatable": false,
        "uniqueCondition": "",
        "containerClass": "clr-col-12 clr-col-sm-10",
      },
  ] ;

  constructor(
    protected service: ArticleService,
    protected supplierService: SupplierService,
    protected articleNameService: ArticleNameService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,

  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();
    this.getData('with=supplier,article_name');
    this.builselect();

  }

  protected builselect() {

    this.supplierService.get()
    .pipe(
      map((state: any) => {
        const { data } = state.items;

        //Check if the form property is defined
        if (this.form) {
        // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
        this.form = this.rebuild_select_control_items(
            this.form,
            'supplier_id',
            data
            .map(
              (value) =>
                (({ name: value.label.toUpperCase( ), value: value.id } as ISelectItem)),
            )
          )
        }
      })
    ).subscribe() ;

    this.articleNameService.get()
    .pipe(
      tap(state => console.log(state)),
      map((state: any) => {
        const { data } = state.items;
        console.log(data)

        //Check if the form property is defined
        if (this.form) {
        // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
        this.form = this.rebuild_select_control_items(
            this.form,
            'article_name_id',
            data
            .map(
              (value) =>
                (({ name: value.label.toUpperCase( ), value: value.id } as ISelectItem)),
            )
          )
        }
      })
    ).subscribe() ;


    of([{id:0,label:"test"},{id:1,label:"vaccin"}])
    .pipe(

      map((state: any) => {
        //Check if the form property is defined
        if (this.form) {
        // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
        this.form = this.rebuild_select_control_items(
            this.form,
            'type',
            state
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


