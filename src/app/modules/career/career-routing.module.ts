import { NgModule, Provider } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminCareerComponent } from "./career.component";

import { AdminCareerHomeComponent } from "./home/home.component";
import { AppCareerNavComponent } from "./app-nav/app-career-nav.component";

const careerRoutes: Routes = [];

export const getRoutes = () => {
  const childRoutes: Routes = [
    {
      path: "",
      component: AdminCareerComponent,
      pathMatch: "full",
      redirectTo: "",
      data: {
        authorizations: [],
      },
    },
    {
      path: "",
      component: AdminCareerHomeComponent,
      data: {
        authorizations: [],
      },
    },

    // Note : Commented out to bypass FormComponent error
    // {
    //   path: 'p',
    //   component: FormsComponent,
    //   // canActivate: [AuthGuardService],
    //   data: {
    //     authorizations: adminAuthorizations
    //   }
    // },
  ];

  return [
    {
      path: "",
      component: AdminCareerComponent,
      children: childRoutes,
    },
  ] as Routes;
};

@NgModule({
  imports: [RouterModule.forChild(getRoutes())],
})
export class CareerRoutingModule {}

export const MODULE_DECLARATIONS = [
  AdminCareerHomeComponent,
  AdminCareerComponent,
  AppCareerNavComponent,
];

export const COMPONENTS_PROVIDERS: Provider[] = [];
