import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoDataService {

  // todos: Todo[] = [
  //   { id: 1, title: 'Learn Angular', complete: true, editMode: false },
  //   { id: 2, title: 'Play with Vue', complete: false, editMode: false },
  //   { id: 3, title: 'Master React', complete: false, editMode: false },
  // ];

  todos: {}[];
  todos$;

  // lastId = this.todos.length;

  constructor(db: AngularFireDatabase) {
    this.todos$ = db.list('todos').valueChanges();
  }

  readData() {
    this.todos$.subscribe(items => {
      console.log(items);
      items.map(item => {
        console.log(item);
      });
    }
    );
  }

  // Create/Post todo
  // addTodo(todo: Todo): TodoDataService {
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos.push(todo);
  //   return this;
  // }

  // // Delete todo
  // deleteTodoById(id: number): TodoDataService {
  //   this.todos = this.todos
  //     .filter(todo => todo.id !== id);
  //   return this;
  // }

  // // Read/Get All todos
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }

  // // Read/Get single todo
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }

  // // Update/Put todo
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   const todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }

  // // Complete function
  // toggleTodoComplete(todo: Todo) {
  //   const updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

  // // Get all completed tasks
  // completedTasks() {
  //   return this.todos.filter(todo => todo.completed === true);
  // }

  // // Get all incomplete tasks
  // incompletedTasks() {
  //   return this.todos.filter(todo => todo.completed !== true);
  // }

}
