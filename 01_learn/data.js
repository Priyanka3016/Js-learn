//let is block scoped
//prefer not to use var because of block scope and functional scope

// console.table
//use "srtict"

//console.log(typeof undefined)->undefined
//typeof null ->object 
// string bollean number

//NaN is not a number when we do typecasting of the thing that cant be number then they will be NaN---> Number("Priyanka")-->NaN


// operatoe

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2**2);
console.log(2*2);


console.log("Hello "+ "People");


//string convert itself to number
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2);//122
console.log(1+2+"2");//32


// increament operator
// x++->  the increment operator increments and returns the value before incrementing.
//++x-->   increment operator increments and returns the value after incrementing.

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"