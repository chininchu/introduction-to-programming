"use strict";

// Get Single Element
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);

// Get Multiple Elements
const descriptionParagraphs = document.getElementsByClassName('description');
console.log(descriptionParagraphs);


// Create a new element
const newListItem = document.createElement('li');
newListItem.textContent = 'New list item!';

// Modify an existing element
mainTitle.textContent = "The DOM is Awesome!";

// Add the new element to the page
const myList = document.getElementById('my-list');
myList.appendChild(newListItem);
