import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettingsService } from './app-settings.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private token: string = "";

  constructor(
    private router: Router,
    private appSetting: AppSettingsService,
  ) { }

  setToken(token: string): void {
    this.token = token;
  }
  
  logout(): void {
    this.token = "";
  }

  isLoggedIn(): Promise<boolean> {
    return this.checkToken();
  }

  check(): Promise<boolean> {
    return this.checkToken();
  }

  async checkToken(): Promise<boolean> {

    const storedValue = localStorage?.getItem('user');

    if ( this.token ) {
      return Promise.resolve(true);
    }

    if (storedValue !== null) {
      const retrievedObject: any = JSON.parse(storedValue);
      this.token = retrievedObject?.token;
    }

    if ( this.token ) {

      this.appSetting.getDataWithToken(`/check-token`, this.token).subscribe(() => {

        let page = localStorage?.getItem('current_page');

        if ( page ) {
          this.router.navigate([page]);
        }
        return Promise.resolve(true);
      },
      () => {
        this.router.navigate(['/login']);
        return Promise.resolve(false);
      });
    }

    return Promise.resolve(false);
  }
}