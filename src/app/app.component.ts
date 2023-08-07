import { Component, ViewChild } from '@angular/core';
import { ToDo } from './to-do';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32-workshop';

  todoList: ToDo[] = [];

  receiveFormInput(event: ToDo) {
    console.log(event);
    this.todoList.push(event);
  }
}
