"use strict";

//TODO LECTURE 1: FUNCTIONS IN JAVASCRIPT

/*What are Functions?
Definition: Blocks of code designed to perform a particular task.
Functions as a fundamental building block in JavaScript.
Syntax and Creating Functions
Function declaration: function myFunction() { // code to be executed }
Function expression: const myFunction = function() { // code to be executed };
Arrow functions: const myFunction = () => { // code to be executed };
Calling Functions
How to invoke or call a function: myFunction();
Parameters and Arguments
Defining functions with parameters.
Passing arguments to functions.
Return Statement
Using return to get output from a function.
*/

// Example Code

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
