import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent {
  isTaskAdderVisible = "false";

  setTaskAdderVisibility(state: boolean) {
    this.isTaskAdderVisible = state ? "true" : "false";
  }
}
