import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthConfig, SecurityService } from "./security.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth-interceptor.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // {
    //   provide: AuthConfig,
    //   useValue: environment.auth_config
    // }
  ]
})
export class SecurityModule {
  constructor(private security: SecurityService) {
    this.security.getToken();
  }

  /**
   * I need some confs ;-)
   * @param config
   */
  static forRoot(config: AuthConfig) {
    return {
      ngModule: SecurityModule,
      providers: [
        {
          provide: AuthConfig,
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        }
      ]
    } as ModuleWithProviders;
  }
  static forChild() {
    return {
      ngModule: SecurityModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        }
      ]
    } as ModuleWithProviders;
  }
}
