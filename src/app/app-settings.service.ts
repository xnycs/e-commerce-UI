import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:8000/api';

  get(endpoints : string): Observable<any> {
    return this.http.get(`${this.apiUrl}${endpoints}`);
  }

  post(endpoints : string, data : any): Observable<any> {
    return this.http.post(`${this.apiUrl}${endpoints}`, data);
  }

  getDataWithToken(endpoints: string, token: string | boolean): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    // Make a GET request with the Bearer token in the header
    return this.http.get<any>(`${this.apiUrl}${endpoints}`, { headers });
  }

}
