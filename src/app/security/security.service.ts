import { Injectable, Inject } from "@angular/core";
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow

export class AuthConfig {
  auth_url: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  constructor(config: AuthConfig) {}

  authorize() {}

  private token = "";

  getToken() {}
}
