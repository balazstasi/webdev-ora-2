function addHandler(a: number, b: number, handle: (num: number) => void): number {
  const res = a + b;
  handle(res);
  return res;
}

const printNum = (num: number): void => {
  console.log(num);
};

const sum = addHandler(10, 5, printNum);
console.log("Sum", sum);
