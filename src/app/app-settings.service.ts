import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }
  
  get(endpoints : string): Observable<any> {
    return this.http.get(`${this.apiUrl}${endpoints}`);
  }

  post(endpoints : string, data : any): Observable<any> {
    return this.http.post(`${this.apiUrl}${endpoints}`, data);
  }
}
