"use strict";
function f(a) {
    console.log(a);
    if (a > 0)
        f(a - 1);
}
f(10);
// f10 -> 10, f9
// f9  -> 9,  f8
// ...
// f0  -> NULL
// n! = 1 * ... * n
// 5! = 1x2x3x4x5 = 120
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log("5! =", factorial(5));
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return +a + +b;
    }
    throw new Error("Incorrect Types");
}
console.log(add(4, 5));
console.log(add("13", "12"));
