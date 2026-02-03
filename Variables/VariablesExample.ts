
/*var - functional scope - Mainly used and called inside the function
      - var variable can be declared without initialization
      - var allows the re-declaration
      - var allows the re-assignment/initialization
      - var supports hoisting
      
*/ 

/*let - block scope - Mainly used and called inside the if block, else block, for loop block, etc....
      - We can able to change the value of the let variable
      - let variable can be declared without initialization 
      - let not allows the re-declaration
      - let allows the re-assignment/initialization
      - let not supports hoisting
      
*/ 

/*const - block scope - Mainly used and called inside the if block, else block, for loop block, etc....
        - We couldn't be able to change the value of the const variable. Once it assign we can't reassign
        - const variable must be initialized at the time of declaration
        - const not allows the re-declaration
        - const not allows the re-assignment/initialization
        - const not supports hoisting
*/ 


//Syntax (with datatype) ----> keyword variableName: DataType = value 
//Example: var age:number = 28
//Syntax (without datatype) ----> keyword variableName = value
//Example: var age = 28

var words;
function varVariable(){
    if(true){
        words = "Testing Function scope";
        var words = "Testing Function scope redeclared";
    }
    console.log(words);
}

varVariable();

let word;
const num = 10;
function letconstVariable(){
    if(true){
        word = "Testing Block scope";
        console.log(word);
        console.log(num);
    }
    console.log(word);
    console.log(num);
}

letconstVariable();

//Hoisting -- example

//console.log(a);
var a = 10;
console.log(a);