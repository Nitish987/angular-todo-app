import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoute, todoRoute } from './settings/routes/route';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: authRoute.main,
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: todoRoute.dashboard,
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
