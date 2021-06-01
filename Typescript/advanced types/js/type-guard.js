"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addCombinable(a, b) {
    if (typeof a === "number" || typeof b === "number") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(employee) {
    console.log("Name", employee.name);
    if ("privileges" in employee) {
        console.log("Privileges", employee.privileges);
    }
    if ("startDate" in employee) {
        console.log("Start Date", employee.startDate);
    }
}
printEmployeeInfo({
    name: "Valaki1",
    startDate: new Date(),
});
printEmployeeInfo({
    name: "Valaki2",
    privileges: ["create-server", "fire-employee"],
});
//
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Vrum vrum");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("VRUM VRUM");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle)
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(12);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    if (animal.type === "bird") {
        speed = animal.flyingSpeed;
    }
    else if (animal.type === "horse") {
        speed = animal.runningSpeed;
    }
    console.log("Moving ", speed);
}
moveAnimal({ type: "bird", flyingSpeed: 100 });
