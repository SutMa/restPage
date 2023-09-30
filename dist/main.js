/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeContactPage: () => (/* binding */ makeContactPage)\n/* harmony export */ });\nfunction clearContentExceptNavbar() {\n    let navbarElement = document.querySelector(\"#content > ul\");  // Get reference to the navbar ul\n    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar\n        content.removeChild(content.lastChild);\n    }\n}\n\n\nfunction makeContactPage(){\n    clearContentExceptNavbar(); // remove\n    let content = document.getElementById(\"content\");\n\n    let contact = document.createElement(\"p\");\n    contact.textContent = \"You can get in touch with us here: 225-555-5555\";\n\n    content.appendChild(contact);\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction clearContentExceptNavbar() {\n    let navbarElement = document.querySelector(\"#content > ul\");  // Get reference to the navbar ul\n    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar\n        content.removeChild(content.lastChild);\n    }\n}\n\n\n\nfunction loadHomePage(){\n    clearContentExceptNavbar(); // Remove\n    \n    let content = document.getElementById('content');\n\n    let header = document.createElement('h1');\n    header.textContent = 'Welcome to Honey Shopp';\n\n    content.appendChild(header);\n\n    let about = document.createElement('p');\n    about.textContent = 'We serve the best honey food in town. Enjoy your visit and great vies';\n    content.appendChild(about);\n\n    let hours = document.createElement('p');\n    hours.textContent = 'We are open 8am - 5pm Monday to Friday';\n    content.appendChild(hours);\n\n    let location = document.createElement('p');\n    location.textContent = 'You can find us on 123 Seasse Street';\n    content.appendChild(location);\n    content.style.textAlign = 'center';\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet content = document.getElementById('content'); // assuming you've changed the div ID to 'content'\nlet navbar = document.createElement(\"ul\");\n\nnavbar.innerHTML = \"<li id='home'>Home</li> <li id='menu'>Menu</li> <li id='navbar-contact'>Contact</li>\"; // changed the ID of the 'contact' li\nnavbar.style.display = \"flex\";\nnavbar.style.listStyle = \"none\";\nnavbar.style.justifyContent = \"space-evenly\";\n\ncontent.appendChild(navbar);\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n\ndocument.getElementById(\"home\").addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage);\ndocument.getElementById(\"menu\").addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.makeMenuPage);\ndocument.getElementById(\"navbar-contact\").addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__.makeContactPage); // updated to the new ID\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMenuPage: () => (/* binding */ makeMenuPage)\n/* harmony export */ });\nfunction clearContentExceptNavbar() {\n    let navbarElement = document.querySelector(\"#content > ul\");  // Get reference to the navbar ul\n    while (content.lastChild !== navbarElement) {  // Keep removing the last child until we're left with only the navbar\n        content.removeChild(content.lastChild);\n    }\n}\n\n\nfunction makeMenuPage(){\n    clearContentExceptNavbar(); // Remove\nlet content = document.getElementById('content');\n\nlet sides = document.createElement('p');\nsides.textContent = 'Fresh Honey Chips, Sandwich, and Fresh Cookies';\ncontent.appendChild(sides);\n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;