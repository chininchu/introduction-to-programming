"use strict";

/*What is a Promise? (Object representing eventual success or failure)
Promise States: pending, fulfilled, rejected
.then(), .catch(), .finally() methods*/

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


