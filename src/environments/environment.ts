// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  primaryColor: '#64827a',
  pageTitlePrefix: 'The Mini Index',
  localStorageKeyPrefix: 'tmi-',
  notificationTimeout: 5000,
  api: {
    url: 'https://theminiindex.com/api',
    enableMocks: false,
    mockDelay: 1000
  },
  thingiverse: {
    clientId: '6c619d53151f101d1244',
    clientSecret: '0d2e1a33ffed76697033640073d70bca',
    appToken: '1481e8606da73394e097c2cd9ee46361'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
