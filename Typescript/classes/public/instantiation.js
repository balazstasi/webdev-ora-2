class Department {
    // private id: string;
    // private name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.id = id;
        // this.name = name;
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.id = id;
        this.reports = reports;
    }
}
export {};
