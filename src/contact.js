export default function loadContact() {
  const content = document.createElement('div');
  
  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  
  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/800x400.png?text=Contact+Us';
  image.alt = 'Contact';

  const description = document.createElement('p');
  description.textContent = 'For reservations and inquiries, please contact us at 555-1234 or email us at info@restaurant.com.';

  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(description);

  return content;
}
