function clearContentExceptNavbar() {
    let navbarElement = document.querySelector("#content > ul");  // Get reference to the navbar ul
    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar
        content.removeChild(content.lastChild);
    }
}


function makeMenuPage(){
    clearContentExceptNavbar(); // Remove
let content = document.getElementById('content');

let sides = document.createElement('p');
sides.textContent = 'Fresh Honey Chips, Sandwich, and Fresh Cookies';
content.appendChild(sides);

}

export {makeMenuPage};