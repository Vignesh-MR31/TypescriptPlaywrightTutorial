//palindrome
let inputNumber:number = 121;
let palindrome:number = 0;
while(inputNumber>0){
    let remainder = inputNumber % 10;
    palindrome = palindrome*10+remainder;
    inputNumber = Math.floor(inputNumber/10);
}

console.log(palindrome);

//Natural Numbers
let naturalNumber:number=0;
let sum=0;

while(naturalNumber<=10){
    sum = sum+naturalNumber;
    naturalNumber++;
}

console.log(sum);

//Factorial of given number
let factorial:number=6;
let factorialValue = 1;
while(factorial>0){
    factorialValue = factorialValue*factorial;
    factorial--;
}
console.log(factorialValue);

//Reverse a given number
let normalNum:number=9874056;
let reverse = 0;
while(normalNum>0){
    let temp = normalNum%10;
    reverse = temp+reverse*10;
    normalNum = Math.floor(normalNum/10);
}
console.log(reverse);

//Prime number
let inputNum = 2;   // change this number to test
let isPrime = true;

if (inputNum <= 1) {
    isPrime = false;
} else {
    let i = 2;

    while (i <= Math.sqrt(inputNum)) {
        if (inputNum % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
}
console.log(`Prime Number status: ${isPrime}`)

//largest digit in a given number

let givenNum:number=5462;
let largest:number=0;

while(givenNum>0){
    let temp = givenNum%10;
    if(temp>largest){
        largest = temp;
    }
    givenNum = Math.floor(givenNum/10);
}

console.log(`Largest is ${largest}`);
