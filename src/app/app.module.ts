import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from "@angular/forms";
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
