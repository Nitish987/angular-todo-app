import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: Router, private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    if (this.authorizationService.isAuthenticated()) {
      this.route.navigateByUrl("/dashboard");
    }
  }
}
