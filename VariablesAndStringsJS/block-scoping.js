"use strict";


//TODO: Importance of Block Scoping

/*Variables with let and const are scoped to the nearest enclosing block.
*/
//
// // Example
//
//
// if (true) {
//     let blockScopedLet = 'I am block scoped with let!';
//     const blockScopedConst = 'I am block scoped with const!';
//     console.log(blockScopedLet);   // Output: I am block scoped with let!
//     console.log(blockScopedConst); // Output: I am block scoped with const!
// }
//
// // Outside of the if block
// console.log(blockScopedLet);   // ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined


/*Advantages of Block Scoping

Prevents variables from being accessed outside their intended scope.
Reduces the likelihood of errors due to variable scope.*/




