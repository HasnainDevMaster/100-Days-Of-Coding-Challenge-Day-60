// 100 Days Of Coding Challenge!

/* Day-60 Task
Read the following Articles and Code along with it:

Functions in JavaScript https://javascript.info/function-basics

Function Expressions in JavaScript https://javascript.info/function-expressions */

//---------------------------------------------------------------------------------

// Function Expressions in JavaScript

/*Function is a Value
In JavaScript, functions are first-class citizens, meaning they can be assigned to variables,
passed as arguments, and returned from other functions.*/

// Example:

let greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob")); // Output: Hello, Bob!

//-----------------------------------------------------------------------------------------------

/* Callback Functions
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function.*/

// Example:

function processUserInput(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(function (name) {
  console.log(`Hello, ${name}!`);
});

//--------------------------------------------------------------------------------------------------

/* Function Expression vs Function Declaration
The main difference is that function declarations are hoisted to the top of their scope,
while function expressions are not.*/

// Example:

// Function Declaration
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Output: Hello!

// Function Expression
let sayGoodbye = function () {
  console.log("Goodbye!");
};
sayGoodbye(); // Output: Goodbye!
