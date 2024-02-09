"use strict";

/*Useful Array Properties and Methods

Overview: JavaScript provides a rich set of properties and methods for working with arrays, enabling operations such as adding, removing, and slicing elements.*/

/*Property: length

The length property of an array returns the number of elements in the array. It's a handy way to determine the size of an array.*/

//Example
const fruits = ['Apple', 'Banana', 'Cherry', 'Pear'];

// console.log(fruits[2]);

// console.log(fruits.length); // Outputs: 3


/*Methods: push(), pop(), shift(), unshift(), slice(), some(), every()

Arrays come with a variety of methods that make it easy to add, remove, and manipulate elements. There are many more built in methods that are chained with the array data type. */

// Push and Pop methods

fruits.push('Dragonfruit');
// console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Dragonfruit']

fruits.pop();
// console.log(fruits); // ['Apple', 'Banana', 'Cherry']


// shift() / unshift(): Remove or add elements to the beginning of an array.

// fruits.shift();
// console.log(fruits); // ['Banana', 'Cherry']

// fruits.unshift('Strawberry');
// console.log(fruits); // ['Strawberry', 'Banana', 'Cherry']

// slice(): Returns a copy of a portion of an array.


// const someFruits = fruits.slice(1, 3);
//
//
//
//
//
//
// console.log(someFruits); // ['Banana']


// The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value (true or false).


// Syntax:  arr.some(callback(element[, index[, array]])[, thisArg])


// Let's check if atleast one of these numbers in this array are even numbers.


const listOfNum = [-1, 2, 3, 3, 5, 7];


const evenNum = listOfNum.some((number) => {

    // return number % 2 === 0;

    if (number % 2 === 0) {

        console.log(`${number} this is an even number`);

    } else {
        console.log(`${number} this is an odd number`)

    }


});


// The every method tests whether all elements in the array pass the test implemented by the provided function. Like some, it returns a Boolean value.

// Syntax: arr.every(callback(element[, index[, array]])[, thisArg])

// Let's check if all the numbers are positive


const posNum = listOfNum.every((number) => {

    return number > 0;


});


console.log(posNum);













