import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, DashboardComponent, HttpClientModule, ReactiveFormsModule],
  providers: [
    AppSettingsService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})

export class AppComponent {
  title = 'e-commerce-UI';
  loginForm: FormGroup;
  
  constructor(
      private formBuilder: FormBuilder,
      private HttpClient: HttpClient,
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    // this.HttpClient.get('http://localhost:8000/api/test').subscribe((result : any) => {
    //   console.log('res', result);
    // });
  }

  onSubmit(): void {
    console.log('this.loginForm?.controls', this.loginForm?.controls);
    for (let check in this.loginForm?.controls) {
      if ( this.loginForm?.controls?.[check]?.errors ) {
        console.log('error '+check)
      }
    }


    if ( this.loginForm?.valid ) {
    }
  }
}
