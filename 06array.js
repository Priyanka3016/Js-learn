
const myArr = [0, 1, 2, 3, 4, 5]

//js's array can be of mix type it implies data types of elements of array can be different.
//example
const myHeors = ["shaktiman", "naagraj",1]

//array from new keyword
const myArr2 = new Array(1, 2, 3, 4)

//0 based indexing
console.log(myArr[1]);

/////Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

//push in starting
myArr.unshift(9)
//pop from starting
myArr.shift()

//present or not
console.log(myArr.includes(9));

//index of the element ..it gives first index in case of duplicates
console.log(myArr.indexOf(3));

// convert array to string
const newArr = myArr.join()

console.log(myArr);

console.log( typeof newArr);//string


// slice, splice

//--->imp

//slice dont includes range like myn1 will have 1 and 2
//whereas
//splice includes last range also 1 ,2 and 3 and it 
//will change the initial array also it will remove splice 
// array from the initial

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//--->array in array ,dc_heros act as single element
marvel_heros.push(dc_heros)
console.log(marvel_heros[3][1]);

//concat will return new array with all elements of both the arrays
const allHeros = marvel_heros.concat(dc_heros)

//-->it will spread array concat and spread operator gives te same output
//in case of conccatenate we can combine 2 array only( ...) but by spread operator we can combine many array as singe wlwmwnt
const all_new_heros = [...marvel_heros, ...dc_heros]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//it will return single array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Priyanka"));//false
console.log(Array.from("Priyanka"))//convert string to array
console.log(Array.from({name: "Priyanka"})) // will give empty array as it is not mention array from what? from key or value

let score1 = 100
let score2 = 200
let score3 = 300

//
console.log(Array.of(score1, score2, score3));
//array to string arr.join()
//string to array Array.from("Piru")