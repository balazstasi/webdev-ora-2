class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.id = id;
        this.reports = reports;
        this.lastReport = "";
    }
    addEmployee(employee) {
        if (employee === "Balazs") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    get mostRecentReport() {
        if (this.lastReport !== "")
            return this.lastReport;
        throw new Error("There are no reports!");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass a value!");
        this.addReport(value);
    }
}
const accounting = new Accounting("a2", []);
accounting.mostRecentReport = "First Report of the year";
console.log(accounting.mostRecentReport);
export {};
