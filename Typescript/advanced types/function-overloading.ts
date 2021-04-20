function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: any, b: any, c?: any): any {
  if (c) return a + b + c;
  return a + b;
}

console.log(add("Hello", " Micsi"));
console.log(add(10, 20));
console.log(add(10, 20, 10));
