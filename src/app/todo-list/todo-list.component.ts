import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  editTodo(todo: Todo) {
    todo.editMode = true;
  }

  updateTodo(todo: Todo, editInput) {
    const newTitle = editInput.value;
    this.todoDataService.updateTodoById(todo.id, {
      title: newTitle
    });
    todo.editMode = false;
  }

  get allTasks() {
    return this.todoDataService.getAllTodos();
  }

  get completedTodos() {
    return this.todoDataService.completedTasks();
  }

  get incompletedTasks() {
    return this.todoDataService.incompletedTasks();
  }

  ngOnInit() {
  }

}
