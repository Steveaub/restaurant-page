
import './style.css';
console.log('Hello from the Restaurant Page!');

import loadHomePage from './homepage';
import loadMenu from './menu';
import loadContact from './contact';


function init() {
  const content = document.getElementById('content');

  // Initially load the home page
  content.appendChild(loadHomePage());

  // Set up event listeners for menu buttons (you can create the buttons later)
  document.getElementById('home-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadHomePage());
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadMenu());
  });

  document.getElementById('contact-btn').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(loadContact());
  });
}

init();
