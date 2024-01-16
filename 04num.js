const score = 400
 console.log(score);

 //object
const balance = new Number(100)
console.log( typeof balance);



console.log(balance.toString().length);

// two digit after decimal
console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); 4 digit in the nuber for precision

const hundreds = 1000000
// add comas to the number
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//round off
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// random number fom one to 10
console.log((Math.random()*10) + 1);

// random number fom one to 10 when number is a digit 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//////////////////////imp/////////////////////////////
console.log(Math.floor(Math.random() * (max - min + 1)) + min)