function f(a: number): void {
  console.log(a);
  if (a > 0) f(a - 1);
}

f(10);

// f10 -> 10, f9
// f9  -> 9,  f8
// ...
// f0  -> NULL

// n! = 1 * ... * n
// 5! = 1x2x3x4x5 = 120
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("5! =", factorial(5));

/*
  fact0 = 1

  fact(5) = 5 * fact(4) = 5 * 24 = 120 
  fact(4) = 4 * fact(3) = 6 * 4  = 24
  fact(3) = 3 * fact(2) = 3 * 2  = 6
  fact(2) = 2 * fact(1) = 2 * 1  = 2
  fact(1) = 1 * fact(0) = 1
*/

type StringNumber = number | string;

function add(a: StringNumber, b: StringNumber): number {
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
