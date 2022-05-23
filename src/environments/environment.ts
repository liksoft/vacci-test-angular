// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  testUser: 'AppSysAdmin',
  testUserPassword: '',
  applicationUniqueID: 'ELEWOU_ADMIN_',
  userInfoStorageKey: 'ELEWOU_ADMIN_USER_INFO',
  authTokenStorageKey: 'ELEWOU_ADMIN_X_AUTH_TOKEN',
  authRememberTokenStorageKey: 'ELEWOU_ADMIN_AUTH_REMEMBER_TOKEN',
  forms: {
    roles: 13,
    authorizations: 2,
    identification_employeur: 2,
    users: 14,
    departments: 18,
    modules: 15
  },
  APP_LOCAL_URL: 'http://127.0.0.1:8888/',
  APP_FILE_LOCAL_URL: 'http://127.0.0.1:8888/api/',


  //APP_SERVER_URL: 'https://api.vaccitest.lik.tg/',
  APP_SERVER_URL: 'http://127.0.0.1:8000/',
  //APP_FILE_SERVER_URL: 'https://api.vaccitest.lik.tg/api/',
  APP_FILE_SERVER_URL: 'http://127.0.0.1:8000/api/',
  APP_FILE_SERVER_URL_v2: 'http://127.0.0.1:8000/rh/',
  APP_SECRET: 'V1HQkt03PoGdlxN',
  AUTH_SERVER_URL: 'http://127.0.0.1:8888/',
  FORM_SERVER_URL: 'http://127.0.0.1:8888/',
  isDepartmentWorkspaceEnabled: false,
  isModulesWorkspaceEnabled: false,
  isFormsWorkspaceEnabled: true,
  isConfigurationWorkspaceEnabled: false,
  toApi: {
    user: 'users',
    permission: 'permissions',
    profil: 'profils',
    point: 'points',
    supplier: 'suppliers',
    timespan: 'timespans',
    entry: 'entries',
    article: 'articles',
    tree: 'trees',
    appointment:'appointments',
    article_name:'article-names',
    entrydetail :'entry-details' ,
  },
  toApi_v2: {
    gridbranchtypes : 'grid-branch-types',
    gridbranchs: 'grid-branchs',
    levels: 'grid-branch-types',
  },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
