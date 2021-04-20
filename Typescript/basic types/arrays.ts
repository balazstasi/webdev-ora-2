const arrayPerson = {
  name: "Valaki",
  age: 100,
  hobbies: ["semmi1", "semmi2"],
};

let favActivities: string[];
let favActivities2: Array<string>;

favActivities = arrayPerson.hobbies;

for (const hobby of arrayPerson.hobbies) {
  console.log(hobby);
}
