import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, takeUntil, tap } from 'rxjs/operators';
import { roleFormViewBindings } from 'src/app/lib/core/auth/contracts/v2/authorizations/role';
import { RolesProvider } from 'src/app/lib/core/auth/core/providers';
import { IDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core';
import { TypeUtilHelper } from 'src/app/lib/core/helpers';
import { createSubject } from 'src/app/lib/core/rxjs/helpers';
import { doLog } from 'src/app/lib/core/rxjs/operators';
import { isDefined } from 'src/app/lib/core/utils';
import { Log } from 'src/app/lib/core/utils/logger';

@Component({
  selector: 'app-add-role-form',
  template: `
    <ng-container class="form" *ngIf="formgroupConfig as vm">
      <form class="clr-form" [formGroup]="vm?.formgroup">
        <app-dynamic-form-wapper *ngIf="vm?.formgroup" [componentFormGroup]="vm?.formgroup" [form]="vm?.form">
        </app-dynamic-form-wapper>
        <div class="button-container">
          <button *ngIf="!typeHelper.isDefined(vm?.selectedID)" type="button"
            (click)="onFormSubmit(vm?.formgroup, vm?.form.endpointURL)" class="btn btn-outline-primary"
            [disabled]="performingAction">
            <clr-icon shape="floppy"></clr-icon> Enregistrer le rôle
          </button>
          <button *ngIf="typeHelper.isDefined(vm?.selectedID)" (click)="onEditFormSumit(vm?.formgroup, vm?.form.endpointURL, vm?.selectedID)"
            type="button" class="btn btn-app" [disabled]="performingAction">
            <clr-icon shape="floppy"></clr-icon> Modifier le rôle
          </button>
          <button *ngIf="false" class="btn btn-outline-warning" [disabled]="performingAction"
            (click)="onNavigateBack()">
            <clr-icon shape="undo"></clr-icon> Retour
          </button>
        </div>
      </form>
    </ng-container>
  `,
  styles: [
  ]
})
export class AddRoleFormComponent implements OnDestroy {

  @Input() performingAction = false;
  // tslint:disable-next-line: variable-name
  private _formgroupConfig: { formgroup: FormGroup, form: IDynamicForm, selectedID?: number | string };
  @Input() set formgroupConfig(value: { formgroup: FormGroup, form: IDynamicForm, selectedID?: number | string  }) {
    this._formgroupConfig = value;
    if (value.selectedID) {
      this.roles.state$
        .pipe(
          takeUntil(this._destroy$),
          doLog('Role items state: '),
          map(state => state.items[value.selectedID]),
          doLog('Matching role: '),
          tap(state => {
            if (isDefined(state) && isDefined(this.formgroupConfig.formgroup)) {
              this.formgroupConfig.formgroup = this.prefillFormGroup(state, this.formgroupConfig.formgroup);
            }
          })
        ).subscribe();
    }
  }
  get formgroupConfig(): { formgroup: FormGroup, form: IDynamicForm, selectedID?: number | string  } {
    return this._formgroupConfig;
  }

  @Output() formSubmittedEvent = new EventEmitter<{ formgroup: FormGroup, url: string, selected?: string | number }>();
  @Output() navigateBack = new EventEmitter();

  // tslint:disable-next-line: variable-name
  private _destroy$ = createSubject();

  constructor(
    public readonly typeHelper: TypeUtilHelper,
    public roles: RolesProvider
  ) {}

  prefillFormGroup(state: { [index: string]: any }, formgroup: FormGroup) {
    if (isDefined(state.id) && isDefined(formgroup)) {
      for (const [key, value] of Object.entries(roleFormViewBindings())) {
        if (isDefined(formgroup.get(key))) {
          if (key === 'permissions' && isDefined(state.permissions)) {
            formgroup.get(key).setValue(state.permissions.map((v: { [index: string]: any }) => v.id));
            continue;
          }
          formgroup.get(key).setValue(state[value]);
        }
      }
    }
    return formgroup;
  }

  onFormSubmit(formgroup: FormGroup, url: string): void {
    this.formSubmittedEvent.emit({ formgroup, url });
  }

  onEditFormSumit(formgroup: FormGroup, url: string, selected: string | number): void {
    this.formSubmittedEvent.emit({ formgroup, url, selected });

  }

  onNavigateBack(): void { this.navigateBack.emit(); }

  ngOnDestroy() { this._destroy$.next({}); }

}
