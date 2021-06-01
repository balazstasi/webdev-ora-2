class Department {
  // private id: string;
  // private name: string;

  protected employees: string[] = [];

  constructor(public readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class Accounting extends Department {
  constructor(public id: string, private reports: string) {
    super(id, "Accounting");
  }

  addEmployee(employee: string) {
    if (employee === "Balazs") {
      return;
    }
    this.employees.push(employee);
  }
}

export {};
