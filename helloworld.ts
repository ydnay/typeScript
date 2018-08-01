/* helloworld.ts */

interface Vehicle {
  engines:       number;
  wheels:        number;
  isMotorbike(): boolean;
}

// class Car implements Vehicle {
//   constructor() {}
// }

class Car implements Vehicle {
  model: string;
  
  constructor(public engines: number, public wheels: number) {}

  isMotorbike(): boolean {
    return (this.wheels === 2);
  }

  setModel(model): void {
    this.model = model;
  }
}

class Greeter {
    constructor(public message: string) { }
    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}

let greeter = new Greeter("Hello, world!");

document.body.innerHTML = greeter.sayHi();