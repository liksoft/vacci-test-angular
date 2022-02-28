import { NgModule} from '@angular/core';
import {
  MODULE_DECLARATIONS,
  AdminRoutingModule,
  COMPONENTS_PROVIDERS
} from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../lib/views/shared.module';
import { PartialsModule } from '../lib/views/partials/partials.module';
import { DashboardModule } from '../lib/views/pages/admin/dashboard/dashboard.module';

import { FormComponentService } from '../lib/views/pages/admin/forms/form-component.service';

@NgModule({
  imports: [
    AdminRoutingModule,
    PartialsModule,
    SharedModule,
    DashboardModule,
    RouterModule,
  ],
  declarations: [...MODULE_DECLARATIONS],
  exports: [...MODULE_DECLARATIONS],
  providers: [...COMPONENTS_PROVIDERS, FormComponentService],
  entryComponents: []
})
export class AdminModule {
  constructor() { }
}
