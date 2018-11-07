import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthConfig } from "./security.service";

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
        }
      ]
    } as ModuleWithProviders;
  }
}
