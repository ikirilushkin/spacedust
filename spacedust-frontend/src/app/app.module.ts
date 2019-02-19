import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormMessageComponent } from './form-message/form-message.component';
import { CatalogComponent } from './catalog/catalog.component';
import {ExoplanetService} from './exoplanet/exoplanet.service';
import { ExoplanetCardComponent } from './exoplanet-card/exoplanet-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExoplanetComponent } from './exoplanet/exoplanet.component';
import {AuthGuardService} from './auth/auth-guard.service';

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
    ExoplanetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ExoplanetService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
