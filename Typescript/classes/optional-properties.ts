interface Named {
  readonly name?: string;
  outputName?: string;
}

class NamePrinter implements Named {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
