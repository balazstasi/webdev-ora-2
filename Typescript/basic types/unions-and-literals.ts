//unions
function combine(input1: number | string, input2: boolean | number) {
  return null;
}

// literals
type literalPerson = {
  name: string;
  age: number;
  printAgeAs: "as-number" | "as-string" | number;
};
