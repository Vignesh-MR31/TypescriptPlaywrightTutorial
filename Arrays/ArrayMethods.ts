//push() - Adds single/multiple elements to the end of an array
//Syntax - array.push(element,....elementN);

let numberSequence:number[] = [1,2,3,4];

numberSequence.push(5,6,7,8,9,10);
console.log(`After push ${numberSequence}`);

//pop() - Removes the last element from an array
//Syntax - array.pop()

let lastElement = numberSequence.pop();
console.log(`Removed last element is ${lastElement}`);
console.log(`After removed last element ${lastElement}`);

//shift() - Removes the first element from array
//Syntax - array.shift()

console.log(`Removed first element ${numberSequence.shift()}`);
console.log(`After removing first element ${numberSequence}`);

//unshift() - Adds single/multiple elements to the beginning of an array
//Syntax - array.unshift(element,......elementN);

numberSequence.unshift(0,1);
console.log(`After adding Number at front ${numberSequence}`);

//concat() - Combines two or more arrays of same type
//This method returns a new array without modifying any existing arrays.
//Syntax - array.concat(array1,....arrayN)

let addedArrays:(String | number)[] = numberSequence.concat([10,11],[12,13]);
console.log(addedArrays);
console.log(numberSequence);

//slice() - Extracts a section of an array
//Starting Index starts from Zero
//Ending Index will be exclusive. Example: If 3 is Ending Index it will be consider 2
//Syntax - array.slice(Start,End)

console.log(addedArrays.slice(11,13));

//splice() - Adds/removes elements from an array(From everywhere)
//Syntax - array.splice(Start, deleteCount, item1,....,.itemN)

//Removing
addedArrays.splice(2,3);
console.log(addedArrays);

//Adding
addedArrays.splice(2,0,2,3,4); //0 means delete count
console.log(addedArrays);

//Both removing and adding
addedArrays.splice(2,2,"two","three");
console.log(addedArrays);

//indexOf() - Finds the index of an element, If element not found then return -1
//Syntax: array.indexOf(searchElement) or array.indexOf(searchElement,StartingIndex)

let fruits:string[] = ["apple","mango","banana","grape","cherry"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("cherry",2));
console.log(fruits.indexOf("banana",3));

//includes() - Check if an element exists
//Return True or false
//Syntax: array.includes(searchElement, fromIndex)

console.log(fruits.includes("Orange"));
console.log(fruits.includes("cherry"));

//toString() - converts array to string
//Syntax: array.toString()

console.log(numberSequence);
let numberToString = numberSequence.toString();
console.log(numberToString);