console.log("Hello, Restaurant Page!");

// Import the homepage, menu, and contact functions
import loadHomePage from './homepage';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


// Call the function to load the homepage content when the page is loaded
loadHomePage();

// Add event listeners for tab switching
function addTabSwitching() {
    const homeButton = document.getElementById('home-btn');
    const menuButton = document.getElementById('menu-btn');
    const contactButton = document.getElementById('contact-btn');

    homeButton.addEventListener('click', () => {
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        loadMenu();
    });

    contactButton.addEventListener('click', () => {
        loadContact();
    });
}

// Initialize the tab switching functionality
addTabSwitching();
