import(EventEmitter) from "EventEmitter";

export class MovieClass extends EventEmitter {
  constructor(name, year, duration){
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    this.emit("play");
    console.log("The \'play\' event has been emitted");
  }
  pause() {
    this.emit("pause");
  }
  resume() {
    this.emit("resume");
  }
  addCast(cast){
    this.cast = this.cast.concat(cast);
  }
}
