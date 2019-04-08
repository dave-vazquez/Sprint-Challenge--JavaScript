// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param1, param2, cb) {
  console.log(cb(param1, param2));
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (num1, num2) => num1 + num2;

let multiply = (num1, num2) => num1 * num2;

let greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log('\nConsome callbacks:');
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.
console.log('\nClosure Example 1:');
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

/*
  Explanation: 

  Because an inner-function always has access to the outer-function's scope, even
  after the outer-function has returned/left the call stack. This is root principle
  of a closure. 

  Doesn't work in reverse though, outer-functions do _not_ have access to the
  inner-function's scope.

  Can be demonstrationed a bit more clearly if you returned the nestedFunction
  instead of just calling it as in:

*/
console.log('\nClosure Example 2:');

function outerFunction() {
  
  const internal = "Hello! I'm inside the closure of innerFunction! See for yourself:";

  return function innerFunction() {
    console.log(internal);
  };
}

let innerFunction = outerFunction();

innerFunction();

console.dir(innerFunction); // Look inside [[Scope]] to find a Closure Scope with 'internal'

/*
  I like Cam's definition of closures:

  closure = function + lexical scope

  I think it leaves out an important piece though, where the lexical scope _must_ be
  a function scope.

  Unless that's what "lexical scope" implies... not 100% sure.

  Take the following example:

*/
console.log('\nClosure Example 3:');

var globalVariable = 'globalVariable: I\'m still in the global scope! See for yourself:';

let logGlobalVar = () => {
  console.log(globalVariable);
}

logGlobalVar(); // I'm still in the global scope!

console.dir(logGlobalVar); // Look inside [[Scope]] to find a Global Scope with 'global Variable'

/*
  Something to note about the above:

  If I changed 'var globalVariable', to 'let globalVariable'...
  
  'globalVariable' would no longer be part of the Global Scope.

  It would actually be part of the Script Scope... I just learned this today.

  var's in the Global Scope are declared on the 'window' object.

  Where let's and const's are not. Truly strange......

*/







