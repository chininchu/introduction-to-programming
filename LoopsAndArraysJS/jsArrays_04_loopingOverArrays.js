"use strict";

/*Loops

Loops offer a powerful way to iterate over an array, performing operations on each element, from simple tasks like logging values to complex data processing.


*/


// Example of a for loop in JavaScript


// for (let i = 0; i < 5; i++) {
//     console.log("The value of i is: " + i);
// }

/*let i = 0 initializes the loop variable i to 0.

i < 5 is the condition that the loop will continue to run as long as i is less than 5.

i++ is the increment statement, which increases the value of i by 1 in each iteration.

console.log("The value of i is: " + i) logs the current value of i to the console in each iteration.*/


// Example og a for loop in JS over an array


// Example of a for loop iterating over an array


// for (let i = 0; i < fruits.length; i+=2) {
//     console.log("Fruit at index " + i + " is: " + fruits[i]);
// }

const fruits1 = ["Apple", "Banana", "Orange", "Mango"];


function fruitList() {


    for (let i = 0; i < fruits.length; i++) {

        console.log(fruits[i]);


    }


}


fruitList();