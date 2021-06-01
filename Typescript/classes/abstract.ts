abstract class Department {
  static fiscalYear = 2021;

  protected employees: string[] = [];

  constructor(public readonly id: string, private name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  abstract describe(this: Department): void;
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

  describe() {
    console.log("Accounting Department ID", this.id);
  }
}

const acc = new Accounting("acc2123", []);
acc.describe();
