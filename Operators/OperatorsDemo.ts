let a:number=5, b:number=3;

//Arithmetic Operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


console.log("*****************");
//Assignment operators

a=10, b=10;

console.log(a+=b);
console.log(a-=b);
console.log(a=a*b);
console.log(a/=b);
console.log(a%=b);

console.log("*****************");

//Relational operator ----> returns true or false
// > < >= <= != == ===(Strict equality)

a=30, b=10;

console.log(a>b);
console.log(a<b);
console.log(a!=b);
console.log(a==b);
console.log(a>=b);
console.log(a<=b);


console.log("********Strict equality*********");

//Strict equality

let number1:any=10;
let number2:any="10";

console.log(number1==number2);  //== ---> compares only value
console.log(number1===number2); //=== ----> comparing both value and type


console.log("*******Logical operators********");

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1);
console.log(!b2);