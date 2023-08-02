import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32-workshop';

  todoList: any[] = [];

  receiveFormInput(event: ToDo) {
    console.log(event);
    this.todoList.push(event);
  }
}
