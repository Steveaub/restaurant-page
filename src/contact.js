function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';  // Clear previous content

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const headline = document.createElement('h2');
    headline.textContent = "Contact Us";

    const phone = document.createElement('p');
    phone.textContent = "Phone: (123) 456-7890";

    const email = document.createElement('p');
    email.textContent = "Email: info@myrestaurant.com";

    contactDiv.appendChild(headline);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    content.appendChild(contactDiv);  // Add the contact content to #content
}

export default loadContact;
