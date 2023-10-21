import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private cookieService: CookieService) { }
  
  setAuthenticated(token: string) {
    this.cookieService.set("auth-token", token, {
      path: '/'
    });
  }

  isAuthenticated(): boolean {
    return this.cookieService.get("auth-token") !== "";
  }

  getAuthenticationToken(): string {
    return `Bearer ${this.cookieService.get("auth-token")}`;
  }

  deleteAuthenticationToken() {
    this.cookieService.delete("auth-token");
  }
}
