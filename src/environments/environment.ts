import { AuthConfig } from "src/app/security/security.service";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  search_api_url: "https://api.spotify.com/v1/search",

  auth_config: <AuthConfig>{
    auth_url: "https://accounts.spotify.com/authorize",
    redirect_uri: "http://localhost:4200/",
    response_type: "token",
    client_id: "6b4222a14a8445fc85818fd242ed2a5a"
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
