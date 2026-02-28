//forEach(), map(), filter(), reduce(), some(), every()

//forEach()
//Executes a function once for each array element
//It take function as a parameter

//Syntax: array.forEach(function(currentValue, index, array){})

//currentValue - The current element being processed in the array
//index (optional) - The index of the current element being processed in the array
//array (optional) - The array the current element belongs to

//Example:1
let employees:string[]=["Vicky","Virat","Rohit","Dhoni"];

employees.forEach(function(currentValue,index){
    console.log(`${currentValue} and index is ${index}`);
});

employees.forEach((element,index)=>{
    console.log(`Using arrow function. Element is ${element}`);
})

//Map()
//Creates a new array with the result of calling the function on every element of an array
//It takes function as a parameter
//Returns the same number of elements that we have in original array

//Syntax: array.map(function(currentValue, index, array){})
const normalNum:number[]=[1,2,3,4];

let squareNum=normalNum.map(function(element,index){
    return element*element;
});
console.log(squareNum);

//Filter()
//Creates an new array with all the elements that pass/satisfy the function
//It takes function as a parameter
//Returns either same or fewer number of elements compared to original array

let evenNum=normalNum.filter(num =>{
    if(num%2==0){
        return num;
    }
});
console.log(evenNum);

//Reduce()
//Applies a function on every element of an array and returns a single value
//Syntax: arry.reduce(function(accumulator, currentValue, index, array){})
//accumulator - The accumulated value from previous iteration

let sumOfNum:number[]=[1,2,3,4,5];

let sum=sumOfNum.reduce((previousValue,currentValue) => {
    return previousValue+currentValue;
},10); //initial value is 10
console.log(sum);

//Some()
//Checks if at least one element in the array satisfies the condition specified in the function
//It takes function as a parameter
//Returns true if at least one element satisfies the condition, otherwise false
//syntax: array.some(function(currentValue, index, array){})

const ages:number[]=[17,22,50,30];

let isAdult=ages.some(age => age>=18);
console.log(isAdult);

//Every()
//Checks if all the elements in the array satisfy the condition specified in the function
//It takes function as a parameter
//Returns true if all elements satisfy the condition, otherwise false
//Syntax: array.every(function(currentValue, index, array){})

let allAdult=ages.every(age => age>=18);
console.log(`All are adults: ${allAdult}`);