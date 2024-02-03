"use strict";

//TODO: Introduction to Closure in JavaScript

// Definition


/*A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables—a scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), access to the outer function's variables, and access to the global variables.*/


// Importance

/*Importance:

Data Encapsulation and Privacy: Closures allow for the creation of private variables that can only be accessed and modified by the inner function, providing a way to encapsulate and manage data.

Maintaining State in Async Operations: In asynchronous operations like callbacks and events, closures help in preserving the state across the asynchronous execution.*/

//TODO: We will take about Async operations later on.


// Basic Example


function outerFunction() {
    const age = 20;
    const height = 5.0;

    return () => {

        return `I am ${age} years old and my height is ${height}`;
    }
}

const functionValue = outerFunction();

console.log(functionValue());



// console.log(mainFunction()); // Call the function returned by outerFunction and log its return value


// return function innerFunction(innerVariable) {
//     console.log('Outer Variable: ' + outerVariable);
//     console.log('Inner Variable: ' + innerVariable);
//     console.log(naMe);
//     console.log(lastname);
//
// };


// const newFunction = outerFunction('outside');
// newFunction('inside');






