class Department {
  protected employees: string[] = [];

  constructor(public readonly id: string, private name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class Accounting extends Department {
  private lastReport: string = "";

  constructor(public id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(employee: string) {
    if (employee === "Balazs") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  get mostRecentReport() {
    if (this.lastReport !== "") return this.lastReport;
    throw new Error("There are no reports!");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass a value!");
    this.addReport(value);
  }
}

const accounting = new Accounting("a2", []);
accounting.mostRecentReport = "First Report of the year";
console.log(accounting.mostRecentReport);

export {};
