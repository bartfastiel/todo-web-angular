import { Component } from '@angular/core';
import Todo from "../../types/Todo";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    void this.init();
  }

  async init() {
    this.todos = await lastValueFrom(this.http.get<Todo[]>("/api/todo"));
  }
}
