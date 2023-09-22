import { Component } from '@angular/core';
import Todo from "../../types/Todo";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = {
    description: '',
    status: ''
  };

  submitting = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  async submit() {
    this.submitting = true;

    await lastValueFrom(this.http.post('/api/todo', this.todo));
    this.todo.description = '';
    this.todo.status = '';

    await this.router.navigate(["/todos"]);

    this.submitting = false;
  }
}
