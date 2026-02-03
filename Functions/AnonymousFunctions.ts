/*
An Anonymous function is a function that does not have a name
Instead, it is assigned to a variable, which acts as its name

Syntax:

let variable = function(parameter):returnType{
    function body;
}

variable() --->calling the function
*/

let message = function():String{
    return "Hi, Vicky";
}

console.log(message());

//Anonymous function with parameters

let multiply = function(a:number, b:number):number{
    return a*b;
}

console.log(multiply(10,20));