import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AppSettingsService } from '../app-settings.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    AppSettingsService,
    AuthService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private HttpClient: HttpClient,
    private router: Router,
    private appSetting: AppSettingsService,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {

    let valid_flg = false;

    for (let check in this.loginForm?.controls) {
      if ( this.loginForm?.controls?.[check]?.errors ) {
        console.log('error '+check)
        valid_flg = true;
      }
    }

    if ( valid_flg ) return;

    let data = {
      email: this.loginForm?.value?.email,
      password: this.loginForm?.value?.password
    };

    this.appSetting.post(`/login`, data).subscribe((res : any) => {
      if ( res?.user ) {
        this.router.navigate(['/dashboard']);
      }
    },
    (err: any) => {
      console.log('error', err?.error?.message);
    });

  }

  ngOnInit(): void {
  
  }

  register(): void {
    this.router.navigate(['/register']);
  }

}
