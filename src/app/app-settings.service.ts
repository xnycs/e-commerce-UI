import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  private apiUrl = 'http://localhost:8000/api/test';


  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
