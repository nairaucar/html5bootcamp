import(ActorClass) from "ActorClass.js"
import(MovieClass) from "MovieClass.js"
import(Logger) from "Logger.js"

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
avengers.play();
