import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsComponent } from './points.component';
import { PointNavComponent } from './point-nav/point-nav.component';
import { HomeComponent } from '../../views/pages/vue-home/home.component';
import { PointsHomeComponent } from '../../views/pages/vue-point/point-list.component';
import { AppointmentListComponent } from '../../views/pages/vue-appointment/appointment-list.component';
import { TimespanListComponent } from '../../views/pages/vue-timespan/timespan-list.component';
import { UserListComponent } from '../../views/pages/vue-user/user-list.component';
import { PermissionListComponent } from '../../views/pages/vue-permission/permission-list.component';
import { UserProfilListComponent } from '../../views/pages/vue-user-profil/user-profil-list.component';
import { ArticleNameListComponent } from '../../views/pages/vue-article-name/article-name-list.component';
import { ArticleListComponent } from '../../views/pages/vue-article/article-list.component';
import { EntryListComponent } from '../../views/pages/vue-entry/entry-list.component';
import { TreeListComponent } from '../../views/pages/vue-tree/tree-list.component';
import { SupplierListComponent } from '../../views/pages/vue-supplier/supplier-list.component';
import { GridListComponent } from '../../views/pages/vue-grid/grid-list.component';
import { ExternAppListComponent } from '../../views/pages/vue-extern-app/extern-app-list.component';
import { PointFormComponent } from '../../views/pages/form-point/point-form.component';
import { EntryFormComponent } from '../../views/pages/form-entry/entry-form.component';

//components
import { GridColumnComponent } from '../../views/components/grid-column/grid-column.component';
import { SupGridColumnComponent } from '../../views/components/sup-grid-column/sup-grid-column.component';
import { GridBranchComponent } from '../../views/components/grid-branch/grid-branch.component';
import { MultiDimentionalViemComponent } from '../../views/components/multi-dimentional-view/m-dimentional-view.component';
import { EntryDetailFormComponent } from '../../views/components/form-entry-details/form-entry-detail.component';

import { AdDirective } from 'src/app/config/ad.directive';



import {
  partialConfigs,routeDefinitions
} from '../../config/partials-configs';

const routes: Routes = [{ path: '', component: PointsComponent }];

export const getRoutes = () => {
  const childRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.appointmentsRoute}/${routeDefinitions.listRoute}`,
      component: AppointmentListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.centersRoute}/${routeDefinitions.listRoute}`,
      component: PointsHomeComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.articlesRoute}/${routeDefinitions.listRoute}`,
      component: ArticleListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.entriesRoute}/${routeDefinitions.listRoute}`,
      component: EntryListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.suppliersRoute}/${routeDefinitions.listRoute}`,
      component: SupplierListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.extern_appsRoute}/${routeDefinitions.listRoute}`,
      component: ExternAppListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.timespanRoute}/${routeDefinitions.listRoute}`,
      component: TimespanListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.userRoute}/${routeDefinitions.listRoute}`,
      component: UserListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.treeRoute}/${routeDefinitions.listRoute}`,
      component: TreeListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.permissionRoute}/${routeDefinitions.listRoute}`,
      component: PermissionListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.userprofilRoute}/${routeDefinitions.listRoute}`,
      component: UserProfilListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.article_nameRoute}/${routeDefinitions.listRoute}`,
      component: ArticleNameListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: `${routeDefinitions.configurationsRoute}/${routeDefinitions.gridsRoute}/${routeDefinitions.listRoute}`,
      component: GridListComponent,
      //pathMatch: 'full',
      //redirectTo: partialConfigs.routes.commonRoutes.homeRoute,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },
    {
      path: partialConfigs.routes.commonRoutes.homeRoute,
      component: PointsHomeComponent,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },


    {
      path: `${routeDefinitions.pointsRoute}/${routeDefinitions.createRoute}`,
      component: PointFormComponent,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

    {
      path:`${routeDefinitions.entriesRoute}/${routeDefinitions.createRoute}` ,
      component: EntryFormComponent,
      // canActivate: [AuthGuardService],
      data: {
        //authorizations: adminAuthorizations
      }
    },

  ];

  return [
    {
      path: '',
      component: PointsComponent,
      //canLoad: [AuthGuardService],
      //canActivateChild: [AuthGuardService],
      // canActivate: [AuthGuardService],
      children: childRoutes
    }
  ] as Routes;
};

export const MODULE_DECLARATIONS = [
  PointNavComponent,
  HomeComponent,
  PointsComponent,
  PointsHomeComponent,
  AppointmentListComponent,
  ArticleListComponent,
  SupplierListComponent,
  ExternAppListComponent,
  TimespanListComponent,
  UserListComponent,
  TreeListComponent,
  PermissionListComponent,
  UserProfilListComponent,
  GridListComponent,
  PointFormComponent,
  ArticleNameListComponent,
  EntryListComponent,
  EntryFormComponent,

  //components
  GridColumnComponent,
  SupGridColumnComponent,
  MultiDimentionalViemComponent,
  EntryDetailFormComponent,
  GridBranchComponent,

  //directive
  AdDirective

];

@NgModule({
  imports: [RouterModule.forChild(getRoutes())],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
