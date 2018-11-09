import { AuthConfig } from "src/app/security/security.service";

export const environment = {
  production: true,
  search_api_url: "https://api.spotify.com/v1/search",

  auth_config: <AuthConfig>{
    auth_url: "https://accounts.spotify.com/authorize",
    redirect_uri: "http://localhost:4200/",
    response_type: "token",
    client_id: "6b4222a14a8445fc85818fd242ed2a5a"
  }
};
