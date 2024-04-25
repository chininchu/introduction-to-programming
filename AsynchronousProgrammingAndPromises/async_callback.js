"use strict";

/*
Asynchronous Programming: Code execution doesn't wait for long-running tasks to finish, allowing other tasks to run concurrently.
*/


function fetchData(callback) {
    setTimeout(() => {
        const data = {message: "Data from a slow operation"};
        callback(data);
    }, 3000); // Simulate a 2-second delay
}

console.log("Starting...");
fetchData((data) => {
    console.log(data);
});
console.log("Finished!");
