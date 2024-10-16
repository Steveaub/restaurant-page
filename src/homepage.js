import restaurantImage from './restaurant-image.png'; // Import the image

function loadHomePage() {
    const content = document.getElementById('content');
    
    // Clear any existing content inside the div (just in case)
    content.innerHTML = '';

    // Create a headline element
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to My Restaurant";

    // Create a paragraph element for the restaurant description
    const description = document.createElement('p');
    description.textContent = "We serve the best food in town! Come and enjoy a fantastic dining experience.";

    // Create an image element
    const image = document.createElement('img');
    image.src = restaurantImage; // Use the imported image
    image.alt = "A picture of our wonderful restaurant";

    // Append the elements to the content div
    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(image);
}

// Export the function so it can be imported elsewhere
export default loadHomePage;
