import { Component } from '@angular/core';
import Todo from "../../types/Todo";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {firstValueFrom, lastValueFrom} from "rxjs";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {
  todo?: Todo;

  submitting = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    void this.init();
  }

  async init() {
    const params = await firstValueFrom(this.route.params);

    if (params.hasOwnProperty('id')) {
      this.todo = await lastValueFrom(this.http.get<Todo>(`/api/todo/${params['id']}`));
    }
  }

  async submit() {
    this.submitting = true;

    await lastValueFrom(this.http.put(`/api/todo/${this.todo?.id}/update`, this.todo));

    await this.router.navigate(["/todos"]);

    this.submitting = false;
  }
}
