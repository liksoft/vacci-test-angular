import { NgModule, LOCALE_ID, Provider } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import {
  partialConfigs,
  //adminPath,
  adminAuthorizations
} from '../config/partials-configs';

// import { AdminCareerHomeComponent } from './home/home.component';
import { FormsComponent } from '../lib/views/pages/admin/forms/forms.component';
// import { AppCareerNavComponent } from './app-nav/app-career-nav.component';


const adminRoutes: Routes = [

];

export const getRoutes = () => {
  const childRoutes: Routes = [
    {
      path: '',
      component: AdminComponent,
      pathMatch: 'full',
      redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        authorizations: adminAuthorizations
      }
    },
    {
      path: partialConfigs.routes.commonRoutes.homeRoute,
      component: AdminComponent,
      // canActivate: [AuthGuardService],
      data: {
        authorizations: adminAuthorizations
      }
    },


    {
      path: 'p',
      component: FormsComponent,
      // canActivate: [AuthGuardService],
      data: {
        authorizations: adminAuthorizations
      }
    },

  ];

  return [
    {
      path: '',
      component: AdminComponent,
      //canLoad: [AuthGuardService],
      //canActivateChild: [AuthGuardService],
      // canActivate: [AuthGuardService],
      children: childRoutes
    }
  ] as Routes;
};

@NgModule({
  imports: [RouterModule.forChild(getRoutes())]
})
export class AdminRoutingModule { }

export const MODULE_DECLARATIONS = [
  // AdminCareerHomeComponent,
  AdminComponent,
  // AppCareerNavComponent,

  // FormsComponent,
  // FormsViewComponent,
  // FormControlComponent,
  // ListformsComponent,
  // ModulesComponent,
  // AddmoduleComponent,
  // UsersComponent,
  // AddUserComponent,
  // RolesComponent,
  // RoleListComponent,
  // AddRoleComponent,
  // AddRoleFormComponent,
  // PermissionListComponent,
  // RoleListPresenterComponent,
  // UserListComponent,
  // FormControlAddComponent,
  // ListDepartmentComponent,
  // DepartmentComponent,
  // AddDepartementComponent,
  // ConfigurationsComponent,
  // GlobalConfigurationsComponent,
  // GlobalConfigurationsListComponent,
  // GlobalConfigurationsFormComponent,
  // AddUserFormComponent,

  // Navigation component
  // AppNavComponent,

  // // Accounts & Settings components
  // SettingsComponent,
  // UpdatePasswordViewComponent,


  // // Form control options
  // ControlOptionViewComponent,
  // ControlOptionsComponent,
];

export const COMPONENTS_PROVIDERS: Provider[] = [

];
