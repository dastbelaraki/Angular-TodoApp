import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoDataService } from './todo-data.service';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    AllTasksComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'all-tasks',
        component: AllTasksComponent
      }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
