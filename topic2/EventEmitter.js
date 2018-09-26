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
