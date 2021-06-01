"use strict";
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
Department.fiscalYear = 2021;
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
    describe() {
        console.log("Accounting Department ID", this.id);
    }
}
const acc = new Accounting("acc2123", []);
acc.describe();
