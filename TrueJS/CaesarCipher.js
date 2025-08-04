// Select an element by ID
const element = document.getElementById('myElement');

// Change the text content
element.textContent = 'Hello, DOM!';

// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';

// Add the new element to the body
document.body.appendChild(newDiv);

// Remove an element
element.remove();