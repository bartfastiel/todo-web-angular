import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  description = '';
  status = 'OPEN';

  submitting = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  submit() {
    this.submitting = true;

    this.http.post('/api/todo', {
      description: this.description,
      status: this.status,
    })
      .subscribe(() => this.router.navigate(["/todos"]));
  }
}
