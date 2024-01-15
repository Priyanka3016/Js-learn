//primitive and non primitive data types
//based on the basis of how to store data and how to access it

//primitive seven data type:- stack 
// 1)string 
// 2)number
// 3)boolean
// 4)null 
// 5)undefined
// 6)Symbol
// 7)bigint

// Reference (Non primitive) heap
// 1)Array 
// 2)object
// 3)function


//array
const hero=["spider","iron","shakti"];

//object
const student={
  id:23,
  name:"piru " ,
  course:"IT" ,
}

//function
const myfunc= function()
{
  console.log("hi");
}
// arrow func
// const area=()=>
//   {
//   }
hello = () => {
  return "Hello World!";
}

let ytchannel="learnwithus"
let aname=ytchannel;
aname="hi";
                 //imp
//here only aname will change not the ytname
//and in the case of object referece created so value will change in both variables they both are stored in heap
// and pointing to same memory location



