let i:number;

for(i = 1;i<10;i++){
    if(i==5){
        continue;
    }
    else if(i==8){
        break;
    }
    console.log(i);
}
console.log("*********************");

//Multiples of 5
let multiple:number=5;
let lastNumber=50;

for(let i=1;i<=lastNumber;i++){
    console.log(multiple*i);
}

//Print Prime Numbers between 1 and 50
for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}