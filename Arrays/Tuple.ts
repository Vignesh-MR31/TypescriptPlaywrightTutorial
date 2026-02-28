/*
A tuple is a fixed length array where each element has specific type
It helps in storing multiple fields of different data type together
*/

//Tuple with two values string and number
let tupleSample:[string,number]=["Testing",10];
console.log(tupleSample);

//Tuple with multiple values
let sampleTwo:[string,number,boolean,number]=["Test",1,true,2];
console.log(sampleTwo);

//Tuple with for loops
let sampleThree:[number,number,number,number]=[100,200,300,400];

for(let i=0;i<sampleThree.length;i++){
    console.log(sampleThree[i]);
}

//for in (index based)
for(let i in sampleThree){
    console.log(i);
}

//for of (value based)
for(let sample of sampleThree){
    console.log(sample);
}

//Array of tuples
let tupleArray:[number,string][] = [[101,"Tester1"],[102,"Tester2"]];
console.log(tupleArray);

console.log(tupleArray[0]); //[ 101, 'Tester1' ]

let singleTuple:[number,string] = tupleArray[0];
console.log(singleTuple[0]); //101
console.log(singleTuple[1]); //Tester1