"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }), \n    ],\n    // callbacks: {\n    //     async signIn() {\n    //         //console.log(user, account, profile, email, credentials);\n    //         const isAllowedToSignIn = true\n    //         if (isAllowedToSignIn) {\n    //           return true\n    //         } else {\n    //           // Return false to display a default error message\n    //           return false\n    //           // Or you can return a URL to redirect to:\n    //           // return '/unauthorized'\n    //         }\n    //       }\n    // },\n    secret: process.env.SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ2tCO0FBRXZELGlFQUFlQSxxREFBUSxDQUFDLENBQUM7SUFDckJFLFNBQVMsRUFBRSxDQUFDO1FBQ1JELGlFQUFjLENBQUMsQ0FBQztZQUNaRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1lBQ3ZDQyxhQUFhLEVBQUUsQ0FBQztnQkFDWkMsTUFBTSxFQUFFLENBQUM7b0JBQ0xDLE1BQU0sRUFBRSxDQUFTO29CQUNqQkMsV0FBVyxFQUFFLENBQVM7b0JBQ3RCQyxhQUFhLEVBQUUsQ0FBTTtnQkFDekIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELEVBQWU7SUFDZixFQUF1QjtJQUN2QixFQUFxRTtJQUNyRSxFQUF5QztJQUN6QyxFQUFtQztJQUNuQyxFQUF3QjtJQUN4QixFQUFtQjtJQUNuQixFQUErRDtJQUMvRCxFQUF5QjtJQUN6QixFQUF1RDtJQUN2RCxFQUFzQztJQUN0QyxFQUFZO0lBQ1osRUFBVTtJQUNWLEVBQUs7SUFDTEMsTUFBTSxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsTUFBTTtBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWVtcGxveWVlc2FwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgLy8gY2FsbGJhY2tzOiB7XHJcbiAgICAvLyAgICAgYXN5bmMgc2lnbkluKCkge1xyXG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsLCBjcmVkZW50aWFscyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGlzQWxsb3dlZFRvU2lnbkluID0gdHJ1ZVxyXG4gICAgLy8gICAgICAgICBpZiAoaXNBbGxvd2VkVG9TaWduSW4pIHtcclxuICAgIC8vICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgIC8vIFJldHVybiBmYWxzZSB0byBkaXNwbGF5IGEgZGVmYXVsdCBlcnJvciBtZXNzYWdlXHJcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyAgICAgICAgICAgLy8gT3IgeW91IGNhbiByZXR1cm4gYSBVUkwgdG8gcmVkaXJlY3QgdG86XHJcbiAgICAvLyAgICAgICAgICAgLy8gcmV0dXJuICcvdW5hdXRob3JpemVkJ1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyB9LFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVRcclxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwic2VjcmV0IiwiU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();