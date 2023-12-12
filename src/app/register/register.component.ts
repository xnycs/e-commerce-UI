import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    AppSettingsService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loginForm: FormGroup;
  validate: any = {
    name: false,
    email: false,
    password: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private HttpClient: HttpClient,
    private router: Router,
    private appSetting: AppSettingsService,
  ) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {

    let valid_flg = false;

    let data = {
      name: this.ucwords(this.loginForm?.value?.name),
      email: this.loginForm?.value?.email,
      password: this.loginForm?.value?.password,
      confirm_password: this.loginForm?.value?.confirm_password
    };

    for (let check in this.loginForm?.controls) {
      if ( this.loginForm?.controls?.[check]?.errors ) {
        this.validate[check] = valid_flg = true;
      } else {
        this.validate[check] = false;
      }
    }

    if ( data['password'] != data['confirm_password'] && ( data['password'] || data['confirm_password'] ) ) {
      this.validate['password'] = valid_flg = true;
    } else {
      if ( data['password'] && data['confirm_password'] ) {
        this.validate['password'] = false;
      }
    }

    if ( valid_flg ) {
      console.log('Cannot proceed.')
      return;
    }

    this.appSetting.post(`/register`, data).subscribe((result : any) => {
      if ( result?.user ) {
        this.router.navigate(['/login']);
      }
    },
    (err: any) => {
      console.log('error', err?.error?.message);
    });

  }

  ucwords(str: string): string {
    return str ? str.replace(/\b\w/g, (match) => match.toUpperCase()) : '';
  }

  gotoLogin(): void {
    this.router.navigate(['/login']);
  }

}
