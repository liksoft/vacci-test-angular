import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core';
import { FormGroup } from '@angular/forms';
import { FormRequest, ComponentReactiveFormHelpers } from 'src/app/lib/core/helpers/component-reactive-form-helpers';
import { AppUIStoreManager } from 'src/app/lib/core/helpers/app-ui-store-manager.service';
import { AbstractAlertableComponent, cloneAbstractControl } from '../../../../../core/helpers/component-interfaces';
import { DynamicControlParser } from 'src/app/lib/core/helpers/dynamic-control-parser';

@Component({
  selector: 'app-form-control-add',
  templateUrl: './form-control-add.component.html',
  styles: []
})
export class FormControlAddComponent extends AbstractAlertableComponent implements OnInit, OnDestroy {
  @Input() public componentFormGroup: FormGroup;
  @Input() form: IDynamicForm;
  @Output() formSubmitted: EventEmitter<FormRequest> = new EventEmitter<FormRequest>();
  @Output() cancelSubmission: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set controlViewState(
    value: { form: IDynamicForm, formgroup: FormGroup }) {
    const localValue = { ...value };
    if (value) {
      this.form = localValue.form || this.form;
      this.componentFormGroup = localValue.formgroup ?
        cloneAbstractControl(localValue.formgroup) : (this.componentFormGroup || this.controlParser.buildFormGroupFromDynamicForm(
          this.form
        ) as FormGroup);
    }
  }
  /**
   * @description Component object instance initializer
   * @param builder [[FormBuilder]] Angular ReactiveForm FormBuilder
   * @param appUIStoreManager [[AppUIStoreManager]]
   */
  constructor(
    uiStore: AppUIStoreManager,
    private controlParser: DynamicControlParser
  ) {
    super(uiStore); //
  }

  cancel() {
    this.cancelSubmission.emit(true);
  }

  onFormSubmit() {
    ComponentReactiveFormHelpers.validateFormGroupFields(
      this.componentFormGroup
    );
    if (this.componentFormGroup.valid) {
      // Fire formSubmitted event with the formGroup value
      this.formSubmitted.emit({ body: this.componentFormGroup.getRawValue(), requestURL: this.form.endpointURL });
    }
  }

  cancelFormSubmission() {
    this.resetFormGroup();
    this.cancelSubmission.emit(true);
  }

  onFormRequestSubmittedSuccessfully() {
    this.componentFormGroup = this.controlParser.buildFormGroupFromDynamicForm(this.form) as FormGroup;
  }

  resetFormGroup() {
    this.onFormRequestSubmittedSuccessfully();
  }

  ngOnInit(): void {
    this.subscribeToUIActions();
  }

  ngOnDestroy(): void {
    this.resetFormGroup();
    this.clearUIActionSubscriptions();
  }

}
