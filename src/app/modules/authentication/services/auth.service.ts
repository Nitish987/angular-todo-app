import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerApi } from 'src/app/settings/constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${ServerApi.url}/user/login`, {
      email: email,
      password: password
    });
  }

  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${ServerApi.url}/user/signup`, {
      name: name,
      email: email,
      password: password
    });
  }
}
