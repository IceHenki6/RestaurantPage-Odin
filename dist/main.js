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

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = document.createElement('section');\ncontact.id = 'contact-container';\n\ncontact.innerHTML = `\n    <div id=\"contact-board\">\n        <h1>Where to find us</h1>\n        <div>\n            <ul class=\"contact-list\">\n                <li>St.Fake Avenue 4321</li>\n            </ul>\n        </div>  \n        <h1>Contact Us</h1>\n        <div>\n            <ul class=\"contact-list\">\n                <li>555 444 666</li>\n            </ul>\n        </div>\n        <div>\n            <ul class=\"contact-list\">\n                <li>cachobodegon@restaurant.com</li>\n            </ul>\n        </div>\n    </div>\n\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({contact});\n\n//# sourceURL=webpack://restaurantpage/./src/components/Contact.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = document.createElement('section');\nmenu.innerHTML = `\n    <div id=\"menu-container\">\n        <div id=\"menu-board\">\n            <h1>Menu</h1>\n\n            <div class=\"menu-card\">\n                <h2 class=\"meal-title\">Desayuno</h2>\n                <ul class=\"menu-list\">\n                    <li>Medialunas</li>\n                    <li>Croisants</li>\n                    <li>Pebete de jamon y queso</l1>\n                    <li>Cremona</l1>\n                </ul>\n            </div>\n\n\n            <div class=\"menu-card\">\n                <h2 class=\"meal-title\">Almuerzo</h2>\n                <ul class=\"menu-list\">\n                    <li>Milanesa a la Napolitana con papas fritas</li>\n                    <li>Fideos con tuco</li>\n                    <li>Bife de chorizo con papas fritas</l1>\n                    <li>Ravioles con salsa bolognesa</l1>\n                </ul>\n            </div>\n\n            <div class=\"menu-card\">\n                <h2 class=\"meal-title\">Cena</h2>\n                <ul class=\"menu-list\">\n                    <li>Pizza muzarella</li>\n                    <li>Pizza con </li>\n                    <li>Bife de chorizo con papas fritas</l1>\n                    <li>Ravioles con salsa bolognesa</l1>\n                </ul>\n            </div>\n        </div>\n    </div>\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({menu});\n\n//# sourceURL=webpack://restaurantpage/./src/components/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Menu.js */ \"./src/components/Menu.js\");\n/* harmony import */ var _components_Contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Contact.js */ \"./src/components/Contact.js\");\n/* harmony import */ var _images_restaurantimg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/restaurantimg.jpg */ \"./src/images/restaurantimg.jpg\");\n\n\n\nconst content = document.getElementById('content');\n\n//navbar\nconst navBar = document.createElement('nav');\nnavBar.classList.add('navbar');\nnavBar.innerHTML = `\n    <nav class=\"navbar\">\n    <ul>\n        <li class=\"navbar-item\"><a href='#' id=\"home\">Home</a></li>\n        <li class=\"navbar-item\"><a href='#' id=\"menu\">Menu</a></li>\n        <li class=\"navbar-item\"><a href='#' id=\"contact\">Contact</a></li>\n    </ul>\n    </nav>\n`;\n\n//homepage\nconst myHeroImg = new Image();\nmyHeroImg.src = _images_restaurantimg_jpg__WEBPACK_IMPORTED_MODULE_2__;\nconst homePage = document.createElement('div');\nhomePage.classList.add('home');\nhomePage.innerHTML = `\n    <div id=\"restaurant-title\">\n        <h1 id=\"restaurant-name\">Cacho's Bodegon</h1>\n        <h3 id=\"restaurant-description\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, porro!</h3>\n    </div>\n    <div id=\"restaurant-image\">\n        <img src = ${myHeroImg.src}  alt=\"\">\n    </div>\n`;\n\n\ncontent.appendChild(navBar);\ncontent.appendChild(homePage);\n\n\n//clearPage\nconst clearPage = ()=>{\n    content.innerHTML = '';\n    content.appendChild(navBar);\n}\n\ndocument.addEventListener('click', (event)=>{\n    if(event.target.id == 'home'){\n        clearPage();\n        content.appendChild(homePage);\n    }\n    else if(event.target.id == 'menu'){\n        clearPage();\n        content.appendChild(_components_Menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menu);\n    }\n    else if(event.target.id == 'contact'){\n        clearPage();\n        content.appendChild(_components_Contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contact);\n    }\n})\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/images/restaurantimg.jpg":
/*!**************************************!*\
  !*** ./src/images/restaurantimg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4714a268b87713937197.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/restaurantimg.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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