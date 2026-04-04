//Method Overloading and Constructor Overloading

class Calculator{

    constructor(); //default constructor - no parameters
    constructor(num1:number, num2:number); //parameterized constructor - takes two numbers as parameters

    constructor(num1?:number, num2?:number){ //implementation of the constructor - using optional parameters to handle both cases
        if(num1 !== undefined && num2 !== undefined){
            console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
        } else {
            console.log("Default constructor called");
        }
    }

    //Method overloading

    add(num1:number, num2:number):number; //method to add two numbers
    add(num1:number, num2:number, num3:number):number; //method to add three numbers

    //Implementation of the add method - using optional parameter to handle both cases
    add(num1:number,num2:number,num3?:number):number{
        if(num3 !== undefined){
            return num1 + num2 + num3;
        }
        else{
            return num1 + num2;
        }
    }
}

let calc1 = new Calculator(); //Output: Default constructor called
let calc2 = new Calculator(5, 10); //Output: Sum of 5 and 10 is 15

console.log(calc1.add(2, 3)); //Output: 5
console.log(calc2.add(2, 3, 4)); //Output: 9