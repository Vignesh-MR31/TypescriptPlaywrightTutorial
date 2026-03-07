//object - object contains variables and methods
//object is a collection of key-value pairs

//First way to create an object
//1. Using object type - Directly define the values for variable
//The typscript object type represents all values that are not of a primitive type (string, number, boolean, null, undefined, symbol). It is the most general type in TypeScript and can be used to represent any non-primitive value. When you declare a variable with the type object, it can hold any value that is not a primitive type. This includes arrays, functions, and other objects.

let person: object = {
    name: "Vignesh",
    age: 25,
    city: "Chennai"
};
console.log(person);

//object with methods
let personWithMethod = {
    name: "Vignesh",
    age: 28,
    city: "Chennai",
    greet: function():string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(personWithMethod);
personWithMethod.greet(); //Output: Hello, my name is Vignesh and I am 28 years old.

//accessing object properties
console.log(personWithMethod.name); //Output: Vignesh  
console.log(personWithMethod.age); //Output: 28
console.log(personWithMethod.city); //Output: Chennai

//accessing object properties using bracket notation
console.log(personWithMethod["name"]); //Output: Vignesh
console.log(personWithMethod["age"]); //Output: 28
console.log(personWithMethod["city"]); //Output: Chennai
console.log(personWithMethod["greet"]()); //Output: Hello, my name is Vignesh and I am 28 years old. (accessing the greet method using bracket notation)

//Modifying object properties
personWithMethod.age = 30;
console.log(personWithMethod.age); //Output: 30 (age property is modified)
personWithMethod["city"] = "Bangalore";
console.log(personWithMethod.city); //Output: Bangalore (city property is modified using bracket notation)
console.log(personWithMethod); //Output: { name: 'Vignesh', age: 30, city: 'Bangalore', greet: [Function: greet] } (modified object)

//Second way to create an object - inline object type - We also define the datatype of the keys
let student:{
    name: string;
    age: number;
    grade: string;
    getSummary: () => string; //method that returns a string
} =
{
    name: "Vignesh",
    age: 25,
    grade: "A",
    getSummary: function(): string {
        return `Student ${this.name} is ${this.age} years old and has a grade of ${this.grade}.`;
    }
}
console.log(student);
console.log(student.getSummary()); //Output: Student Vignesh is 25 years old and has a grade of A. (accessing the getSummary method)

//Third way to create an object - using type alias - We can create a type alias for the object structure and then use it to define the object
type Employee = {
    name: string;
    age: number;
    department: string;
    getInfo?: () => string; //optional method that returns a string
}

let newEmployee1: Employee = {
    name: "Vignesh",
    age: 25,
    department: "IT",
    getInfo: function(): string {
        return `Employee ${this.name} is ${this.age} years old and works in the ${this.department} department.`;
    }
}
console.log(newEmployee1);
console.log(newEmployee1.getInfo!());

let newEmployee2: Employee = {
    name: "Vicky",
    age: 28,
    department: "HR"
}
console.log(newEmployee2);

//Intersection of object types - We can create a new type by combining two or more existing types using the intersection operator (&)
type Manager = {
    name: string;
    age: number;
    department: string;
    getInfo: () => string;
}
type Developer = {
    name: string;
    age: number;
    programmingLanguage: string;
    getInfo: () => string;
}
type TechLead = Manager & Developer & //TechLead type is an intersection of Manager and Developer types
{
    getPersonalInfo: () => string;
}
let techLead: TechLead = {
    name: "Vignesh",
    age: 30,
    department: "IT",
    programmingLanguage: "TypeScript",
    getInfo: function(): string {
        return `TechLead ${this.name} is ${this.age} years old, works in the ${this.department} department and knows ${this.programmingLanguage}.`;
    },
    getPersonalInfo: function(): string {
        return `TechLead ${this.name} is ${this.age} years old, works in the ${this.department} department and knows ${this.programmingLanguage}.`;
    }
}
console.log(techLead);
console.log(techLead.getInfo()); //Output: TechLead Vignesh is 30 years old, works in the IT department and knows TypeScript. (accessing the getInfo method of the TechLead object)
console.log(techLead.getPersonalInfo()); //Output: TechLead Vignesh is 30 years old, works in the IT department and knows TypeScript. (accessing the getPersonalInfo method of the TechLead object)

//Fourth way to create an object - using class - We can define a class and then create an object from that class
class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarInfo(): string {
        return `Car ${this.make} ${this.model} was manufactured in ${this.year}.`;
    }
}
let car1 = new Car("Benz", "C-Class", 2020);
console.log(car1);
console.log(car1.getCarInfo()); //Output: Car Benz C-Class was manufactured in 2020. (accessing the getCarInfo method of the car1 object)

let car2 = new Car("BMW", "X5", 2021);
console.log(car2);
console.log(car2.getCarInfo()); //Output: Car BMW X5 was manufactured in 2021. (accessing the getCarInfo method of the car2 object)
