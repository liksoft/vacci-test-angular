import { Component, OnInit } from '@angular/core';
import { defaultPath, adminPath } from '../../../partials/partials-configs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  public createUserRoutePath: string;
  public listUserRoutePath: string;
  public manageRolesPath: string;
  public manageFormsPath: string;
  public manageModulesPath: string;

  constructor() {
    this.createUserRoutePath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.createUsersRoute}`;
    this.listUserRoutePath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.listUsersRoute}`;
    this.manageRolesPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.rolesManagementRoute}`;
    this.manageFormsPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.formsManagementRoute}`;
    this.manageModulesPath = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.modulesManagementRoute}`;
  }

  ngOnInit() {
  }

}
