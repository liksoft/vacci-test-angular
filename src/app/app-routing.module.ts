import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { partialConfigs, adminAuthorizations } from './lib/views/partials/partials-configs';
import { partialConfigs, adminAuthorizations } from './config/partials-configs';
import { NotfoundComponent } from './views/pages/notfound/notfound.component';




const routes: Routes = [
  {
    path: 'admin',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./lib/views/login/login.module').then(m => m.LoginModule),
    data: {
      dashboardPath: partialConfigs.routes.commonRoutes.dashboardHomeRoute,
      modulePermissions: adminAuthorizations,
      moduleName: 'Administration'
    }
  },
  {
  path: partialConfigs.routes.commonRoutes.dashboardRoute,
    loadChildren: () => import('./lib/views/pages/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  },


  {
  path: 'career',
    loadChildren: () => import('./modules/career/career.module').then(m => m.CareerModule)
  },
  // {
  // path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },

  { path: '',
   loadChildren: () => import('./modules/points/points.module').then(m => m.PointsModule)
  },

  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
