//Inheritance - A class can inherit properties and methods from another class using the `extends` keyword. 
// The class that is being inherited from is called the "parent" or "superclass," 
// while the class that inherits is called the "child" or "subclass."

class Car{
    color:string;
    model:string;
    name:string;

    constructor(color:string, model:string, name:string){
        this.color = color;
        this.model = model;
        this.name = name;
    }

    startEngine = ():void =>{
        console.log(`car engine started`);
    }

    stopEngine = ():void =>{
        console.log(`car engine stopped`);
    }

    displayCarInfo = ():void =>{
        console.log(`Car Name: ${this.name}`);
        console.log(`Car Model: ${this.model}`);
        console.log(`Car Color: ${this.color}`);
    }
}

class Benz extends Car{
    year:number;

    constructor(color:string, model:string, name:string, year:number){
        super(color, model, name);
        this.year = year;
    }

    //Method Overriding - The child class can provide a specific implementation of a method that is already defined in its parent class.
    //when we override a method, the child class's version of the method will be called instead of the parent class's version when we call the method on an instance of the child class.
    startEngine = ():void =>{
        console.log(`${this.name} engine started`);
    }

    yearInfo = ():void =>{
        console.log(`${this.name} was manufactured in ${this.year}`);
    }

    benzInfo = ():void =>{
        this.displayCarInfo();
        this.yearInfo();
    }
}

let benz1 = new Benz("Red", "S-Class", "Mercedes-Benz", 2020);
benz1.startEngine();
benz1.benzInfo();
benz1.stopEngine();

//Benz object assigned to Car variable
let car:Car = new Benz("Blue", "S-Class", "Mercedes-Benz", 2018);
car.startEngine(); //Output: Mercedes-Benz engine started
car.displayCarInfo(); //Output: Car Name: Mercedes-Benz
//car.benzInfo(); //We can't call benzInfo() method on car variable because it is of type Car, which does not have the benzInfo() method defined.
car.stopEngine(); //Output: car engine stopped

