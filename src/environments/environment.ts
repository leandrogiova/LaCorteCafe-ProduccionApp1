// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'bar-lacorte',
    appId: '1:718902122372:web:ee4c63d2848f5ccd9e2fd1',
    databaseURL: 'https://bar-lacorte-default-rtdb.firebaseio.com',
    storageBucket: 'bar-lacorte.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAXrXVw6ASWc1QdwkQCa4Xml5YXpQCZHJs',
    authDomain: 'bar-lacorte.firebaseapp.com',
    messagingSenderId: '718902122372',
    measurementId: 'G-YP9BLLYDYT',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.