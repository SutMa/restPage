import { loadHomePage } from "./home";
import { makeMenuPage } from "./menu";
import { makeContactPage } from "./contact";

let content = document.getElementById('content'); // assuming you've changed the div ID to 'content'
let navbar = document.createElement("ul");

navbar.innerHTML = "<li id='home'>Home</li> <li id='menu'>Menu</li> <li id='navbar-contact'>Contact</li>"; // changed the ID of the 'contact' li
navbar.style.display = "flex";
navbar.style.listStyle = "none";
navbar.style.justifyContent = "space-evenly";

content.appendChild(navbar);
loadHomePage();

document.getElementById("home").addEventListener("click", loadHomePage);
document.getElementById("menu").addEventListener("click", makeMenuPage);
document.getElementById("navbar-contact").addEventListener("click", makeContactPage); // updated to the new ID


