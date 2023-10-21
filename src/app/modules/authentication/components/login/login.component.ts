import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    private authService: AuthService, 
    private autherizationService: AuthorizationService,
    private router: Router
  ) {}

  startLogin() {
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((r => {
        try {
          if (r.success) {
            this.autherizationService.setAuthenticated(r.data);
            this.router.navigateByUrl("/")
          }
        } catch(e) {
          return;
        }
      }));
    }
  }
}
