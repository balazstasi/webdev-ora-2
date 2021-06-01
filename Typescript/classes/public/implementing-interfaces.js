class Person {
  constructor(n) {
    this.age = 100;
    this.name = n;
  }
  greet(phrase) {
    console.log(phrase);
  }
  sayGoodbye(phrase) {
    console.log(phrase);
  }
}
// let user: Greetable;
let user;
user = new Person("Balazs");
user.sayGoodbye("Cso");
