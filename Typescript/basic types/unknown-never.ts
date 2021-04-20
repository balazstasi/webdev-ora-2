// Unknown
let input: unknown = 10;
let input2: any = 10;

//hibas
// let str1: string = input;
let str2: string = input2;

// Never
function generateError(error: string, code: number): never {
  throw { error, code };

  while (true) {
    console.log();
  }
}

generateError("error uzenet", 100);
