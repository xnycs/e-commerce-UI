import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private HttpClient: HttpClient,
    private router: Router,
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

    this.HttpClient.post('http://localhost:8000/api/login', data).subscribe((result : any) => {
      console.log('error', result?.message);
      if ( result?.user ) {
        this.router.navigate(['/dashboard']);
      }
    },
    (err: any) => {
      console.log('error', err?.error?.message);
    });

  }

  ngOnInit(): void {
    // this.HttpClient.get('http://localhost:8000/api/test').subscribe((result : any) => {
    //   console.log('res', result);
    // });
  }

  register(): void {
    this.router.navigate(['/register']);
  }

}
