import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter();

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.todoForm = this.fb.group({
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      priority: new FormControl('low'),
      dueDate: new FormControl('')
    })
  }

  createTodo() {
    console.log(this.todoForm.value);
    this.onFormSubmit.emit(this.todoForm.value);
  }

}
