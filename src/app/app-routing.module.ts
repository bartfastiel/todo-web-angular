import { NgModule } from '@angular/core';
import {TodosComponent} from "./todos/todos.component";
import {RouterModule, Routes} from "@angular/router";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/new', component: TodoFormComponent },
  { path: 'todos/:id/edit', component: TodoEditComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
