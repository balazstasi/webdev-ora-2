interface Greetable {
  name: string;

  greet(phrase: string): void;
  sayGoodbye(phrase: string): void;
}

class Person implements Greetable {
  age = 100;
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }

  sayGoodbye(phrase: string) {
    console.log(phrase);
  }
}

// let user: Greetable;
let user: Person;

user = new Person("Balazs");
user.sayGoodbye("Cso");
