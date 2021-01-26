import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/auth/core';
import { defaultPath, adminPath } from '../../../../partials/partials-configs';
import { RoutesMap } from 'src/app/lib/core/routes';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './home.component.html',
  styles: []
})
export class AdminDashboardHomeComponent {
  public navbarRoutesMap: RoutesMap[];
  public navbarRouteDefinitions: { [index: string]: string };
  public listUserRoutePath: string;
  public manageRolesPath: string;
  public manageFormsPath: string;
  public manageModulesPath: string;
  public manageDepartmentsPath: string;
  public manageGeneralConfigPath: string;

  constructor(private auth: AuthService) {
    this.listUserRoutePath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.listUsersRoute}`;
    this.manageRolesPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.rolesManagementRoute}`;
    this.manageFormsPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.formsManagementRoute}`;
    this.manageModulesPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.modulesManagementRoute}`;
    this.manageDepartmentsPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.departmentManagementRoute}`;
    this.manageGeneralConfigPath = `/${defaultPath}/${adminPath.globalConfigurationsRoute}`;
  }
}
