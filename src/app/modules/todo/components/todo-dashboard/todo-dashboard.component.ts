import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import Todo from 'src/app/models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @Input() taskAdderVisibility = "false";
  taskForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });
  editTaskForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });
  todos: Todo[] = [];
  editTodo: Todo | null = null;

  constructor(private todoService: TodoService) {}
  
  ngOnInit(): void {
    this.todoService.listTask().subscribe(r => {
      try {
        if (r.success) {
          this.todos = r.data;
        }
      } catch(e) {
        return;
      }
    });
  }

  addTask() {
    if (this.taskForm.value.title && this.taskForm.value.description) {
      this.todoService.addTask(this.taskForm.value.title, this.taskForm.value.description).subscribe(r => {
        try {
          if (r.success) {
            this.taskForm.setValue({
              title: "",
              description: ""
            });
            this.todos.push(r.data);
          }
        } catch(e) {
          return;
        }
      });
    }
  }

  editTask() {
    if (this.editTaskForm.value.title && this.editTaskForm.value.description) {
      this.todoService.editTask(this.editTodo!.id, this.editTaskForm.value.title, this.editTaskForm.value.description).subscribe(r => {
        try {
          if (r.success) {
            this.todos[this.todos.findIndex(todo => todo.id === this.editTodo!.id)] = r.data;
            this.cancelTaskToEdit();
          }
        } catch(e) {
          return;
        }
      });
    }
  }

  setTaskToEdit(todo: Todo) {
    this.editTodo = todo;
    this.editTaskForm.setValue({
      title: todo!.title,
      description: todo!.description
    })
  }

  cancelTaskToEdit() {
    this.editTodo = null;
  }
}