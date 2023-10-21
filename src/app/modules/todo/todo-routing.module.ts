import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './todo-main.component';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
