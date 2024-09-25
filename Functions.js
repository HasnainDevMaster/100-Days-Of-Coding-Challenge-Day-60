// 100 Days Of Coding Challenge!

/* Day-60 Task
Read the following Articles and Code along with it:

Functions in JavaScript https://javascript.info/function-basics

Function Expressions in JavaScript https://javascript.info/function-expressions */

//---------------------------------------------------------------------------------

// Functions in JavaScript

/* Function Declaration
A function declaration defines a function with the function keyword,
followed by the name of the function, a list of parameters in parentheses,
and the function body enclosed in curly braces.*/

// Example:

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Blake")); // Output: Hello, Blake!

//-----------------------------------------------------------------------------------

/* Local Variables
Variables declared inside a function are local to that function and cannot be accessed from outside.*/

// Example:

function showMessage() {
  let message = "Hello, World!";
  console.log(message);
}
showMessage(); // Output: Hello, World!
console.log(message); // Error: message is not defined

//-------------------------------------------------------------------------------------------------------

/* Outer Variables
Functions can access variables defined outside of them, known as outer variables.*/

// Example:

let userName = "John";

function showMessage() {
  let message = `Hello, ${userName}`;
  console.log(message);
}
showMessage(); // Output: Hello, John

//---------------------------------------------------------------------------------------------------------

/* Parameters
Functions can accept parameters, which are values passed to the function when it is called.*/

// Example:

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3)); // Output: 8

//----------------------------------------------------------------------------------------------------------

/* Default Values
Parameters can have default values, which are used if no value is provided when the function is called.*/

// Example:

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!

//-----------------------------------------------------------------------------------------------------------

/*Returning a Value
Functions can return a value using the return statement.*/

// Example:

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // Output: 20

//------------------------------------------------------------------------------------------------------------

/* Naming a Function
Function names should be descriptive and follow camelCase convention.*/

// Example:

function calculateArea(radius) {
  return Math.PI * radius * radius;
}
console.log(calculateArea(3)); // Output: 28.274333882308138

//------------------------------------------------------------------------------------------------------------

/* Functions == Comments
Functions can be used to make code more readable and maintainable, similar to comments.*/

// Example:

function calculateDiscount(price, discount) {
  return price - (price * discount) / 100;
}
console.log(calculateDiscount(100, 10)); // Output: 90
