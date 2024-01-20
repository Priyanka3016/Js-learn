// Immediately Invoked Function Expressions (IIFE)
//used to prevent from global scope pollution
// after iife add semicolon bcoz it dont know where to stop global context

(function db(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('priyanka')//parameter

//            js execution context
// global execution context --global env
// functional  execution context
// eval  execution context (property of  global object)


// 2 phases of js execution
// memory creation phases
// execution phase


// memory creation phase cycle 1
//  for variable- undefined
//  for function -definition

//inspect->source->snippet ->make urself a .js file and see call stack after applying breakpoint 