import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {FormMessageComponent} from './form-message/form-message.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ExoplanetService} from './exoplanet/exoplanet.service';
import {ExoplanetCardComponent} from './exoplanet-card/exoplanet-card.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ExoplanetComponent} from './exoplanet/exoplanet.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {TokenInterceptorService as TokenInterceptor} from './auth/token-interceptor.service';
import { ExoplanetNewComponent } from './exoplanet-new/exoplanet-new.component';
import {RoleGuardService} from './auth/role-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent,
    FormMessageComponent,
    CatalogComponent,
    ExoplanetCardComponent,
    LoginFormComponent,
    NavbarComponent,
    ExoplanetComponent,
    ExoplanetNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ExoplanetService, AuthGuardService, RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
