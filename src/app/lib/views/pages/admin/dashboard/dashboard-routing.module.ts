import { NgModule, LOCALE_ID, Provider } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard.component';
import { AuthGuardService } from 'src/app/lib/core/auth/core';
import { AdminDashboardHomeComponent } from './home/home.component';
import {
  FormComponentService,
  FormsComponent,
  ListformsComponent,
  FormControlAddComponent,
  FormControlComponent,
  FormsViewComponent
} from '../forms';
import {
  ModulesComponent,
  AddmoduleComponent
} from '../modules';
import {
  RolesComponent,
  RoleListComponent,
  PermissionListComponent,
  AddRoleComponent,
  AddRoleFormComponent,
  RoleListPresenterComponent
} from '../roles';
import {
  UserListComponent,
  AddUserComponent,
  UsersComponent,
  AddUserFormComponent
} from '../users';
import {
  partialConfigs,
  adminPath,
  adminAuthorizations
} from '../../../partials/partials-configs';
import { HttpRequestService } from 'src/app/lib/core/http/core';
import { SessionStorage } from 'src/app/lib/core/storage/core';
import { GenericPaginatorDatasource } from 'src/app/lib/core/helpers/paginator';
import {
  ListDepartmentComponent,
  AddDepartementComponent,
  DepartmentComponent
} from '../department';
import { User } from 'src/app/lib/core/auth/contracts/v2';
import { AppConfigs } from 'src/app/lib/bloc/models/app-configs';
import { TypeUtilHelper } from 'src/app/lib/core/helpers/type-utils-helper';
import { GlobalConfigurationsComponent } from './configurations/global-configurations/global-configurations.component';
import { GlobalConfigurationsListComponent } from './configurations/global-configurations/global-configurations-list/global-configurations-list.component';
import { GlobalConfigurationsFormComponent } from './configurations/global-configurations/global-configurations-form/global-configurations-form.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { DefaultEntityHandler, AbstractEntityProvider } from 'src/app/lib/core/entity';
import { AppNavComponent } from './app-nav/app-nav.component';
import { SettingsComponent } from './settings/settings.component';
import { UpdatePasswordViewComponent } from './settings/update-password-view/update-password-view.component';
import { AuthorizationsGuard } from '../../../../core/auth/core/auth-guard.service';
import { environment } from '../../../../../../environments/environment.prod';


const DashboardRoutes: Routes = [

];

export const getRoutes = () => {
  const childRoutes: Routes = [
    {
      path: '',
      component: AdminDashboardComponent,
      pathMatch: 'full',
      redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: partialConfigs.routes.commonRoutes.homeRoute,
      component: AdminDashboardHomeComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    }, // account component route
    {
      path: `${adminPath.accountRoute}`,
      component: SettingsComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.globalConfigurationsRoute}`,
      component: ConfigurationsComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: adminPath.managementsRoute,
      component: UsersComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.createUsersRoute}`,
      component: AddUserComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.updatedUserRoute}/:id`,
      component: AddUserComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.listUsersRoute}`,
      component: UserListComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.rolesManagementRoute}`,
      component: RolesComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.createRole}`,
      component: AddRoleComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: `${adminPath.managementsRoute}/${adminPath.updatedRoleRoute}/:id`,
      component: AddRoleComponent,
      canActivate: [AuthGuardService, AuthorizationsGuard],
      data: {
        authorizations: adminAuthorizations
      }
    }
  ];
  if (environment.isDepartmentWorkspaceEnabled) {
    childRoutes.push(...[
      {
        path: `${adminPath.managementsRoute}/${adminPath.departmentManagementRoute}`,
        component: ListDepartmentComponent,
        canActivate: [AuthGuardService, AuthorizationsGuard],
        data: {
          authorizations: adminAuthorizations
        }
      },
      {
        path: `${adminPath.managementsRoute}/${adminPath.createDepartmentRoute}`,
        component: DepartmentComponent,
        canActivate: [AuthGuardService, AuthorizationsGuard],
        data: {
          authorizations: adminAuthorizations
        }
      },
      {
        path: `${adminPath.managementsRoute}/${adminPath.createDepartmentRoute}/:id`,
        component: DepartmentComponent,
        canActivate: [AuthGuardService, AuthorizationsGuard],
        data: {
          authorizations: adminAuthorizations
        }
      }
    ]);
  }
  if (environment.isModulesWorkspaceEnabled) {
    childRoutes.push(
      ...[

        {
          path: `${adminPath.managementsRoute}/${adminPath.modulesManagementRoute}`,
          component: ModulesComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
        {
          path: `${adminPath.managementsRoute}/${adminPath.createModulesRoute}`,
          component: AddmoduleComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
        {
          path: `${adminPath.managementsRoute}/${adminPath.updateModulesRoute}/:id`,
          component: AddmoduleComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
      ]
    );
  }
  if (environment.isFormsWorkspaceEnabled) {
    childRoutes.push(
      ...[

        {
          path: `${adminPath.managementsRoute}/${adminPath.formsManagementRoute}`,
          component: ListformsComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
        {
          path: `${adminPath.managementsRoute}/${adminPath.createFormsRoute}`,
          component: FormsComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
        {
          path: `${adminPath.managementsRoute}/${adminPath.createFormsRoute}/:id`,
          component: FormsComponent,
          canActivate: [AuthGuardService, AuthorizationsGuard],
          data: {
            authorizations: adminAuthorizations
          }
        },
      ]
    );
  }
  return [
    {
      path: '',
      component: AdminDashboardComponent,
      canLoad: [AuthGuardService],
      canActivateChild: [AuthGuardService],
      canActivate: [AuthGuardService],
      children: childRoutes
    }
  ] as Routes;
};

@NgModule({
  imports: [RouterModule.forChild(getRoutes())]
})
export class AdminDashboardRoutingModule { }

export const MODULE_DECLARATIONS = [
  AdminDashboardHomeComponent,
  AdminDashboardComponent,
  FormsComponent,
  FormsViewComponent,
  FormControlComponent,
  ListformsComponent,
  ModulesComponent,
  AddmoduleComponent,
  UsersComponent,
  AddUserComponent,
  RolesComponent,
  RoleListComponent,
  AddRoleComponent,
  AddRoleFormComponent,
  PermissionListComponent,
  RoleListPresenterComponent,
  UserListComponent,
  FormControlAddComponent,
  ListDepartmentComponent,
  DepartmentComponent,
  AddDepartementComponent,
  ConfigurationsComponent,
  GlobalConfigurationsComponent,
  GlobalConfigurationsListComponent,
  GlobalConfigurationsFormComponent,
  AddUserFormComponent,

  // Navigation component
  AppNavComponent,

  // Accounts & Settings components
  SettingsComponent,
  UpdatePasswordViewComponent
];

export const COMPONENTS_PROVIDERS: Provider[] = [
  FormComponentService,
  {
    provide: 'appConfigsDataSource',
    useFactory: (client: HttpRequestService) => {
      return new GenericPaginatorDatasource<AppConfigs>(client);
    },
    deps: [HttpRequestService, SessionStorage],
    multi: false
  },
  {
    provide: 'appConfigsProvider',
    useFactory: (client: HttpRequestService, typeHelper: TypeUtilHelper) => {
      return new AbstractEntityProvider<User>(typeHelper, new DefaultEntityHandler()).setProvider(client);
    },
    deps: [HttpRequestService, TypeUtilHelper],
    multi: false
  },
  { provide: LOCALE_ID, useValue: 'fr' }
];
