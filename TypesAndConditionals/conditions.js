"use strict";

//TODO: If, else if and else statements

/*Applications need the ability to do things based on different conditions. There are two ways of modifying flow control to achieve this:*/

const prefersDarkMode = false;
const prefersSolarizedMode = false;

if (prefersDarkMode) {
    document.body.style.background = 'black';
} else if (prefersSolarizedMode) {
    document.body.style.background = 'palegoldenrod';
} else {
    document.body.style.background = 'ghostwhite';
}


// if/else statements work according to the condition which is met first.


//TODO: Switch Statements;

const colorMode = "solarized";

switch (colorMode) {
    case "solarized":
        document.body.style.background = 'palegoldenrod';
        break;
    case 'dark':
        document.body.style.background = 'black';
        break;
    default:
        document.body.style.background = 'ghostwhite';
}


//In switch statements, if none of the cases match, the default case runs.


/*
Good Practices:

Use if, else if, and else statements for clarity.
Always use === for comparison to avoid unintended type coercion.
Use curly braces {} even for single-line statements to maintain readability.


Poor Practices:

Avoid using == for comparisons as it can lead to unexpected results due to type coercion.

Writing overly complex and nested conditional statements that are hard to read.


* */

