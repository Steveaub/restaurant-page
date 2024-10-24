export default function loadHomePage() {
  const content = document.createElement('div');
  content.classList.add('homepage');

  // Hero Section
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero');
  
  const heroImage = document.createElement('img');
  heroImage.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjA5ODQ0OTk4&ixlib=rb-1.2.1&q=80&w=1080';
  heroImage.alt = 'Restaurant Ambiance';
  
  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');
  heroText.innerHTML = `
    <h2>Welcome to the Finest Dining Experience</h2>
    <p>Immerse yourself in a world of culinary perfection.</p>
    <button class="cta">Make a Reservation</button>
  `;

  heroSection.appendChild(heroImage);
  heroSection.appendChild(heroText);
  content.appendChild(heroSection);

  // Menu Teaser Section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-teaser');
  
  const menuImage = document.createElement('img');
  menuImage.src = 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGRpc2h8ZW58MHx8fHwxNjA5ODQ0OTk4&ixlib=rb-1.2.1&q=80&w=1080';
  menuImage.alt = 'Our Dishes';

  const menuText = document.createElement('div');
  menuText.classList.add('menu-text');
  menuText.innerHTML = `
    <h2>Explore Our Menu</h2>
    <p>Indulge in a variety of gourmet dishes, crafted by our world-renowned chefs.</p>
    <button class="cta">View the Menu</button>
  `;

  menuSection.appendChild(menuImage);
  menuSection.appendChild(menuText);
  content.appendChild(menuSection);

  // Team Highlight Section
  const teamSection = document.createElement('section');
  teamSection.classList.add('team-highlight');
  
  const teamImage = document.createElement('img');
  teamImage.src = 'https://images.unsplash.com/photo-1555992336-03a23c4a7626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxjaGVmfGVufDB8fHx8MTYwOTg0NDk5OA&ixlib=rb-1.2.1&q=80&w=1080';
  teamImage.alt = 'Our Chef';

  const teamText = document.createElement('div');
  teamText.classList.add('team-text');
  teamText.innerHTML = `
    <h2>Meet Our World-Class Chefs</h2>
    <p>Our team of culinary experts is dedicated to providing an unforgettable dining experience.</p>
  `;

  teamSection.appendChild(teamImage);
  teamSection.appendChild(teamText);
  content.appendChild(teamSection);

  return content;
}
