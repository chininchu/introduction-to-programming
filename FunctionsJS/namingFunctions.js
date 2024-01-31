"use strict";


//TODO: Introduction to Naming Functions in JavaScript

// Definition:

/*In JavaScript, functions can be named or anonymous. A named function explicitly has a name given to it, while an anonymous function does not. Naming functions is the practice of providing descriptive, meaningful names to functions to indicate what they do.
*/


// Best Practices for Naming Functions

/*Use Verb-Noun Phrases: Name functions starting with a verb followed by a noun to indicate actions the function performs, e.g., fetchUserData.

Be Descriptive but Concise: Choose names that are descriptive of what the function does, but avoid overly long names.

Use CamelCase: In JavaScript, the convention is to use camelCase for function names.*/


// Example

// Good
function calculateTotalPrice(quantity, price) {
    return quantity * price;
}

// Not so good
function calc(qty, prc) {
    return qty * prc;
}
