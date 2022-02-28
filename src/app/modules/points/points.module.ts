import { NgModule } from '@angular/core';
export { RoutesMap } from '../../lib/core/routes';

import { PointsRoutingModule,MODULE_DECLARATIONS } from './points-routing.module';
import { PartialsModule } from '../../lib/views/partials/partials.module';
import { SharedModule } from '../../lib/views/shared.module';



@NgModule({
  declarations: [...MODULE_DECLARATIONS],
  imports: [
    PointsRoutingModule,
    PartialsModule,
    SharedModule,

  ]
})
export class PointsModule { }


