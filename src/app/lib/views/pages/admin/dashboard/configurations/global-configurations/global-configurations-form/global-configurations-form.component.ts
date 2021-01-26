import { Component, OnInit, OnDestroy, Input, Inject, Output, EventEmitter } from '@angular/core';
import { AbstractAlertableComponent } from 'src/app/lib/core/helpers/component-interfaces';
import { IDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core';
import { FormGroup } from '@angular/forms';
import { AppConfigs } from 'src/app/lib/bloc/models/app-configs';
import { Subject } from 'rxjs';
import { AppUIStoreManager } from 'src/app/lib/core/helpers/app-ui-store-manager.service';
import { DynamicControlParser } from 'src/app/lib/core/helpers/dynamic-control-parser';
import { TypeUtilHelper } from 'src/app/lib/core/helpers/type-utils-helper';
import { AbstractEntityProvider } from 'src/app/lib/core/entity/abstract-entity';
import { FormHelperService } from 'src/app/lib/core/helpers/form-helper';
import { filter } from 'rxjs/operators';
import { ComponentReactiveFormHelpers } from 'src/app/lib/core/helpers/component-reactive-form-helpers';
import { ISerializableBuilder } from 'src/app/lib/core/built-value/contracts/serializers';

@Component({
  selector: 'app-global-configurations-form',
  templateUrl: './global-configurations-form.component.html',
  styles: []
})
export class GlobalConfigurationsFormComponent extends AbstractAlertableComponent implements OnInit, OnDestroy {

  public form: IDynamicForm;
  public componentFormGroup: FormGroup;
  @Input() public selected: AppConfigs;
  @Input() formID: number | string;
  public publishers: Subject<any>[] = [];
  @Output() title = new EventEmitter<string>();
  @Output() submissionCompleted = new EventEmitter<object>();

  constructor(
    uiStore: AppUIStoreManager,
    private controlParser: DynamicControlParser,
    public readonly typeHelper: TypeUtilHelper,
    @Inject('appConfigsProvider') private entityProvider: AbstractEntityProvider<AppConfigs>,
    private formHelper: FormHelperService,
  ) {
    super(uiStore);
  }

  async ngOnInit() {
    this.subscribeToUIActions();
    this.appUIStoreManager.initializeUIStoreAction();
    // Call service subscription method to subscribe to event
    // this.entityProvider.subscribe();
    this.formHelper.suscribe();
    this.publishers.push(
      ...[
        this.formHelper.loadForms,
        this.entityProvider.createRequest,
        this.entityProvider.updateRequest,
      ]
    );
    // Triggers form loading event
    this.formHelper.loadForms.next({
      configs: [
        {
          id: this.formID as number,
          label: 'appConfigsFormID',
        },
      ],
      result: {
        error: (error: any) => {
          console.log(error);
        },
        success: () => {
          this.appUIStoreManager.completeUIStoreAction();
        },
        warnings: (errors: any) => {
          console.log(errors);
        }
      }
    }
    );
    this.uiStoreSubscriptions.push(
      ...[
        // Register to form loading event response
        this.formHelper.formLoaded$.pipe(
          filter((form) => this.typeHelper.isDefined(form) && this.typeHelper.isDefined(form.get('appConfigsFormID')))
        )
          .subscribe((forms) => {
            if (forms) {
              this.form = forms.get('appConfigsFormID');
              this.title.emit(this.form.title);
              this.buildFormGroup();
            }
          }, (err) => {
            console.log(err);
          }),
      ]);
  }

  buildFormGroup() {
    // tslint:disable-next-line: max-line-length
    this.componentFormGroup = this.controlParser.buildFormGroupFromDynamicForm(this.form, !this.typeHelper.isDefined(this.selected)) as FormGroup;
    this.prefilForm();
  }

  prefilForm() {
    if (this.selected) {
      for (const [key, v] of Object.entries(this.selected.formViewModelBindings())) {
        if (this.typeHelper.isDefined(this.componentFormGroup.get(key))) {
          this.componentFormGroup.get(key).setValue(v);
        }
      }
    }
  }

  async onFormSubmit() {
    ComponentReactiveFormHelpers.validateFormGroupFields(
      this.componentFormGroup
    );
    if (this.componentFormGroup.valid) {
      const obj = this.componentFormGroup.getRawValue();
      this.appUIStoreManager.initializeUIStoreAction();
      if (!this.typeHelper.isDefined(this.selected)) {
        this.entityProvider.createRequest.next({
          builder: AppConfigs.builder() as ISerializableBuilder<AppConfigs>, req: { path: this.form.endpointURL, body: obj }
        });
      } else {
        this.entityProvider.updateRequest.next({
          // tslint:disable-next-line: max-line-length
          builder: AppConfigs.builder() as ISerializableBuilder<AppConfigs>, req: { path: this.form.endpointURL, body: obj, id: this.selected.id }
        });
      }
    }
  }

  ngOnDestroy() {
    this.entityProvider.unsubscribe().onCompleActionListeners(this.publishers);
    this.formHelper.unsubscribe().onCompleActionListeners(this.publishers);
    this.clearUIActionSubscriptions();
    this.resetUIStore();
  }
}
