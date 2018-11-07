import { Injectable, Inject } from "@angular/core";
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
import { HttpParams } from "@angular/common/http";
import { config } from "rxjs";

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
  constructor(private config: AuthConfig) {}

  authorize() {
    const { client_id, redirect_uri, response_type } = this.config;

    const params = new HttpParams({
      fromObject: {
        client_id,
        redirect_uri,
        response_type
      }
    });
    sessionStorage.removeItem("token")
    location.replace(`${this.config.auth_url}?${params.toString()}`);
  }

  private token = "";

  getToken() {
    if (!this.token) {
      this.token = JSON.parse(sessionStorage.getItem("token"));
    }

    if (!this.token && location.hash) {
      const params = new HttpParams({
        fromString: location.hash
      });
      this.token = params.get("#access_token");
      location.hash = ''
      sessionStorage.setItem("token", JSON.stringify(this.token));
    }

    if (!this.token) {
      this.authorize();
    }
    return this.token;
  }
}
