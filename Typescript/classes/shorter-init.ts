class Department {
  // private id: string;
  // private name: string;
  constructor(public id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }
}

const accounting = new Department("ACC121212", "accounting");
console.log(accounting.id);

export {};
