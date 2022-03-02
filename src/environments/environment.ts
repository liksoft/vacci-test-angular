// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  testUser: "AppSysAdmin",
  testUserPassword: "",
  applicationUniqueID: "ELEWOU_ADMIN_",
  userInfoStorageKey: "ELEWOU_ADMIN_USER_INFO",
  authTokenStorageKey: "ELEWOU_ADMIN_X_AUTH_TOKEN",
  authRememberTokenStorageKey: "ELEWOU_ADMIN_AUTH_REMEMBER_TOKEN",
  APP_LOCAL_URL: "http://127.0.0.1:8888/",
  APP_FILE_LOCAL_URL: "http://127.0.0.1:8888/api/",
  //APP_SERVER_URL: 'https://api.vaccitest.lik.tg/',
  APP_SERVER_URL: "http://127.0.0.1:8000/",
  //APP_FILE_SERVER_URL: 'https://api.vaccitest.lik.tg/api/',
  APP_FILE_SERVER_URL: "http://127.0.0.1:8000/api/",
  APP_FILE_SERVER_URL_v2: "https://api.sigrh.lik.tg/cnss/rh/",
  APP_SECRET: "V1HQkt03PoGdlxN",
  AUTH_SERVER_URL: "http://127.0.0.1:8888/",
  FORM_SERVER_URL: "http://127.0.0.1:8888/",
  isDepartmentWorkspaceEnabled: false,
  isModulesWorkspaceEnabled: false,
  isFormsWorkspaceEnabled: true,
  isConfigurationWorkspaceEnabled: false,
  toApi: {
    user: "users",
    permission: "permissions",
    profil: "profils",
    point: "points",
    supplier: "suppliers",
    timespan: "timespans",
    entry: "entries",
    article: "articles",
    tree: "trees",
    appointment: "appointments",
    article_name: "article-names",
    entrydetail: "entry-details",
  },
  toApi_v2: {
    gridbranchtypes: "grid-branch-types",
    gridbranchs: "grid-branchs",
  },
  api: {
    host: "https://auth.lik.tg/",
  },
  auth: {
    host: "https://auth.lik.tg/",
    clientID: "859782E1-9A2F-49A4-9D42-B59A78E520FB",
    clientSecret:
      "wJa60mWPUK2W8AycfziCrWeMWSus4HLAoSV9cq2qb6FTMlmEudoItlbUHwdUw15peIXmF2b2q2LwCYSO0fvvgQ",
  },
  forms: {
    host: "https://auth.lik.tg/",
    endpoints: {
      forms: "api/forms",
      formControls: "api/form-controls",
      optionsPath: "api/form-control-options",
      bindingsPath: "api/control-bindings",
    },
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
