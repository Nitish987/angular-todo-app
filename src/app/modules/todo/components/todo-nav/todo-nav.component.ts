import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent {
  @Output() showTaskAdder = new EventEmitter<boolean>();
  isTaskAdderVisibile = false;

  constructor(private route: Router, private authorizationService: AuthorizationService) {}

  setShowTaskAdder() {
    this.showTaskAdder.emit(!this.isTaskAdderVisibile);
    this.isTaskAdderVisibile = !this.isTaskAdderVisibile;
  }

  logoutCurrentUser() {
    this.authorizationService.deleteAuthenticationToken();
    this.route.navigateByUrl("/");
  }
}
