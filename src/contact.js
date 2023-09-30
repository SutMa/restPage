function clearContentExceptNavbar() {
    let navbarElement = document.querySelector("#content > ul");  // Get reference to the navbar ul
    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar
        content.removeChild(content.lastChild);
    }
}


function makeContactPage(){
    clearContentExceptNavbar(); // remove
    let content = document.getElementById("content");

    let contact = document.createElement("p");
    contact.textContent = "You can get in touch with us here: 225-555-5555";

    content.appendChild(contact);
}

export {makeContactPage};