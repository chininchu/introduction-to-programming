"use strict";


/*Synchronous Programming: Code execution happens in a sequential manner, one task completing before the next begins.*/

function slowOperation() {
    // Simulate a time-consuming task
    for (let i = 0; i < 5000000000; i++) {
    }
    return "Result after long delay";
}

console.log("Starting...");
const result = slowOperation();
console.log(result);
console.log("Finished!");




