import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewUser} from '../user/user.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public signupForm: FormGroup;
  public signupLoading = false;
  public emailValidating = false;
  public signupResult: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.signupLoading = true;
      const { username, email, password } = this.signupForm.value;
      const newUser: NewUser = {
        username,
        email,
        password
      };
      this.authService.signup(newUser)
        .subscribe(result => {
          this.signupResult = {
            message: result.message,
            state: 'success'
          };
          this.signupLoading = false;
          const { token } = result;
          this.authService.setToken(token);
          setTimeout(() => {
            this.router.navigate(['catalog']);
          }, 1500);
        }, err => {
          this.signupResult = {
            message: err.error.message,
            state: 'error'
          };
          this.signupLoading = false;
        });
    }
  }
}
