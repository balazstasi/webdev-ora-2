class Department {
  // private id: string;
  // private name: string;
  constructor(public id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }
}

class Accounting extends Department {
  constructor(public id: string, private reports: string) {
    super(id, "Accounting");
  }
}

export {};
