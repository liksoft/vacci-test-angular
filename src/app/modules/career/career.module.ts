import { NgModule} from '@angular/core';
import {
  MODULE_DECLARATIONS,
  CareerRoutingModule,
  COMPONENTS_PROVIDERS
} from './career-routing.module';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../../lib/views/shared.module';
import { PartialsModule } from '../../lib/views/partials/partials.module';
import { DashboardModule } from '../../lib/views/pages/admin/dashboard/dashboard.module';

import { FormComponentService } from '../../lib/views/pages/admin/forms/form-component.service';

@NgModule({
  imports: [
    CareerRoutingModule,
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
export class CareerModule {
  constructor() { }
}
