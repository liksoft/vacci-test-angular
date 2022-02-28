import { backendRoutes } from '../lib/views/partials/backend-route-paths';
import { appAccessControlList } from '../lib/views/partials/access-control-list';
import { routeDefinitions as adminModuleRoutes } from '../lib/views/partials/admin-route-definitions';

/**
 * This file defines configuration values that are shared accross modules
 */
export const partialConfigs = {
  routes: {
    commonRoutes: {
      dashboardRoute: 'dashboard',
      dashboardHomeRoute: 'dashboard/home',
      careerRoute: 'career',
      careerHomeRoute: 'career/home',
      adminRoute: 'admin',
      adminHomeRoute: 'admin/home',
      homeRoute: 'home',
    },
    adminModuleRoutes
  },
  acl: appAccessControlList,
  backendRoutesPaths: backendRoutes
};

export const routeDefinitions = {

  //mine

  // center routes
  centersRoute: 'centers',

  appointmentsRoute : 'appointments',
  suppliersRoute : 'suppliers',
  extern_appsRoute:'extern-apps',
  gridsRoute:'grids',
  timespanRoute:'timespans',
  userRoute:'users',
  treeRoute:'trees',
  permissionRoute:'permissions',
  pointsRoute:'points',
  userprofilRoute:'profils',
  article_nameRoute: 'artile-names' ,
  entriesRoute: 'entries' ,
  // Article routes
  articlesRoute: 'articles',
  // list routes
  listRoute: 'lists',
  // list routes
  createRoute: 'create',
  // Entrie routes
  listEntriesRoute: 'Entries/list',
  configurationsRoute: 'configurations',


  //not mine

  // Account routes
  accountRoute: 'account',
  // Roles management routes
  rolesManagementRoute: 'roles',
  // Role creation routes
  createRole: 'roles/create',
  // Role update route
  updatedRoleRoute: 'roles/update',
  // User creation routes
  createUsersRoute: 'users/create',
  // Users update route
  updatedUserRoute: 'users/update',

  // Forms management routes
  formsManagementRoute: 'forms',
  // Forms creation routes
  createFormsRoute: 'forms/create',
  // Module management routes
  modulesManagementRoute: 'modules',
  // Module management routes
  createModulesRoute: 'modules/create',
  // Module management routes
  updateModulesRoute: 'modules/update',
  // Department management route
  departmentManagementRoute: 'departments',
  // Module management routes
  createDepartmentRoute: 'department',
  // Configurations
  globalConfigurationsRoute: 'configurations-globales',

  // Form Control options route
  controlOptionsRoute: 'form-control-options',
};

// Add new constants here for module path
// Default Dashboard path
export const defaultPath = `/${partialConfigs.routes.commonRoutes.dashboardRoute}`;
// Admin module path
export const adminPath = adminModuleRoutes;
// Route definitions for backend ressources
export const backendRoutePaths = backendRoutes;


// Fixed value of the currency used in the application
export const APPLICATION_CURRENCY = 'XOF';
// File types definitions
export const imagesMimeExtensions = ['bmp', 'gif', 'ico', 'jpg', 'jpeg', 'png', 'svg', 'tiff', 'tif', 'webp'];


// Export authorizations
export { adminAuthorizations } from '../lib/views/partials/modules-authorizations';
export type MultidimentionalArray = Array<String>| Array<any>|ReadonlyArray <MultidimentionalArray>;
