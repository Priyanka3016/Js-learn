
const mySym = Symbol("key1")
//singleton
const JsUser = {
    name: "piruu",
    "full name": "priyanka",
    [mySym]: "mykey1",//symbols key value should be in [] 
    age: 18,
    location: "saidpur",
    email: "prhh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//The dot access can't be used with symbol or keys value with space
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email = "prish@chatgpt.com"
Object.freeze(JsUser)
// changes will not propagate after freeze
JsUser.email = "hitesh@microsoft.com"//will not reflected
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// object literal
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//object in object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//object in object access
 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//empty is target other are source
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//spread
const obj3 = {...obj1, ...obj2}

//assign and soread operator
//array of object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// if object has this property or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "priyanka"
}

// course.courseInstructor  is leanthy
//so we can use below syntax instead of it

// this is called destructuring
const {courseInstructor: instructor} = course
 // function       const navbar=({comp})=>{}

// console.log(courseInstructor);
console.log(instructor);//instructor can be used instead of  course.courseInstructor


// json key value are always string
// {
//     "name": "hmanshu",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//


//array of objects
[
    {},
    {},
    {},
    {}
    ]
