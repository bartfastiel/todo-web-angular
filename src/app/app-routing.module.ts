import { NgModule } from '@angular/core';
import {TodosComponent} from "./todos/todos.component";
import {RouterModule, Routes} from "@angular/router";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'new', component: TodoFormComponent },
  { path: ':id/edit', component: TodoEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
