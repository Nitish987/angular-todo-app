import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  startSignup() {
    console.log(this.signupForm.value)
    if (this.signupForm.value.name && this.signupForm.value.email && this.signupForm.value.password) {
      this.authService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe((r => {
        try {
          if (r.success) {
            this.router.navigateByUrl("/auth/login")
          }
        } catch(e) {
          return;
        }
      }));
    }
  }
}
