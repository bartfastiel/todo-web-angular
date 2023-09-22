import {Component, OnInit} from '@angular/core';
import Todo from "../../types/Todo";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos?: Todo[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<Todo[]>('/api/todo')
      .subscribe(todos => this.todos = todos);
  }
}
