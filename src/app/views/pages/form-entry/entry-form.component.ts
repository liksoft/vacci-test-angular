import { Component, Input,ComponentFactoryResolver,  OnDestroy, Directive,OnInit, ViewChild } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { EntryService } from '../../../providers/entry/entry.service';
import { PointService } from '../../../providers/point/point.service';
import { Entry } from '../../../models/entry';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { Router, ActivatedRoute } from '@angular/router';
import { ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import {  map} from 'rxjs/operators';

import { AdDirective } from 'src/app/config/ad.directive';
import { AdComponent} from 'src/app/config/ad.component';
import { EntryDetailFormComponent } from '../../components/form-entry-details/form-entry-detail.component';




@Component({
  selector: 'app-form-entrys',
  templateUrl: './entry-form.component.html'
})

export class EntryFormComponent extends ActionProcess  implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost : AdDirective;

  formParam =  [
    {
      "label": "Centre",
      "type": "select",
      "formControlName": "point_id",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": false},
      "placeholder": " selectionner le centre ",
      "disabled": false,
      "readonly": false,
      "descriptionText": "selectionner le centre ",
      "formControlGroupKey": null,
      "formControlIndex": 1,
      "multiple": 0,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-3 clr-col-sm-3",
    }
    ,
    {

      "label": "Réference",
      "type": "text",
      "formControlName": "ref",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": true},
      "placeholder": "Saisir la réference.",
      "disabled": false,
      "readonly": false,
      "descriptionText": "Réference.",
      "formControlGroupKey": null,
      "formControlIndex": 2,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-5 clr-col-sm-5",
    },
    {

      "label": "Date",
      "type": "date",
      "formControlName": "date",
      "classes": "clr-input",
      "requiredIf": null,
      "items": [],
      "rules": {"isRequired": true},
      "placeholder": "Saisir une date.",
      "disabled": false,
      "readonly": false,
      "descriptionText": "Date de livraison .",
      "formControlGroupKey": null,
      "formControlIndex": 3,
      "hidden": false,
      "isRepeatable": false,
      "uniqueCondition": "",
      "containerClass": "clr-col-4 clr-col-sm-4",
    },

] ;

  public modelToUpdate : Entry ;


  constructor(
    protected service: EntryService,
    protected pointService: PointService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    protected router: Router,
  ) {
    super()
  }

  ngOnInit(): void {

    this.buildForm();
    this.getUrlParam()
    this.builselect();

  }

  async getPersonDataToUpdate(loadComponent ?: (item? :{})=> void) {

    if (this.ToUpdate != null) {
      //  this.uiState.startAction();

      let str = this.service.getModel();
      const ns = await import("../../../models/" + str);

      this.service.getOne(this.ToUpdate,'with=entry_details').subscribe((data) => {

        let model = (this.data = this.getApiResponse(data));
        console.log('125 getPersonDataToUpdate this.data :', this.data )

        let class_name = ns[str[0].toUpperCase() + str.substring(1)];
        let obj = class_name.builder().fromSerialized(model);


        this.data?.entry_details.forEach((item :{} , index:number) => {
          loadComponent(item) ;
        });

        loadComponent() ;
        this.onEdit(obj);
      });
    }
  }


  public loadComponent = (item?:{}) : void => {


    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EntryDetailFormComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    //viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    //componentRef.instance.value = this.data.id;
    console.log('148 loadComponent',this.data) ;
    if(this.data == undefined ){
      componentRef.instance.value = undefined;
    }else{
      if( this.data.hasOwnProperty('id')){
        console.log('153 loadComponent this.data.id',this.data.id) ;
        componentRef.instance.value = this.data.id;
        componentRef.instance.data = item;

      }
    }

  }



  protected builselect() {

    this.pointService.get()
        .pipe(
          map((state: any) => {
            const { data } = state.items;

            //Check if the form property is defined
            if (this.form) {
            // TODO : REBUILD CONTROL WITH NAME hr_level_id ITEMS
            this.form = this.rebuild_select_control_items(
                this.form,
                'point_id',
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

  getUrlParam() {

    this.route.queryParams.subscribe(params => {
      this.formGroup.reset();
      this.updating = false ;
      this.clearloadComponent();

      if (params.id != null) {
        this.ToUpdate = params.id ;
        //  this.uiState.startAction();
        this.getPersonDataToUpdate(this.loadComponent);
      }
    });
  }

  public clearloadComponent = () : void => {

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();


  }

  goToPageAfterSubmit = () :  [Boolean, (data: any) => void] => {

    return  [true, (entry: any) => this.router.navigate([`${this.routeDefinitions.entriesRoute}/${this.routeDefinitions.createRoute}`],  { queryParams: { id: entry.id } })];

  };



  addComponent() {
    this.loadComponent();
  }

  onCancel() {
    const goToPage = this.goToPageAfterSubmit() ;
    if(goToPage[0] ){
      this.router.navigate([`${this.routeDefinitions.entriesRoute}/${this.routeDefinitions.createRoute}`]);
    }

  }












}



