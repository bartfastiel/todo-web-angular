import {Component, OnInit} from '@angular/core';
import Todo from "../../types/Todo";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo?: Todo;

  submitting = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        return;
      }
      this.http.get<Todo>(`/api/todo/${id}`)
        .subscribe(todo => this.todo = todo);
    });
  }

  submit() {
    this.submitting = true;

    const id = this.todo?.id;
    if (!id) {
      return;
    }
    this.http.put(`/api/todo/${id}/update`, this.todo)
      .subscribe(() => this.router.navigate(["/todos"]));
  }
}
