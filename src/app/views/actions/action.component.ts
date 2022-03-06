
import { UIStateStatusCode } from 'src/app/lib/core/contracts/ui-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentReactiveFormHelpers } from 'src/app/lib/core/components/dynamic-inputs/angular';
import { IHTMLFormControl } from 'src/app/lib/core/components/dynamic-inputs/core';
import { FormHelperService } from 'src/app/lib/core/helpers';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';
import { createSubject } from 'src/app/lib/core/rxjs/helpers';
import { getFielsError } from 'src/app/config/custom-h';
import { indexOf, isUndefined } from 'lodash';
import { createDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core/helpers';
import { IDynamicForm, SelectInput, ISelectItem } from 'src/app/lib/core/components/dynamic-inputs/core';
import {
  partialConfigs,routeDefinitions
} from 'src/app/config/partials-configs';
import * as moment from 'moment';




export abstract  class  ActionProcess  {


  public data: any |Array<Object> = [] ;
  public id: number;
  public showUp: boolean = false
  public form: IDynamicForm ;
  public updating : Boolean = false;
  public formGroup: FormGroup;
  protected  _destroy$ = createSubject();
  public gridSize = "clr-col-12" ;
  public formParam : any [] ;
  protected service ;
  protected formBuilder: FormBuilder;
  protected uiState: AppUIStateProvider;
  protected ToUpdate : number ;
  protected routeDefinitions = routeDefinitions

  constructor() {}

  goToPageAfterSubmit = ():  [Boolean, (data: any) => void]  => {
    return  [false, (data: any) => {}] ;
  };

  async buildForm(): Promise<void> {

    this.form= {
      "id": 1,
      "title": "",
      "description": "FORMULAIRE ",
      "appcontext": "SAFECARE",
      "controlConfigs":this.formParam,
      "forms": [],
      "endpointURL": "",
    }

    this.formGroup = ComponentReactiveFormHelpers.buildFormGroupFromInputConfig(
      //this.formBuilder, this.formParam as IHTMLFormControl[]
      this.formBuilder, this.formParam as IHTMLFormControl[]

    ) as FormGroup;

  }

  onSubmit(object: FormGroup) {
    this.uiState.startAction();

    this.service.store(object).then(x =>{

       x.pipe(takeUntil(this._destroy$))
      .subscribe(
        response => {

        if (response.success == true) {

          if(Array.isArray(this.data)){
            this.data.unshift(response.items.data);
          }
          this.uiState.endAction("enregistrement reussi", UIStateStatusCode.STATUS_OK);

          const goToPage = this.goToPageAfterSubmit() ;
          if(goToPage[0] ){
            goToPage[1](response.items.data) ;
          }

        } else {
          // console.log(response.fields_error)
          if(!isUndefined(response.fields_error)){

            this.formParam.map(v => {
              if(response.fields_error.hasOwnProperty( v.formControlName )){
                let g = getFielsError(response.fields_error,v.formControlName)
                return g[0].replace(v.formControlName,v.label);
              }
            }).map(v => {
                this.uiState.endAction(v, UIStateStatusCode.ERROR);
            })
          }
        }
        this.formGroup.reset();


      });
    })

  }

  onUpdate(object: FormGroup) {
    this.uiState.startAction();
    this.service.storeUsingID(object,this.id).then(x =>{
      x.pipe(takeUntil(this._destroy$))
      .subscribe(
        (response) => {


          if (response.success == true) {

            this.retrieve().subscribe((data) => {
                this.uiState.endAction("Modification éffectuée", UIStateStatusCode.STATUS_OK);
            })
            const goToPage = this.goToPageAfterSubmit() ;
            if(goToPage[0] ){
              //goToPage[1](response.items.data) ;
            }else{
              this.updating = false;
              this.formGroup.reset();
            }

          } else {
            // console.log(response.fields_error)
            if(!isUndefined(response.fields_error)){

              this.formParam.map(v => {
                if(response.fields_error.hasOwnProperty( v.formControlName )){
                  let g = getFielsError(response.fields_error,v.formControlName)
                  return g[0].replace(v.formControlName,v.label);
                }
              }).map(v => {
                  this.uiState.endAction(v, UIStateStatusCode.ERROR);
              })

            }else{
              this.uiState.endAction("Une erreur s'est produite", UIStateStatusCode.ERROR);

            }

            //this.uiState.endAction("Un problème est survenu", UIStateStatusCode.ERROR);
          }

        }
      );})
  }

  async onEdit(obj) {

    let str = this.service.model
    const ns =  await import('../../models/' + str )
    let class_name = ns[str[0].toUpperCase() + str.substring(1)];
    let object =  class_name.builder().fromSerialized(obj);
    this.id = object.id
    for ( let [k, v] of Object.entries(object)) {
      if (this.formGroup.controls[k]) {

        if(object.hasOwnProperty('dateList') && Object.values(object.dateList).indexOf(k) != -1){
          v = moment(v, 'YYYY-MM-DD').format('DD-MM-YYYY');
        }

        this.formGroup.controls[k].setValue(v);
      }
    }


    this.updating = true;

    this.formGroup.enable();
    this.showUp = true
    this.gridSize = "clr-col-9" ;
  }

  getPersonDataToUpadate() {
    if (this.ToUpdate != null) {
      //  this.uiState.startAction();

      this.service.getOne(this.ToUpdate).subscribe((data) => {
          let model = this.data  = this.getApiResponse(data);
          this.onEdit(model);
        });

    }
  }



  protected getData(parameter? : string) {
    let param = "";
    if(typeof parameter!='undefined' &&  parameter ){
      param = parameter;
    }
    this.uiState.startAction();
    this.retrieve(param).subscribe((data) => {
        this.uiState.endAction();
    })

  }

  protected retrieve(param? : string) {

    let subject = new Subject();

    this.service.get(param).subscribe((data) => {
      this.data = data.items.data;
      subject.next(true);
    });

    return subject;

  }



  onCancel() {
    this.formGroup.reset();
    this.updating = false;
    this.showUp = false ;
    this.gridSize = "clr-col-12" ;

  }

  Add() {
    this.showUp = true
    this.gridSize = "clr-col-9" ;

  }

  Cansel() {

    this.formGroup.reset()
    this.showUp = false
    this.gridSize = "clr-col-12" ;


  }

  Relaod() {
    this.getData()
  }

  Refresh() {
    this.getPersonDataToUpadate()
  }




  rebuild_select_control_items = (form: IDynamicForm,name: string,items: ISelectItem[]) => {
    // TODO: Select the control matching hr_level_id form control name
    const controls = [...((form.controlConfigs ?? []) as IHTMLFormControl[])];
    // TODO : SELECT CONTROL INDEX MATCHING hr_level_id
    const index = controls.findIndex(
      (control) => control.formControlName === name
    );
    let levelSelect = controls[index] as SelectInput;
    if (levelSelect) {
      // Set the items of the select control to equal the data values
      levelSelect = {
        ...levelSelect,
        items,

      };
      controls[index] = levelSelect;
      return createDynamicForm({
        ...form,
        controlConfigs: controls,
      });
    }
    return createDynamicForm(form);
  };

  /**
   *return all data from api
   * @param param
   */
  getApiResponse(param: any): any {
    return param.items.data;
  }


}


