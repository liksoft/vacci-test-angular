export const environment = {
  production: true,
  testUser: '',
  testUserPassword: '',
  applicationUniqueID: 'ELEWOU_ADMIN_',
  userInfoStorageKey: 'ELEWOU_ADMIN_USER_INFO',
  authTokenStorageKey: 'ELEWOU_ADMIN_X_AUTH_TOKEN',
  authRememberTokenStorageKey: 'ELEWOU_ADMIN_AUTH_REMEMBER_TOKEN',
  forms: {
    roles: null,
    authorizations: null,
    users: null,
    departments: null,
    modules: null,
    globalConfigurationForm: null
  },
  APP_SERVER_URL: 'https://192.168.2.237:8100/api/',
  APP_FILE_SERVER_URL: 'https://192.168.2.237:8100/api/',
  AUTH_SERVER_URL: 'http://127.0.0.1:8000/',
  APP_SECRET: 'V1HQkt03PoGdlxN',
  isDepartmentWorkspaceEnabled: false,
  isModulesWorkspaceEnabled: false,
  isFormsWorkspaceEnabled: true,
};
