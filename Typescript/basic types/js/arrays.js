"use strict";
var arrayPerson = {
    name: "Valaki",
    age: 100,
    hobbies: ["semmi1", "semmi2"],
};
var favActivities;
var favActivities2;
favActivities = arrayPerson.hobbies;
for (var _i = 0, _a = arrayPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
