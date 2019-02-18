import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../user/credentials.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  logingForm: FormGroup;
  loginLoading = false;
  loginResult: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.logingForm = this.fb.group({
      usernameOrEmail: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  public onSubmit(): void {
    this.logingForm.controls.usernameOrEmail.markAsDirty();
    this.logingForm.controls.password.markAsDirty();
    const { usernameOrEmail, password } = this.logingForm.value;
    const credentials: Credentials = { usernameOrEmail, password };
    if (this.logingForm.valid) {
      this.loginLoading = true;
      this.authService.login(credentials).subscribe(
        result => {
          this.loginLoading = false;
          this.authService.setToken(result.token);
          this.router.navigate(['catalog']);
        },
        err => {
          this.loginResult = {
            message: err.error.message,
            state: 'error'
          };
          this.loginLoading = false;
        }
      );
    }
  }
}
