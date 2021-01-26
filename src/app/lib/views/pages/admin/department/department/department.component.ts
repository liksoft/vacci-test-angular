import { Component, OnDestroy } from '@angular/core';
import { IDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultPath, adminPath } from 'src/app/lib/views/partials/partials-configs';
import { TypeUtilHelper } from '../../../../../core/helpers/type-utils-helper';
import { delay, filter, map, takeUntil, tap } from 'rxjs/operators';
import { DynamicControlParser, FormHelperService } from 'src/app/lib/core/helpers';
import { DepartmentV2 } from '../../../../../core/auth/contracts/v2/company/department';
import { combineLatest } from 'rxjs';
import { DepartmentsProvider } from 'src/app/lib/core/auth/core/providers/department';
import { DrewlabsRessourceServerClient } from 'src/app/lib/core/http/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppUIStateProvider } from '../../../../../core/helpers/app-ui-store-manager.service';
import { Err } from 'src/app/lib/core/utils/logger';
import { getDepartmentUsingID } from 'src/app/lib/core/auth/core/actions/department';
import { backendRoutePaths } from '../../../../partials/partials-configs';
import { createSubject } from 'src/app/lib/core/rxjs/helpers';
import { doLog } from '../../../../../core/rxjs/operators/index';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnDestroy {

  // @ViewChild('appAddDepartmentComponent', { static: false })
  // appAddDepartment: AddDepartementComponent;
  public department: DepartmentV2;
  // public form: IDynamicForm;
  // tslint:disable-next-line: variable-name
  private _destroy$ = createSubject();

  selectedDepartment$ = this.route.paramMap.pipe(
    takeUntil(this._destroy$),
    map(params => {
      if (params.has('id')) {
        getDepartmentUsingID(this.departments.store$)(
          this.client,
          backendRoutePaths.departmentPath,
          params.get('id')
        );
      }
      return +params.get('id');
    }),
  );
  state$ = combineLatest([
    this.departments.state$.pipe(
      tap(state => {
        if (state.performingAction) {
          this.uiState.startAction();
        } else {
          this.uiState.endAction();
        }
      })
    ),
    this.formHelper.formLoaded$.pipe(
      filter((form) => this.typeHelper.isDefined(form.get('departmentCreateFormID')))
    ),
    this.selectedDepartment$
  ])
    .pipe(
      delay(.3),
      map(([departmentState, forms, selectedDepartment]) => ({
        performingAction: departmentState.performingAction,
        forms,
        items: departmentState.items,
        department: departmentState.items.find(item => +item.id === +selectedDepartment),
        departmentID: selectedDepartment
      }),
      ),
      map(state => {
        const formConfigs: { form: IDynamicForm, formgroup: FormGroup } = {} as any;
        if (state.forms) {
          formConfigs.form = state.forms.get('departmentCreateFormID');
          formConfigs.formgroup = this.controlParser.buildFormGroupFromDynamicForm(
            state.forms.get('departmentCreateFormID'), !this.typeHelper.isDefined(state.departmentID)
          ) as FormGroup;
        }
        return { ...state, ...formConfigs };
      }),
      doLog('View form state...')
    );

  constructor(
    private uiState: AppUIStateProvider,
    private route: ActivatedRoute,
    private router: Router,
    public readonly typeHelper: TypeUtilHelper,
    private departments: DepartmentsProvider,
    private client: DrewlabsRessourceServerClient,
    private formHelper: FormHelperService,
    private controlParser: DynamicControlParser
  ) {
    this.selectedDepartment$.subscribe();
    this.formHelper.suscribe();
    // Triggers form loading event
    this.formHelper.loadForms.next({
      configs: [
        {
          id: environment.forms.departments as number,
          label: 'departmentCreateFormID',
        },
      ],
      result: {
        error: (error: any) => {
          Err(error);
          this.uiState.endAction();
        },
        success: () => {
          this.uiState.endAction();
        },
        warnings: (errors: any) => {
          Err(errors);
          this.uiState.endAction();
        }
      }
    });
  }

  // ngOnInit() { }

  onCancel() {
    // Navigate back to list of departments
    this.router.navigate([`${defaultPath}/${adminPath.managementsRoute}/${adminPath.departmentManagementRoute}`]);
  }

  ngOnDestroy() {
    this._destroy$.next();
  }
}
