import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ToDo } from 'src/app/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todoList: ToDo[] = [];
}
