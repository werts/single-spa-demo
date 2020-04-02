import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'micro-auth-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  private buildForm(): void {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      passwd: ['', [Validators.required]]
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  loggin() {
    navigateToUrl('#/app1')
  }
}
