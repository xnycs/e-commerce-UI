import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard {

    constructor(
      private router: Router,
      private auth: AuthService,
    ) { }
  
    canActivate(): Promise<boolean> {

      const isAuthenticated = this.auth.isLoggedIn();
      
      if ( !isAuthenticated ) {
        this.router.navigate(['/login']);
      }
      
      return isAuthenticated;
    }
  }