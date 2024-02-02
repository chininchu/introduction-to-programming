"use strict";


// TODO: Introduction to Default Parameters in JavaScript

//Definition:

/*Default parameters allow functions to be called with fewer arguments than they are defined to accept. If one or more arguments are omitted or undefined when the function is called, the default parameters provide fallback values, ensuring the function can execute without errors due to missing arguments.*/

// Importance:


/*Simplifying Function Calls: Default parameters reduce the need for checking missing arguments within functions, making function calls cleaner and simpler.

Avoiding Undefined Values: Default parameters help avoid issues arising from undefined values, ensuring that functions always have a valid state to work with.
 */


// Basic Example:

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

// greet(); // Output: Hello, Guest!
// greet('John'); // Output: Hello, John!


// Multiple Default Parameters


function createProfile(name, age = 30, country = 'USA') {
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

createProfile('Sarah'); // Output: Name: Sarah, Age: 30, Country: USA
createProfile('John', 28); // Output: Name: John, Age: 28, Country: USA


