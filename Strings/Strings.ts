//Declaration of string variables
const originalName:string = 'Vignesh';
const initialName:string = `MR`;
console.log(originalName);
console.log(initialName);
let firstName:string = "Vicky";
let lastName:string = "Anto";
let fullName:string = firstName + " " + lastName;
console.log(fullName);

//when to use backticks
//1. When we want to use variables inside a string
//2. When we want to create multi-line strings
let fullNameWithBackticks:string = `${firstName} ${lastName}`;
console.log(fullNameWithBackticks);

//string methods
let message:string = "Hello World";
console.log(`length of the string is ${message.length}`); //length of the string
console.log(`uppercase of the string is ${message.toUpperCase()}`); //converts the string to uppercase
console.log(`lowercase of the string is ${message.toLowerCase()}`); //converts the string to lowercase
console.log(`includes "World": ${message.includes("World")}`); //checks if the string contains a specific substring
console.log(`index of "o": ${message.indexOf("o")}`); //returns the index of the first occurrence of a specific substring
console.log(`split by space: ${message.split(" ")}`); //splits the string into an array of substrings based on a specified separator
console.log(`replace "World" with "TypeScript": ${message.replace("World","TypeScript")}`); //replaces a specified substring with another substring
console.log(`substring from 0 to 5: ${message.substring(0,5)}`); //returns a portion of the string between the specified start and end indices
console.log(`character at index 0: ${message.charAt(0)}`); //returns the character at the specified index
console.log(`last index of "o": ${message.lastIndexOf("o")}`); //returns the index of the last occurrence of a specific substring
console.log(`starts with "Hello": ${message.startsWith("Hello")}`); //checks if the string starts with a specific substring
console.log(`ends with "World": ${message.endsWith("World")}`); //checks if the string ends with a specific substring
console.log(`trim whitespace: "${message.trim()}"`); //removes whitespace from both ends of the string
console.log(`trimStart whitespace: "${message.trimStart()}"`); //removes whitespace from the beginning of the string
console.log(`trimEnd whitespace: "${message.trimEnd()}"`); //removes whitespace from the end of the string
const concatinatedMessage:string = message.concat("! Welcome to TypeScript.");
console.log(concatinatedMessage); //concatenates the string with another string

//concept of string immutability
let string1:string = "Hello";
let string2:string = string1;
string1 = "Hi";
console.log(string1); //Output: Hi
console.log(string2); //Output: Hello
console.log(string1.concat("Vicky")); //Output: HiVicky
console.log(string1); //Output: Hi (string1 remains unchanged due to immutability)

//Multi-line string using backticks
let multiLineString:string = `This is a multi-line string.
It can span multiple lines without the need for concatenation.
This is useful for creating formatted text or preserving whitespace.`;
console.log(multiLineString);