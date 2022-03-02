import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { partialConfigs } from "./config/partials-configs";
import { NotfoundComponent } from "./views/pages/notfound/notfound.component";

const routes: Routes = [
  {
    path: "admin",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./lib/views/login/login.module").then((m) => m.LoginModule),
    data: {
      dashboardPath: partialConfigs.routes.commonRoutes.dashboardHomeRoute,
      modulePermissions: [],
      moduleName: "Administration",
    }
  },

  {
    path: "career",
    loadChildren: () =>
      import("./modules/career/career.module").then((m) => m.CareerModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/points/points.module").then((m) => m.PointsModule),
  },

  {
    path: "**",
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
