//A callback function is a function that is passed as an argument to another function and gets executed later

//Callback function
function showMessage(message:string):string{
    return message;
}

function empName(empName:string,callbackFunction:(message:string)=> void){
    console.log(empName);
    console.log(callbackFunction("Hello"));
}

empName("Vicky",showMessage);


//Example 2

//callback function
function multiplyResult(result:number,multiplyNum:number):number{
    return result*multiplyNum;
}

function sumOfTwoNumber(a:number,b:number,callback1:(result:number,multiplyNum:number)=> number){
    let sum = a+b;
    console.log(callback1(sum,6));
}
sumOfTwoNumber(2,5,multiplyResult);
