function addTwoNumbers1(number1, number2){

    console.log(number1 + number2);
}
function addTwoNumbers(number1, number2){

    return number1 + number2
}

const result = addTwoNumbers1(3, 5)
//here result will be undefined as function didnt return anything
//variable passed in the function are known as parameter
//and that passed in the function call are known as argument 



//if username is not passed as argument in the function call then undefined will got printed to avoide sometime devloper uses default value
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("piru"))


//rest operator and spread operator are same 
//rest operator -->multiple paas
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//here 2 value will not go in num 2 variable will be assigned to val1 and val2 respectively
// console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));