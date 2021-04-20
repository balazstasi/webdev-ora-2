"use strict";
function add(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(add("Hello", " Micsi"));
console.log(add(10, 20));
console.log(add(10, 20, 10));
