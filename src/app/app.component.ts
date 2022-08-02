import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './Todo'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo); // here it should save it to db.json
      this.newTodo = ''
    }else{
      alert('Please enter assignment')
    }
  }
  done(id:number){
    this.todos[id].isCompleted= !this.todos[id].isCompleted;
  }


}
