import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    
  ) {}

  title = 'e-commerce-ui';

  ngOnInit(): void {

  }
}
