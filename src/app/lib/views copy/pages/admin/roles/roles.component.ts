import { Component } from '@angular/core';
import { defaultPath, adminPath } from 'src/app/lib/views/partials/partials-configs';
import { Router } from '@angular/router';
import { RoleV2 } from '../../../../core/auth/contracts/v2/authorizations/role';
import { AppUIStateProvider } from '../../../../core/helpers/app-ui-store-manager.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
    `
    .app-content-container {
      padding: 0 16px;
    }
    `
  ]
})
export class RolesComponent {

  public createRoleRoute = `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.createRole}`;
  public dashboardHomeRoute =  `/${defaultPath}`;

  state$ = this.uiState.uiState.pipe(
    map(state => ({performingAction: state.performingAction}))
  );

  constructor(private router: Router, private uiState: AppUIStateProvider) { }

  onRoleSelected = (role: RoleV2) => {
    this.router.navigate([`/${defaultPath}/${adminPath.managementsRoute}/${adminPath.updatedRoleRoute}`, role.id]);
  }

  onCreateAuthorizationGroup() {
    this.router.navigateByUrl(`/${defaultPath}/${adminPath.managementsRoute}/${adminPath.createRole}`);
  }

}
