/*
- An array is a special type of variable that stores multiple values
- The values can be of the same data type or different data types
- Arrays are declared using '[]' or the generic 'Array<T>' type
*/

//Approach - 1: Using leteral

let arraySample:string[]=["Tester01","Tester02","Tester03"];  //declaration+initialization
console.log(arraySample);

//Approach - 2: Using the generic Array<T> type

let employeeName:Array<string>=["John wick","Tarzan","King Kong"];
let employeeIDs:Array<number>=[101,201,301];
let differentDatatype:Array<string | number>=["Hello", 10];
let anyDatatype:Array<any>=[1,true,"String",'i',null];

for(let i=0;i<employeeName.length;i++){
    console.log(employeeName[i]);
}

//for..in loop(indexes)

for(let i in differentDatatype){
    console.log(differentDatatype[i]);
}

//for..of loop

for(let id of employeeIDs){
    console.log(id);
}