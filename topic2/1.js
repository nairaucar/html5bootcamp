let ActorClass = class {
  constructor(name, character, age, gender) {
    this.name = name;
    this.character = character;
    this.age = age;
    this.gender = gender;
  }
  info() {
    console.log("Character:" + " " + this.character);
    console.log("Main character real-life name:" + " " + this.name);
    console.log("Age:" + " " + this.age + "\n");
  }
}


let EventEmitter = class {
  constructor(){
    this.event = {};
  }
  on(eventName, callback) {
    if(this.event[eventName]) {
      this.event[eventName].push(callback);
    }
    else {
      this.event[eventName] = [callback];
    }
  };
  emit(eventName) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(callback => {
        callback(eventName);
      });
    }
    else {
      console.log("Emit error");
    }
  }
  off(eventName,callback){
    let cback = this.event[eventName];
    cback.splice(cback.indexOf(callback), 1);
  }
}


class MovieClass extends EventEmitter {
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

let Logger = class {
  log(info) {
    console.log(info);
    }
};

let social = {
  share = share,
  like = like
};

class share(friendName) {
  let log = new Logger;
  console.log(friendName + " " + shared + " " + this.name);
}

class like(friendName) {
  let log = new Logger;
  console.log(friendName + " " + liked + " " + this.name);
}

let robertDJr = new ActorClass("Robert Downey Jr.", "Iron Man", 53);
let gwyneth = new ActorClass("Gwyneth Paltrow", "Pepper", 45);

let actorsTA = [
  let scarlett = new ActorClass("Scarlett Johansson", "Black Widow", 33),
  let cEvans = new ActorClass("Chris Evans", "Capitain America", 37),
  let liamHems = new ActorClass("Liam Hemsworth", "Thor", 35)
];

let ironMan = new MovieClass("Iron Man", 2008, "126 minutes");
let avengers = new MovieClass("The Avengers", 2012, "143 minutes");

let logger = new Logger;

Object.assign(ironMan, social);
Object.assign(avengers, social);

ironMan.addCast(robertDJr);
ironMan.addCast(gwyneth);
avengers.addCast(actorsTA);

ironMan.play();



ironMan.info();
robertDJr.info();

avengers.info();
scarlett.info();
