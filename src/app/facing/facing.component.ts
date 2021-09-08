import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoTotal } from '../models/todo.model';

@Component({
  selector: 'app-facing',
  templateUrl: './facing.component.html',
  styleUrls: ['./facing.component.less']
})
export class FacingComponent {

  public mode = 'lista';
  public facing: TodoTotal[] = [];
  public title: String = "Meu Facing";
  public form: FormGroup;
  public espaco: number;
  public totalEspaco: number;
  public total: number = 0;




  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      espaco: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      total: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.load();

  }


  t() {
    this.total = this.total + 1

  }




  add() {
    const title = this.form.controls['title'].value;
    const totalEspaco = this.form.controls['total'].value;
    const espaco = this.form.controls['espaco'].value;
    const id = this.facing.length + 1;
    const total = this.total


    this.facing.push(new TodoTotal(id, title, false, total, totalEspaco, espaco));
    this.save();
    this.clear();
    console.log(this.facing)
  }
  clear() {
    this.form.reset();
    this.total = 0

  }
  remove(todo: TodoTotal) {
    const index = this.facing.indexOf(todo);
    if (index !== -1) {
      this.facing.splice(index, 1);
      this.save();
    }

  }
  markAsDone(todo: TodoTotal) {
    todo.done = true;
    this.save();
  }
  markAsUndone(todo: TodoTotal) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.facing);
    localStorage.setItem('facing', data);
    this.mode = 'lista'
  }

  load() {
    const data = localStorage.getItem('facing');
    if (data) {
      this.facing = JSON.parse(data);
    } else {
      this.facing = [];
    }

  }

  changeMode(mode: string) {
    this.mode = mode;
  }

  meuEspaco(): number {
    let total = 0;
    let esp = this.espaco;
    let espTotal = this.totalEspaco;

    this.total = 100 * (esp / espTotal)


    return Math.round(this.total)

  }
}