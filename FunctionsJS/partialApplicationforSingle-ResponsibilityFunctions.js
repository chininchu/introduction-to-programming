"use strict";


//TODO: Partial Application for Single-Responsibility Functions

// Importance

/*Enhances Reusability: Partial application allows for the creation of more specific functions from more general ones, increasing reusability.

Encourages Single Responsibility: Functions can be designed to do one thing and do it well, aligning with the Single Responsibility Principle (SRP).


 */

// The goal of a function is to focus on a single task


// General Credit Score Evaluation Function

// First, define a general function that checks if the credit score meets the minimum required score for a loan:

function isEligibleForLoan(minCreditScore, creditScore) {
    return creditScore >= minCreditScore;
}


// Partial Application for Loan Eligibility

// Using partial application, you can create functions for specific loan types based on their minimum credit score requirements:


function createLoanEligibilityChecker(minCreditScore) {
    return function (creditScore) {
        return isEligibleForLoan(minCreditScore, creditScore);
    };
}

const isEligibleForPersonalLoan = createLoanEligibilityChecker(600);
const isEligibleForMortgage = createLoanEligibilityChecker(650);
const isEligibleForAutoLoan = createLoanEligibilityChecker(580);



console.log(isEligibleForPersonalLoan(500));
console.log(isEligibleForMortgage(300));
console.log(isEligibleForAutoLoan(700));
