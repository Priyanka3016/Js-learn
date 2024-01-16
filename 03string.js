const name = "Priyanka"
const Count = 50

 console.log(name + Count + " Value");
//this type is not recommended

//instead of concatenating the string ,use backtick ...this is called string interpolation

//string interpolation
console.log(`Hello my name is ${name} and my count is ${Count}`);

//object
const gameName = new String('priyanka-hc-com')

console.log(typeof(gameName));
console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//2 par konsa char
console.log(gameName.charAt(2));

//t konse index par h
console.log(gameName.indexOf('t'));


//start end index 0 to 3 last value is not included
const newString = gameName.substring(0, 4)
console.log(newString);

//it will start from end bcoz indexing start with negative number 
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


//trim will remove spaces

const newStringOne = "   himanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prinka.com/himanshu%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));