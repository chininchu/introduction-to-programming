"use strict";
function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Data from a slow operation" };
        callback(data);
    }, 1000); // Simulate a 2-second delay
}

console.log("Starting...");
fetchData((data) => {
    console.log(data);
});
console.log("Finished!");
