import { NgModule } from "@angular/core";
import {
  PointsRoutingModule,
  MODULE_DECLARATIONS,
} from "./points-routing.module";
import { SharedModule } from "../../lib/views/shared.module";

@NgModule({
  declarations: [...MODULE_DECLARATIONS],
  imports: [PointsRoutingModule, SharedModule],
})
export class PointsModule {}
