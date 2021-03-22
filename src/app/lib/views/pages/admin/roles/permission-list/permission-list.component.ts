import { Component, AfterViewInit } from '@angular/core';
import { Permission } from 'src/app/lib/core/auth/models/permission';
import { AbstractAlertableComponent } from 'src/app/lib/core/helpers/component-interfaces';
import { AppUIStoreManager } from 'src/app/lib/core/helpers/app-ui-store-manager.service';
import { TypeUtilHelper } from '../../../../../core/helpers/type-utils-helper';
import { AuthorizationsProvider } from '../../../../../core/auth/core/providers/authorizations';
import { map } from 'rxjs/operators';
import { getAuthorizationAction } from '../../../../../core/auth/core/actions/authorizations';
import { DrewlabsRessourceServerClient } from '../../../../../core/http/core/ressource-server-client';
import { backendRoutePaths } from '../../../../partials/partials-configs';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styles: [
  ]
})
export class PermissionListComponent extends AbstractAlertableComponent implements AfterViewInit {
  state$ = this.authorizations.state$.pipe(
    map(state => ({authorizations: state.items, performingAction: state.performingAction}))
  );

  constructor(
    appUiStore: AppUIStoreManager,
    public readonly typeHelper: TypeUtilHelper,
    private authorizations: AuthorizationsProvider,
    private client: DrewlabsRessourceServerClient
  ) {
    super(appUiStore);
  }

  ngAfterViewInit() {
    getAuthorizationAction(this.authorizations.store$)(this.client, backendRoutePaths.authorizations);
  }

}
