export let ActorClass = class {
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
