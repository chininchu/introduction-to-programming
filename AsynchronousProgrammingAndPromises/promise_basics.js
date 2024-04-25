"use strict";

/*Promise: A JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation.
Promise States:
Pending: The initial state of a Promise before it resolves or rejects.
Fulfilled: The Promise has successfully completed, and the .then() callback will be called with the result.
Rejected: Something went wrong, and the .catch() callback will be called with an error.
.then(): A method on Promises used to schedule a callback to be executed when the Promise is fulfilled.
.catch(): A method on Promises used to schedule a callback to be executed when the Promise is rejected.
.finally(): A method on Promises used to schedule a callback that executes regardless of whether the Promise was fulfilled or rejected.*/


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Success!");
        } else {
            reject(new Error("Something went wrong"));
        }
    }, 1500);
});

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise completed"));



