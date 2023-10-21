import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input() todo: Todo | null = null;
  isDeleted = false;
  @Output() editTaskEmitter = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {}

  markComplete(value: boolean) {
    if (this.todo) {
      this.todoService.markAsComplete(this.todo.id, value).subscribe(r => {
        try {
          if (r.success) {
            this.todo!.isCompleted = r.data.isCompleted;
          }
        } catch(e) {
          return;
        }
      });
    }
  }

  deleteTask() {
    if (this.todo) {
      this.todoService.deleteTask(this.todo.id).subscribe(r => {
        try {
          if (r.success) {
            this.isDeleted = true;
          }
        } catch(e) {
          return;
        }
      });
    }
  }

  editTask() {
    this.editTaskEmitter.emit(this.todo!);
  }
}
