function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';  // Clear previous content

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const headline = document.createElement('h2');
    headline.textContent = "Menu";

    const menuList = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.textContent = "Spaghetti Carbonara - $12";
    const item2 = document.createElement('li');
    item2.textContent = "Grilled Salmon - $18";
    const item3 = document.createElement('li');
    item3.textContent = "Caesar Salad - $8";

    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);

    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuList);

    content.appendChild(menuDiv);  // Add the menu content to #content
}

export default loadMenu;
