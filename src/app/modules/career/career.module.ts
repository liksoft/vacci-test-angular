import { NgModule } from "@angular/core";
import {
  MODULE_DECLARATIONS,
  CareerRoutingModule,
  COMPONENTS_PROVIDERS,
} from "./career-routing.module";

import { RouterModule } from "@angular/router";
import { SharedModule } from "../../lib/views/shared.module";
@NgModule({
  imports: [CareerRoutingModule, SharedModule, RouterModule],
  declarations: [...MODULE_DECLARATIONS],
  exports: [...MODULE_DECLARATIONS],
  providers: [...COMPONENTS_PROVIDERS],
  entryComponents: [],
})
export class CareerModule {
  constructor() {}
}
