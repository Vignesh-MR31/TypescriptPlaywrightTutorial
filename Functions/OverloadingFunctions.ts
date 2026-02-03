/*
Step 1: Write a signature of functions
Step 2: Implement a function
Step 3: calling a function
*/

//Example:1 - Different parameter Types(data types)

function getInfo(id:number):String;
function getInfo(name:String):String;

function getInfo(param:number |String):String{
    if(typeof(param) == "number"){
        return `parameter is number, ${param}`;
    }
    else{
        return `parameter is String, ${param}`;
    }
}

console.log(getInfo(10));
console.log(getInfo("Test"));

//Example:2 - Different number of parameters

function addNum(a:number,b:number):number;
function addNum(a:number,b:number,c:number):number;

function addNum(a:number,b:number,c?:number):number{
    if(c!=undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}

console.log(addNum(10,11));
console.log(addNum(10,11,20));

//Example:3 - Different return types

function processInput(input:number):number;
function processInput(input:String):String;

function processInput(input:number |String):String | number{
    if(typeof(input) == "number"){
        return input*2;
    }
    else{
        return `parameter is String, ${input}`;
    }
}

console.log(processInput(10));
console.log(processInput("Test"));

//Example:4 

function details(name:String):String;
function details(age:number):number;
function details(married:boolean):String;

function details(value:String | number | boolean):String | number{
    if(typeof(value) == "string"){
        return `My name is ${value}`;
    }
    else if(typeof(value) == "number"){
        return 30-value;
    }
    else{
        let result:String = value?"Not married":"Married";
        return result;
    }
}

console.log(details("Vicky"));
console.log(details(27));
console.log(details(true));