"use strict";

//TODO: Arrow Functions


/*Brief Overview: Introduce the concept of Arrow functions in JavaScript, a feature introduced in ES6 (ECMAScript 2015) as a new syntax for writing function expressions.
*/

// Traditional Function Expression
// const add = function(a, b) {
//     return a + b;
// };

// Arrow Function
// const add = (a, b) => a + b;


/*Concise Syntax: Explain how arrow functions allow for shorter function expressions.

Implicit Return: In cases of a single expression, {} and return are optional.*/

//Example
// const square = n => n * n;

//TODO: We will cover the concept of the this keyword when we talk about Objects

/*No Binding of this: Unlike traditional functions, arrow functions don't bind their own this. They inherit this from the parent scope at the time of definition.
Example and explanation of how this works differently in arrow functions.
Limitations: Mention where not to use arrow functions (like methods in objects if you need this to refer to the object).*/


const PersonsProfile = (name, age, school) => {
    return (`Name: ${name}, Age: ${age}, School: ${school}`);
};


console.log(PersonsProfile("Andrew", 20, "GSU"));


// PersonsProfile("andrew", 30, "GSU");



