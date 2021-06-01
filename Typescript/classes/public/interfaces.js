"use strict";
const user1 = {
    name: "Balazs",
    age: 22,
    greet(phrase) {
        console.log(phrase, this.name, this.age);
    },
};
user1.greet("hahaha");
