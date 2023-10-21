import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNavComponent } from './components/todo-nav/todo-nav.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoMainComponent } from './todo-main.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';



@NgModule({
  declarations: [
    TodoNavComponent,
    TodoDashboardComponent,
    TodoMainComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
