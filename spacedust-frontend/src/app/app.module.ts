import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
