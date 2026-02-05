/*

Arrow function/Lambda function

There are 3 parts to a lamda function

1.Parameters - A function may optionally have parameters
2.The fat arrow notation/lamda notation (=>) - It is also called as the "goes to operator"
3.Statements - represent the functions instruction set

Syntax:

let variable = (parameters) => {
    //block of code;
}

variable(); ---> calling the function

*/

//Arrow function with no parameter and no return type

let arrowMessage = ():void =>
{
    console.log("Arrow function block");
}

arrowMessage();

//Arrow function with parameter and return type
let product = (a:number,b:number):number => {
    return a*b;
}

console.log(product(9,9));

//Arrow function with Implicit return (if there is only one line of return statement)
let add = (x:number,y:number):number => x+y;
console.log(add(15,98));

//Arrow function with rest parameters
let productOfArray = (...numbers:number[]):number =>{
    let ProductOfNumbers = 1;
    for(let i=0;i<numbers.length;i++){
        ProductOfNumbers = ProductOfNumbers * numbers[i];
    }
    return ProductOfNumbers;
}

console.log(productOfArray(7,11,56,5));

let arrayLength = (...combination:(number | string)[]):number =>{
    return combination.length;
}

console.log(arrayLength("Vicky",18,"India",212));

//Arrow function with optional parameters
let testerDetails = (id:number,name:string,email?:string):void =>{
    console.log(`ID is ${id}`);
    console.log(`Name is ${name}`);
    if(email!=undefined){
        console.log(`Email ID is ${email}`);
    }
}

testerDetails(11,"Tester01");
testerDetails(12,"Tester03","Tester03@gmail.com");

//Arrow function with default parameters
let discountValue = (price:number,rate:number=0.5):number =>{
    return price*rate;
}

console.log(`Discount is ${discountValue(1000,0.7)}`);
console.log(`Discount is ${discountValue(1000)}`);
