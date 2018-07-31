/* helloworld.ts */
// class Car implements Vehicle {
//   constructor() {}
// }
class Car {
    constructor(engines, wheels) {
        this.engines = engines;
        this.wheels = wheels;
    }
    isMotorbike() {
        return (this.wheels === 2);
    }
    setModel(model) {
        this.model = model;
    }
}
class Greeter {
    constructor(message) {
        this.message = message;
    }
    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}
let greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.sayHi();
//# sourceMappingURL=helloworld.js.map