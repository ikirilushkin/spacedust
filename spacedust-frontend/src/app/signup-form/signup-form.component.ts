import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewUser} from "../user/user.model";
import {AuthService} from "../auth/auth.service";

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

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
    if(this.signupForm.valid) {
      this.signupLoading = true;
      const { username, email, password } = this.signupForm.value;
      const newUser: NewUser = {
        username,
        email,
        password
      };
      this.authService.signup(newUser)
        .subscribe(result => {
          console.log(result);
          this.signupLoading = false;
        }, err => {
          console.log(err);
          this.signupLoading = false;
        })
    }
  }
}
