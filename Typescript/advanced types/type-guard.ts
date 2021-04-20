type Combinable = string | number;

function addCombinable(a: Combinable, b: Combinable) {
  if (typeof a === "number" || typeof b === "number") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
/**
 * ElevatedEmployess = { name: string, privileges: string[], startDate: Date }
 * {name: string, startDate: Date} ES
 * {name: string, privileges: string[]}
 */
type ElevatedEmployee = Admin & Employee;

/**
 * UnkownEmployee = {name: string, startDate: Date} VAGY
 *                  {name: string, privileges: string[]}
 */
type UnkownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnkownEmployee) {
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

class Car {
  drive() {
    console.log("Vrum vrum");
  }
}

class Truck {
  drive() {
    console.log("VRUM VRUM");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle)
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(12);
  }
}

useVehicle(v1);
useVehicle(v2);

//

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

//

type Horse = {
  type: "horse";
  runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  if (animal.type === "bird") {
    speed = animal.flyingSpeed;
  } else if (animal.type === "horse") {
    speed = animal.runningSpeed;
  }

  console.log("Moving ", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });
