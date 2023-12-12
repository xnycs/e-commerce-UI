import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private isAuth: boolean = false;

  constructor(
    private router: Router,
  ) { 
  }

  login(): void {
    this.isAuth = true;
  }

  logout(): void {
    this.isAuth = false;
  }

  isLoggedIn(): any {
    
    if ( !this.isAuth ) {
      this.router.navigate(['/login']);
    }

    return this.isAuth;
  }
}