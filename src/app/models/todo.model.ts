export class Todo {


  constructor(
    public id: Number,
    public title: String,
    public done: Boolean,
    public ladoA: number,
    public ladoB: number
  ) { }
}
export class TodoTotal {


  constructor(
    public id: Number,
    public title: String,
    public done: Boolean,
    public total: number,
    public totalEspaco: number,
    public espaco: number,
  ) { }
}
