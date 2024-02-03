"use strict";

//TODO: Why We need Functions


/*Code Reusability
Avoiding repetition, promoting code reuse.
Modularity
Breaking down complex problems into smaller, manageable parts.
Maintainability
Easier to read, update, and maintain code.
Scalability
Functions make it easier to scale and manage larger codebases.
Example Code:
Show a comparison of code with and without functions.
Real-World Analogy
Relate functions to real-world scenarios (like a chef using recipes).
Conclusion and Practice Assignment
Refactor a block of repetitive code into a function.*/

// Scenario Without Functions

// Calculating area of a rectangle
// let length1 = 10;
// let width1 = 5;
// let areaRectangle = length1 * width1;
// console.log("Area of the rectangle: " + areaRectangle);

// Calculating area of a circle
// let radius1 = 7;
// let areaCircle = 3.14 * radius1 * radius1;
// console.log("Area of the circle: " + areaCircle);

// // Later, calculating area for another rectangle
// let length2 = 6;
// let width2 = 3;
// let areaRectangle2 = length2 * width2;
// console.log("Area of the second rectangle: " + areaRectangle2);


// Scenario With Functions


function calculateRectangleArea(length, width) {
    return length * width;
}

calculateRectangleArea(10,15);


// console.log(calculateRectangleArea(10,15));

// function calculateCircleArea(radius) {
//     return 3.14 * radius * radius;
// }

// Calculating area of a rectangle
// let areaRectangle = calculateRectangleArea(10, 5);
// console.log("Area of the rectangle: " + areaRectangle);

// Calculating area of a circle
// let areaCircle = calculateCircleArea(7);
// console.log("Area of the circle: " + areaCircle);

// Calculating area for another rectangle
// let areaRectangle2 = calculateRectangleArea(6, 3);
// console.log("Area of the second rectangle: " + areaRectangle2);

// ... Easily calculate more areas with the same functions



// Without Code Resuability

// Logging a message in one part of the application
// console.log("User logged in at " + new Date());
//
// // Later in the code, logging another message
// console.log("Data updated at " + new Date());

// ... Repeating similar code throughout the application


// With Code Reusability

// function logMessage(action) {
//     console.log(action + " at " + new Date());
// }

// Using the function throughout the application
// logMessage("User logged in");
// logMessage("Data updated");
//
// logMessage("Error message happened at");


// ... Easily log more actions



