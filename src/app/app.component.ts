import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public mode = 'lista';
  public todos: Todo[] = [];
  public title: String ="Meu Fluxo";
  public form: FormGroup;
  public ladoA: number = 0;
  public ladoB: number = 0;




   constructor(private fb: FormBuilder) {
     this.form = this.fb.group({
       title:['', Validators.compose([
         Validators.minLength(3),
         Validators.maxLength(60),
         Validators.required
       ])]
     });
     this.load();

       }


  a(){
        this.ladoA = this.ladoA+1

  }
  b(){
        this.ladoB = this.ladoB+1

  }

  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    const ladoA = this.ladoA;
    const ladoB = this.ladoB;

    this.todos.push(new Todo(id, title, false, ladoA, ladoB));
    this.save();
    this.clear();
    console.log(this.todos)
  }
  clear(){
    this.form.reset();
    this.ladoA = 0
    this.ladoB = 0
  }
  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
      this.save();
    }

  }
  markAsDone(todo: Todo){
    todo.done = true;
    this.save();
  }
  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode='lista'
  }

  load(){
    const data =  localStorage.getItem('todos');
    if(data){
      this.todos = JSON.parse(data);
    }else {
      this.todos = [];
    }

  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}
