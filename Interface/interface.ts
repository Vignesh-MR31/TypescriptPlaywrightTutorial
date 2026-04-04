//An interface in TypeScript is a way to define the structure of an object. 
//It can be used to specify the types of properties and methods that an object should have. 
//Here's an example of how to define and use an interface in TypeScript:

//Defining an interface

//Example 1: Basic Interface

interface PersonInterface{
    name: string;
    age: number;
    city: string;
}

let person1: PersonInterface = {
    name: "Vignesh",
    age: 25,
    city: "Chennai"
};
console.log(person1);

//Example 2: Interface with optional properties

interface EmployeeInterface{
    name: string;
    age: number;
    department: string;
    getInfo?: () => string; //optional method that returns a string
}

let employee1: EmployeeInterface = {
    name: "Vignesh",
    age: 30,
    department: "IT",
    getInfo: () => {
        return `Name: ${employee1.name}, Age: ${employee1.age}, Department: ${employee1.department}`;
    }
};
console.log(employee1.age);
console.log(employee1.getInfo ? employee1.getInfo() : "getInfo method is not defined"); //Output: Name: Vignesh, Age: 30, Department: IT (accessing the getInfo method)

let employee2: EmployeeInterface = {
    name: "Arun",
    age: 28,
    department: "HR"
};
console.log(employee2.age);
console.log(employee2.getInfo ? employee2.getInfo() : "getInfo method is not defined"); //Output: getInfo method is not defined (since getInfo method is optional and not defined for employee2 object)

//Example 3: Interface with readonly properties & Function Types

interface ProductInterface{
    readonly id: number; //readonly property that cannot be modified after initialization
    name: string;
    price: number;
    getDetails: () => void; //abstract method that returns void
}

let product1: ProductInterface = {
    id: 101,
    name: "Laptop",
    price: 50000,
    getDetails: () => {
        console.log(`ID: ${product1.id}, Name: ${product1.name}, Price: ${product1.price}`);
    }
};
product1.getDetails(); //Output: ID: 101, Name: Laptop, Price: 50000

//Example 4: Interface with Inheritance

interface VehicleInterface{
    make: string;
    model: string;
    year: number;
}

interface CarInterface extends VehicleInterface{
    numberOfDoors: number;
}

let car1: CarInterface = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    numberOfDoors: 4
};
console.log(car1);

//Example 5: Class implementing an Interface

interface ShapeInterface{
    shapeName: string;
    area: () => number; //abstract method that returns a number
}

class Circle implements ShapeInterface{
    shapeName: string; //shapeName is a property defined in the ShapeInterface, so it must be implemented in the Circle class
    radius: number;

    constructor(shapeName: string, radius: number) {
        this.shapeName = shapeName;
        this.radius = radius;
    }
    //The area method is defined in the ShapeInterface, so it must be implemented in the Circle class.
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
let circle1 = new Circle("Circle", 5);
console.log(circle1.shapeName); //Output: Circle
console.log(circle1.area()); //Output: 78.53981633974483 (area of the circle with radius 5)