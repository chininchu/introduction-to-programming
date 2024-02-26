"use strict";

//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!


//---------- OVERVIEW AND INSTRUCTIONS ----------

// #JavaScript Array Methods
//  This is the coding assigment for the fifth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:

//  - Using Array Methods
//  - Understanding about iterative methods
//  - Learning about callbacks
//  - Creating Higher Order Functions
//  - Using existing Array Higher Order Functions (e.g. forEach(), map(), filter(), etc.)

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".


// ----- Practice JS array methods: forEach -----
//---------- QUESTION 1 ----------
// Create an variable called 'names' and assign it an array of people's names.  Write a function called 'printNames' that uses the forEach array method to log each name in an array to the console.  Remember, since you're using the console.log in the function, you'll just want to call your function and pass it the array of names when testing your code.

// EXAMPLE LOG:
//   NONE - your function uses the console.log, just call your function and pass it the array of names.
// EXAMPLE OUTPUT: (assuming your 'names' variable is the following array: ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"])
//   Juan Marcos
//   Aleksandra Ivanov
//   Zhang Wei
//   Bernice King

// PUT YOUR CODE HERE

const names = ["andrew", "mary", "susan", "john"];


const printNames = names.forEach((name, index) => {


    console.log(`${index} : ${name}`);


});

console.log(printNames);


//---------- QUESTION 2 ----------
// Create a variable called 'trees' and assign it an array of 3 objects.  Each object should have a 'type' property and a 'height' property.  You can use 'type' to describe the type of tree (ex. Dogwood, Maple, Oak, Elm, etc.) and give them any height.  Now write a function called 'logTreeType' that uses forEach to log the type of each tree object to the console.

// EXAMPLE LOG:
//   NONE - your function uses the console.log, just call your function and pass it the trees variable.
// EXAMPLE OUTPUT: (assuming your 'trees' variable is the following array of objects: [{ type: "oak", height: "30m"}, { type: "elm", height: "21m"}]
//    oak
//    elm

// PUT YOUR CODE HERE

const trees = [{type: "oak", height: "30m"}, {type: "elm", height: "21m"}];


const logTreeType = trees.forEach((tree, index) => {

    console.log(tree.type);


});

console.log(logTreeType);


//---------- QUESTION 3 ----------
// Create a variable called 'myNumbers' and assign it an array of numbers.  Now write a function caled 'totalPoints' that uses forEach to add up all the numbers in that array of numbers.

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: totalPoints(myNumbers)
// EXAMPLE OUTPUT: (if your array was [1,2,7,5,8])
//   23

// PUT YOUR CODE HERE


//---------- QUESTION 4 ----------
// Create a variable called 'myWords' and assign it an array of words.  Then write a function called 'buildSentence' that takes in an array of words and uses forEach to add the strings together. It should also add a space, " ", after each word.

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: buildSentence(myWords)
// EXAMPLE OUTPUT: (if your array was ["You","can","if","you","think","you","can","!"])
//   You can if you think you can !
// Note: you should have a space after the ! too

// PUT YOUR CODE HERE


//---------- QUESTION 5 ----------
// Create a variable called 'decimals' and assign it an array of decimal numbers.  Write a function called 'logPercentages' that takes an array of decimal numbers and uses forEach to log each one with the numbers formatted as percentages. That means:
//    Multiply by 100
//    Include the percent symbol (%) at the end of the string

// EXAMPLE LOG:
//   NONE - your function uses the console.log, just call your function and pass it the decimals variable.
// EXAMPLE OUTPUT: (if your array was [0.75,0.91,0.2,1.34])
//   75%
//   91%
//   20%
//   134%

// PUT YOUR CODE HERE


// ----- Practice JS Array Methods - map -----
// ---------- QUESTION 6 ----------
// Let's practice using the map array method.  Create a variable called 'startingNums' and assign it an array of numbers.  Then write a function called 'addThreeToAll' that uses map to add 3 to each number in an array of numbers.

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: addThreeToAll(startingNums)
// EXAMPLE OUTPUT: (if your array was [4,41,832,72,89])
//    [7,44,835,75,92]

// PUT YOUR CODE HERE


// ---------- QUESTION 7 ----------
// Create a variable called 'baseNums' and assign it an array of numbers.  Write a function called 'squareAll' that takes in an array of numbers, and uses map to return an array containing the squares of each of the numbers.  Remember, you can square a number by multiplying it by itself, or by using the exponent operator like so:
// let number = 4
// number * number // 16
// number ** 2 // 16
// Note that the caret operator ^ does NOT mean exponent in JavaScript

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: squareAll(baseNums)
// EXAMPLE OUTPUT: (if your array was [4,41,832,72,89]
//   [16, 1681, 692224, 5184, 7921]

// PUT YOUR CODE HERE


// ---------- QUESTION 8 ----------
// Write a function called 'allGreetings' that takes an array of names (strings) by using your 'names' variable from question 1. Return an array of greetings (strings). The greetings should each be "Hello, [name], nice to meet you!".  You might find it helpful to use template strings.

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: allGreetings(names)
// EXAMPLE OUTPUT: (if your array was ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"]
//   ["Hello, Juan Marcos, nice to meet you!", "Hello, Aleksandra Ivanov, nice to meet you!", "Hello, Zhang Wei, nice to meet you!", "Hello, Bernice King, nice to meet you!"]

// PUT YOUR CODE HERE


// ---------- QUESTION 9 ----------
// Create a variable called 'users' and assign it an array of objects.  See example on line 153 below.  Write a function called 'getUsernames' that takes in an array of user objects and uses map to return an array of just the usernames.

// EXAMPLE users variable:
// let users = [
//   {
//     "username": "juan.marcos",
//     "isAdmin": false,
//   },
//   {
//     "username": "aleksandra.ivanov",
//     "isAdmin": false
//   },
//   {
//     "username": "zhang.wei",
//     "isAdmin": false
//   },
//   {
//     "username": "bernice.king",
//     "isAdmin": true
//   }
// ]

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: getUsernames(users)
// EXAMPLE OUTPUT: (if your array of objects was identical to the above example)
//   ['juan.marcos', 'aleksandra.ivanov', 'zhang.wei', 'bernice.king']

// PUT YOUR CODE HERE


// ---------- QUESTION 10 ----------
// Write a function called 'pluck' that takes in an array of objects and a string representing a key as parameters, and uses the map method to return an array of the values at that key for each of the objects.  For example, if we used the users array from the last exercise, we could do pluck(users, 'username') to get the same results as the last question.  If any of the objects does not have a value at that key, the array should have undefined in that slot.  Hint: Using the square bracket notation, you can access a property of an object using a variable.

// EXAMPLE LOG:
//   NONE - calling your function should return the result, remember to call your function like so: pluck(users, 'isAdmin')
// EXAMPLE OUTPUT: (if your array was identical to the example in question 8 and you used 'isAdmin' as the string)
//   [false, false, false, true]

// PUT YOUR CODE HERE


// ----- Practice JS methods - filter -----
// ---------- QUESTION 11 ----------
// Write a function called 'evenNumbers' that takes an array as an argument and uses the filter method.  Return only the even numbers from the array of numbers.  Remember - you can find out if a number is even by using the % operator (modulus operator) like this:
//  number % 2 === 0   (gives a true boolean result, for even numbers)

// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: evenNumbers(array)
// EXAMPLE OUTPUT: (if your array was [4,41,832,72,89,120,431,505,70])
//    [4,832,72,120,70]
// If there are no even numbers in the array you make and use, return an empty array.

// PUT YOUR CODE HERE


// ---------- QUESTION 12 ----------
// Write a function called 'greaterThan100' that takes in an array of numbers and uses the filter method.  Return any items in the array that are greater than 100.

// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: greaterThan100(array)
// EXAMPLE OUTPUT: (if your array was [4,41,832,72,89,120,431,505,70])
//    [832,120,431,505]
// If there are no numbers greater than 100, return an empty array.

// PUT YOUR CODE HERE


// ---------- QUESTION 13 ----------
// Write a function called 'nonAdminUsers' that takes in an array of user objects.  The objects should have a username and isAdmin property each like they do in Question 9.  The function should use the filter method to return the users who are not admins.

// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: nonAdminUsers(users)
// EXAMPLE OUTPUT: (if your array of objects was identical to the example in Question 9)
//    [{ "username": "juan.marcos", "isAdmin": false }, { "username": "aleksandra.ivanov", "isAdmin": false }, { "username": "zhang.wei", "isAdmin": false }]

// PUT YOUR CODE HERE


// ---------- QUESTION 14 ----------
// Write a function called 'countAdminUsers' that uses filter and the length method on the result from filter.  The function should return the number of users that have 'isAdmin: true' as part of their object.

// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: countAdminUsers(users)
// EXAMPLE OUTPUT: (if your array of objects was identical to the example in Question 9)
//    1
// It should only count Bernice King since she is the only admin in that example.

// PUT YOUR CODE HERE


// ---------- QUESTION 15 ----------
// Write a function called 'shorterThanX' that takes two arguments: an array of strings and an integer.  Use the filter method to return all the strings in the array whose length is shorter than the integer provided as an argument.  If there's no strings in the array that are shorter than the number, return an empty array.

// Example array:
//    let strings = ["Four score and seven years ago", "our forefathers brought forth on this continent a new nation", "concieved in liberty", "and dedicated to the proposition that all men are created equal", "Now we are engaged in a great civil war", "testing whether that nation", "or any so conceived and so dedicated", "can long endure."]
// EXAMPLE LOG 1:
//    NONE - calling your function should return the result, remember to call your function like so: shorterThanX(strings, 20)
// EXAMPLE OUTPUT 1: (if using the example array above)
//    ["can long endure."]
// EXAMPLE LOG 2:
//    NONE - calling your function should return the result, remember to call your function like so: shorterThanX(strings, 30)
// EXAMPLE OUTPUT 2: (if using the example array above)
//    [ 'concieved in liberty',  'testing whether that nation',  'can long endure.' ]

// PUT YOUR CODE HERE


// ---------- QUESTION 16 ----------
// Write a function called 'onlyStrings' that takes an array that has different types of elements (numbers, booleans, strings, etc.) and uses the filter method to return an array of only the strings.

// Example array:
//    let manyTypes = [4, "4", "four score", 80, {age: 80}, ["nations"], {type: "free"}, "states"]
// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: onlyStrings(manyTypes)
// EXAMPLE OUTPUT:
//    ["4","four score", "states"]

// PUT YOUR CODE HERE


// ----- Practice JS methods - find -----
// ---------- QUESTION 17 ----------
// Write a function called 'firstOdd' that takes an array of numbers as an argument.  The function should use the find method to find the first odd number in an array.  Remember - you can find out if a number is odd using the % operator like so:
// number % 2 === 1  (gives a true boolean result, for odd numbers)
// If there are no odd numbers, return undefined.

// Example array:
//    let array = [4,41,832,72,89,120,431,505,70]
// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: firstOdd(array)
// EXAMPLE OUTPUT: (if using the example array above)
//    41

// PUT YOUR CODE HERE


// ---------- QUESTION 18 ----------
// Write a function called 'getAdministrator' that takes an array of objects as an argument (like the one used in question 9).  The function should use the find method to return the first object that has 'isAdmin: true' from the array of user objects.

// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: getAdministrator(users)
// EXAMPLE OUTPUT: (if using the example array from question 9)
//    { "username": "bernice.king", "isAdmin": true }

// PUT YOUR CODE HERE


// ---------- QUESTION 19 ----------
// Write a function called 'divisibleByTen' that takes an array of numbers as an argument.  The function should use the find method to return the first number that is a multiple of 10.  If there are no numbers divisible by 10, return undefined.

// Example array:
//    let array = [4,41,832,72,89,120,431,505,70]
// EXAMPLE LOG:
//    NONE - calling your function should return the result, remember to call your function like so: divisibleByTen(array)
// EXAMPLE OUTPUT: (if using the example array above)
//    120

// PUT YOUR CODE HERE


// ---------- QUESTION 20 ----------
// Write a function called 'divisibleByX' that takes two arguments: an array and an integer.  The function should use the find method to return the first number in the array that's divisible by the integer that was passed as an argument.  If there are no values that are divisible by the second argument, return undefined.

// Example array:
//    let numbers = [4,41,832,72,89,120,431,70]
// EXAMPLE LOG 1:
//    NONE - call your function like so: divisibleByX(numbers, 10)
// EXAMPLE OUTPUT 1: (if using the example array above)
//    120
// EXAMPLE LOG 2:
//    NONE - call your function like so: divisibleByX(numbers, 3)
// EXAMPLE OUTPUT 2: (if using the example array above)
//    72
// EXAMPLE LOG 3:
//    NONE - call your function like so: divisibleByX(numbers, 2)
// EXAMPLE OUTPUT 3: (if using the example array above)
//    4

// PUT YOUR CODE HERE


// ---------- QUESTION 21 ----------
// Write a function called 'startsWithLetter' that takes two arguments: an array of strings and a letter.  The function should use the find method to return the first string in the array that starts with the letter provided as the argument.  If there's no string in the array that starts with that letter, return undefined. The function should leave lowercase and uppercase letters alone.
// STRETCH GOAL: Throw an error "Letter must be a string of length 1" if the second argument is not a string, or if its length is more than 1.

// Example array:
//    let strings = ["Do you want to hear a joke?", "It's about a three-legged dog", "The dog walks into a bar", "The dog says, ", "\"I'm looking for the man who shot my paw\"", "Get it?"]
// EXAMPLE LOG 1:
//    NONE - call your function like so: startsWithTheLetter(strings, "T")
// EXAMPLE OUTPUT 1: (if using the example array above)
//    "The dog walks into a bar"
// EXAMPLE LOG 2:
//    NONE - call your function like so: startsWithTheLetter(strings, "I")
// EXAMPLE OUTPUT 2: (if using the example array above)
//    "It's about a three-legged dog"
// EXAMPLE LOG 3:
//    NONE - call your function like so: startsWithTheLetter(strings, "i")
// EXAMPLE OUTPUT 3: (if using the example array above)
//    undefined
// STRETCH GOAL EXAMPLE LOG:
//    NONE - call your function like so: startsWithTheLetter(strings, "dog")
// STRETCH GOAL EXAMPLE OUTPUT:
//    Error: Letter must be a string of length 1

// PUT YOUR CODE HERE















