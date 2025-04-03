// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'You Changed the Title!';
});

// Modify CSS styles via JavaScript
document.getElementById('toggle-style-btn').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.classList.toggle('highlight');
});

// Add an element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph.';
    dynamicContent.appendChild(newElement);
});

// Remove an element when a button is clicked
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent.lastChild) {
        dynamicContent.removeChild(dynamicContent.lastChild);
    }
});