class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
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
    }
    addEmployee(employee) {
        if (employee === "Balazs") {
            return;
        }
        this.employees.push(employee);
    }
}
export {};
