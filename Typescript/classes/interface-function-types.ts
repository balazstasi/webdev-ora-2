type Addable = number | string;

interface AddFunction {
  (a: Addable, b: Addable): Addable;
}

let add: AddFunction;

add = (num1: Addable, num2: Addable) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
