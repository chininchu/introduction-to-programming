"use strict";


/*There are 2 ways to convert data from one type to another in JS:
Explicit type conversion, where we tell JS that we want to change the data types e.g. String().

Implicit (automatic) type conversion (coercion), in which JS changes data types automatically.*/


console.log("10" + 20);

/*All data in JS can be divided into 2 categories:

truthy
falsy

*/



/*Falsy values are:

//TODO:PLEASE MEMORIZE THIS LIST!!

false

0

' '

null

undefined


NaN.


All other values are truthy.

When working with falsy values, remember:

    Avoid direct comparisons in conditionals.

    Use triple equals === (strict equals operator) - to prevent type conversion.

    Convert to real Boolean values where needed.*/