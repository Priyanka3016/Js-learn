// -->if ,else if, else like c++

// <, >, <=, >=, ==, !=, ===, !==,||,&&


//true
 if (2 =='2' ) {
    console.log("Execute");
 }
 //one line scope
 if(true)console.log('one line scope');

//switch
switch (month) {
    case "jan":
        console.log("January");
        break;

    default:
        console.log("default case match");
        break;
}


//----------->false and true

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
//empty array,empty object and function

// Nullish Coalescing Operator (??): null undefined
//it is used when we are requesting from database then it will print first value if not null or undefined 
//it will hold value other than null or undefined

let val1;
val1 = 5 ?? 10//5
val1 = null ?? 10//10
val1 = undefined ?? 15//15
val1 = null ?? 10 ?? 20//10
val=null??undefined;//undefined
val=undefined ?? null;//null
