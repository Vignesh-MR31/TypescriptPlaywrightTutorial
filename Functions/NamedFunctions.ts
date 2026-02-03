/*
syntax:

function functionName(parameter):returnType{
    code block;
}
*/

//Named function without parameter and return type
function helloWorld(){
    console.log("Hello world");
}

helloWorld();

//Named function with parameter and return type
function sumOfTwoNumbers(a:number,b:number):number{
    return a+b;
}

let result = sumOfTwoNumbers(10,15);
console.log(result);

//Named function with rest parameters
//Rest parameters dont restrict the number of values that you can pass to a function

function addNumbers(...nums:number[]):number{
    let i=0;
    let sum:number=0;
    for(i=i;i<nums.length;i++){
        sum = sum+nums[i];
    }
    return sum;
}

console.log(addNumbers(1,2,3,4));

function totalLength(...elements:(number | String)[]):number{
    return elements.length;
}

console.log(totalLength(1,"test"));

//Named function with optional parameters
//Need to put ? in optional parameter

function displayDetails(id:number,name:String,emailID?:String){

    console.log(`ID is ${id}`);
    console.log(`Name is ${name}`);
    if(emailID!=undefined){
        console.log(`Email ID is ${emailID}`);
    }

}

displayDetails(100,"Vicky","Vicky@gmail.com");
displayDetails(101,"Anto");

//Named function with default parameter

function discount(price:number,rate:number=0.5):number{
    let discountValue = price*rate;
    return discountValue;
}

console.log(discount(1000,0.3));
console.log(discount(1000));