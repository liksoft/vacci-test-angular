import { Component, ViewChild, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { ClrDatagrid, ClrDatagridStateInterface } from '@clr/angular';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { RoleV2 } from 'src/app/lib/core/auth/contracts/v2/authorizations/role';
import { paginateRolesAction } from 'src/app/lib/core/auth/core/actions';
import { createSubject, observableOf } from 'src/app/lib/core/rxjs/helpers';
import { doLog } from 'src/app/lib/core/rxjs/operators';
import { RoleListPresenterComponent } from './role-list-presenter/role-list-presenter.component';
import { RolesProvider } from '../../../../../core/auth/core/providers/role';
import { DrewlabsRessourceServerClient } from 'src/app/lib/core/http/core';
import { mapPaginatorStateWith } from 'src/app/lib/core/pagination/helpers';
import { httpServerHost } from 'src/app/lib/core/utils/url/url';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styles: []
})
export class RoleListComponent implements OnDestroy {

  @Output() selectedItem = new EventEmitter<RoleV2>();
  @Output() deleteItem = new EventEmitter<RoleV2>();
  @Output() create = new EventEmitter<object>();

  @ViewChild('roleListPresenter', { static: true }) roleListPresenter: RoleListPresenterComponent;

  initialGridState = { page: 1, per_page: 10 };
  // tslint:disable-next-line: variable-name
  private _destroy$ = createSubject<{}>();
  state$ = this.provider.state$.pipe(
    map(state => ({
      dataSource: state.pagination,
      performingAction: state.performingAction
    })),
    doLog('Role pagination data source: ')
  );

  // tslint:disable-next-line: variable-name
  private _datagridState$ = createSubject<ClrDatagridStateInterface | any>();
  gridState$ = this._datagridState$.pipe(
    startWith(this.initialGridState)
  );

  // tslint:disable-next-line: variable-name
  rolesGridState$ = this.gridState$
    .pipe(
      takeUntil(this._destroy$),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((state: ClrDatagridStateInterface) => observableOf(state)),
    ).pipe(
      map(state => {
        paginateRolesAction(
          this.provider.store$)(this.client, `${httpServerHost(this.host)}/${this.path}`, state);
      }),
    );

  @ViewChild('clrDataGrid', { static: false }) dataGrid: ClrDatagrid;

  constructor(
    private provider: RolesProvider,
    private client: DrewlabsRessourceServerClient,
    @Inject('AUTH_ROLES_RESOURCE_PATH') private path: string,
    @Inject('AUTH_SERVER_HOST') private host: string
  ) {
    this.rolesGridState$.subscribe();
  }

  onDgHeaderRefresh = () => {
    this._datagridState$.next(this.initialGridState);
  }

  onDgRefresh = (state: ClrDatagridStateInterface) => this._datagridState$.next(mapPaginatorStateWith([])(state));

  ngOnDestroy = () => this._destroy$.next();

}
