import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private appSetting: AppSettingsService,
    private formBuilder: FormBuilder,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  loginForm: FormGroup;

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
        this.authService.setToken(res.user.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      }
    },
    (err: any) => {
      console.log('error', err?.error?.message);
    });
  }

  ngOnInit(): void {
    console.log('logout')
  }

  register(): void {
    this.router.navigate(['/register']);
  }

}
