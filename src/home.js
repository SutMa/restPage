function clearContentExceptNavbar() {
    let navbarElement = document.querySelector("#content > ul");  // Get reference to the navbar ul
    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar
        content.removeChild(content.lastChild);
    }
}



function loadHomePage(){
    clearContentExceptNavbar(); // Remove
    
    let content = document.getElementById('content');

    let header = document.createElement('h1');
    header.textContent = 'Welcome to Honey Shopp';

    content.appendChild(header);

    let about = document.createElement('p');
    about.textContent = 'We serve the best honey food in town. Enjoy your visit and great vies';
    content.appendChild(about);

    let hours = document.createElement('p');
    hours.textContent = 'We are open 8am - 5pm Monday to Friday';
    content.appendChild(hours);

    let location = document.createElement('p');
    location.textContent = 'You can find us on 123 Seasse Street';
    content.appendChild(location);
    content.style.textAlign = 'center';

}

export { loadHomePage };
