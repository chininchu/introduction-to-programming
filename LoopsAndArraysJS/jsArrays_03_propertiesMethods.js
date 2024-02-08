"use strict";

/*Useful Array Properties and Methods

Overview: JavaScript provides a rich set of properties and methods for working with arrays, enabling operations such as adding, removing, and slicing elements.*/

/*Property: length

The length property of an array returns the number of elements in the array. It's a handy way to determine the size of an array.*/

//Example
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length); // Outputs: 3


/*Methods: push(), pop(), shift(), unshift(), slice()

Arrays come with a variety of methods that make it easy to add, remove, and manipulate elements. There are many more built in methods that are chained with the array data type. */

// Push and Pop methods

fruits.push('Dragonfruit');
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Dragonfruit']

fruits.pop();
console.log(fruits); // ['Apple', 'Banana', 'Cherry']


// shift() / unshift(): Remove or add elements to the beginning of an array.

fruits.shift();
console.log(fruits); // ['Banana', 'Cherry']

fruits.unshift('Strawberry');
console.log(fruits); // ['Strawberry', 'Banana', 'Cherry']

// slice(): Returns a copy of a portion of an array.

const someFruits = fruits.slice(1, 2);
console.log(someFruits); // ['Banana']







