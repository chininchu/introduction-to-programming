"use strict";

//************************************
// 2. Get Single and Multiple Elements
//************************************

// Get Single Element
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);

// Get Multiple Elements
const descriptionParagraphs = document.getElementsByClassName('description');
console.log(descriptionParagraphs);


//************************************
// 3.Creating and Modifying HTML elements
//************************************


// Create a new element
const newListItem = document.createElement('li');
newListItem.textContent = 'New list item!';

// Modify an existing element
mainTitle.textContent = "The DOM is Awesome!";

// Add the new element to the page
const myList = document.getElementById('my-list');
myList.appendChild(newListItem);


//************************************
// 4.Dynamically Adding Styles
//************************************


// Add a class to an element for styling
const changeTextButton = document.getElementById('change-text');
changeTextButton.classList.add('highlight');

//************************************
// 5.Understanding and Working with Events
//************************************


changeTextButton.addEventListener('click', function () {
    const firstParagraph = document.querySelector('.description');
    firstParagraph.textContent = 'The button was clicked!';
});
