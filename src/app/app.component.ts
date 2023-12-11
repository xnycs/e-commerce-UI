import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router } from '@angular/router';

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
  load_cnt: number = 0;
  
  constructor(
    private formBuilder: FormBuilder,
    private HttpClient: HttpClient,
    private router: Router,
  ) { }

  ngAfterViewChecked(): void {
    this.checkUrl();
  }

  checkUrl(): void {
    if ( this.router.url == '/' && this.load_cnt ) {
      this.router.navigate(['/login']);
    }
    this.load_cnt++;
  }

  ngOnInit(): void {
    // this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Operation successful' });
  }
}
