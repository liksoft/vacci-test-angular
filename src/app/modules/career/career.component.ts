import { Component, OnInit, OnDestroy } from '@angular/core';
import { partialConfigs } from '../../config/partials-configs';
import { UsersProvider } from '../../lib/core/auth/core/providers/app-user';
import { DepartmentsProvider } from '../../lib/core/auth/core/providers/department';
import { RolesProvider } from '../../lib/core/auth/core/providers/role';
import { AuthorizationsProvider } from '../../lib/core/auth/core/providers/authorizations';
import { CompaniesProvider } from '../../lib/core/auth/core/providers/organisation';
import { RoutesMap } from 'src/app/lib/views/partials/routes';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';

const resetProvidersStores = (providers: { destroy(): void; }[]) => {
  providers.forEach(provider => provider.destroy());
};

@Component({
  selector: 'app-admin-career-career',
  templateUrl: './career.component.html',
  styles: []
})
export class AdminCareerComponent implements OnInit, OnDestroy {

  public routesMap: RoutesMap[];
  public routeDefinitions: { [index: string]: string };
  public loading: boolean = undefined;

  statefulProviders: { destroy: () => void }[] = [
    this.users,
    this.departments,
    this.roles,
    this.authorizations,
    this.companies
  ];

  constructor(
    uiState: AppUIStateProvider,
    private users: UsersProvider,
    private departments: DepartmentsProvider,
    private roles: RolesProvider,
    private authorizations: AuthorizationsProvider,
    private companies: CompaniesProvider
  ) {
    uiState.endAction();
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.routeDefinitions = {
      topbar_career: 'Tableau de bord',
    };
    this.routesMap = [
      {
        key: 'topbar_career',
        route: `/${partialConfigs.routes.commonRoutes.careerRoute}/${partialConfigs.routes.commonRoutes.homeRoute}`
      }
    ];
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    resetProvidersStores(this.statefulProviders);
  }

}
