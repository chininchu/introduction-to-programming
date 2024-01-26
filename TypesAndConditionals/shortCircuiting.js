"use strict";

//TODO: Shorten Conditionals with Short Circuiting


/*Use logical operators && and || for short-circuit evaluation in conditions.
Understand that && will stop at the first falsy value, and || will stop at the first truthy value.*/


let user = null;
let defaultUser = "Guest";

let currentUser = user || defaultUser; // "Guest"
console.log(currentUser);

// Using && for a conditional action

let isLoggedIn = true;


isLoggedIn && console.log("User is logged in.");


