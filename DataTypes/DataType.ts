let wordTest:number = 10;

wordTest = 20;

console.log(wordTest);


let num1:number=10;
let num2:string="11";

let result = num1+num2;
console.log(result);

//Primitive Data type
/* Number
   string
   Boolean
   Null
   Undefined
   Any
   Union Type
   Void
*/

//Non-primitive Data type
/* Array
   Class
   Function
   Interface
   Touple etc.
*/

//Number data type
let age = 28;
let price = 31.35;
let size = 12345678890

console.log("Age:",age);
console.log("Price:",price);
console.log("Size:",size);

console.log(typeof(price));

//string data type
/*
string can be created using
1.SingeQuote('')
2.DoubleQuote("")
3.Backtick(``)
*/

let firstname:string="Vicky";
let lastname:string='M R';

let greeting:string=`Hello ${firstname} ${lastname}`;

console.log(greeting);

//Boolean data type
let isStudent:boolean=true;
let isHaveJob:boolean=false;

console.log(isStudent);

//Null and undefined
//When absence of the value

let emptyValue:null=null;
let notAssignedValue:undefined=undefined;

console.log(emptyValue);
console.log(notAssignedValue);

//Any datatype

let value:any="string";
console.log(typeof(value));
value=10;
console.log(typeof(value));
value=true;
console.log(typeof(value));

//UNION datatype

let data:number | string | boolean;

data = "string";
console.log(data);
data = 12345;
console.log(data);
data = true;
console.log(data);
data = "string2";
console.log(data);

//Void datatype
//Used for functions that don't return anything

function display():void{
   console.log("Testing");
}

display();