import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  public signupform: FormGroup;
  public signupLoading = false;
  public emailValidating = false;
  public signupResult: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signupform = this.fb.group({
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
}
