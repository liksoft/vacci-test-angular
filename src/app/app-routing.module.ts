import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { partialConfigs, adminPermissions } from './lib/views/partials/partials-configs';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./lib/views/login/login.module').then(m => m.LoginModule),
    data: {
      dashboardPath: partialConfigs.routes.commonRoutes.dashboardHomeRoute,
      modulePermissions: adminPermissions,
      moduleName: 'Administration'
    }
  },
  {
    path: partialConfigs.routes.commonRoutes.dashboardRoute,
    loadChildren: () => import('./lib/views/pages/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
