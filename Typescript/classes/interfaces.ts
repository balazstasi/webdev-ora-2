interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const user1: Person = {
  name: "Balazs",
  age: 22,
  greet(phrase: string) {
    console.log(phrase, this.name, this.age);
  },
};

user1.greet("hahaha");

export {};
