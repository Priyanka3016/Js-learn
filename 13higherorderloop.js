//map
// The Map object holds key-value pairs and remembers the original insertion order of the keys
//unique key value


// A Map's keys can be any value (including functions, objects, or any primitive).	The keys of an Object must be either a String or a Symbol.

const map = new Map()
map.set('IN', "India")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// for of not in object
// for in not in map

//for in loop in object and array

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop will have callback function,The callback function will not have any name
coding.forEach((num)=>{
    console.log(num);
})


function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)
