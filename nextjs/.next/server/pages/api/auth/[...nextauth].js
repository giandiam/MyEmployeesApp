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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , account , profile , email , credentials  }) {\n            //console.log(user, account, profile, email, credentials);\n            const isAllowedToSignIn = true;\n            if (isAllowedToSignIn) {\n                return true;\n            } else {\n                // Return false to display a default error message\n                return false;\n            // Or you can return a URL to redirect to:\n            // return '/unauthorized'\n            }\n        }\n    },\n    secret: process.env.SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ2tCO0FBRXZELGlFQUFlQSxxREFBUSxDQUFDLENBQUM7SUFDckJFLFNBQVMsRUFBRSxDQUFDO1FBQ1JELGlFQUFjLENBQUMsQ0FBQztZQUNaRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1lBQ3ZDQyxhQUFhLEVBQUUsQ0FBQztnQkFDWkMsTUFBTSxFQUFFLENBQUM7b0JBQ0xDLE1BQU0sRUFBRSxDQUFTO29CQUNqQkMsV0FBVyxFQUFFLENBQVM7b0JBQ3RCQyxhQUFhLEVBQUUsQ0FBTTtnQkFDekIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNGQyxNQUFNLEVBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLFdBQVcsRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMxRCxFQUEwRDtZQUMxRCxLQUFLLENBQUNDLGlCQUFpQixHQUFHLElBQUk7WUFDOUIsRUFBRSxFQUFFQSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSTtZQUNiLENBQUMsTUFBTSxDQUFDO2dCQUNOLEVBQWtEO2dCQUNsRCxNQUFNLENBQUMsS0FBSztZQUNaLEVBQTBDO1lBQzFDLEVBQXlCO1lBQzNCLENBQUM7UUFDSCxDQUFDO0lBQ1AsQ0FBQztJQUNEQyxNQUFNLEVBQUVsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLE1BQU07QUFDOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXllbXBsb3llZXNhcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsLCBjcmVkZW50aWFscyB9KSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzKTtcclxuICAgICAgICAgICAgY29uc3QgaXNBbGxvd2VkVG9TaWduSW4gPSB0cnVlXHJcbiAgICAgICAgICAgIGlmIChpc0FsbG93ZWRUb1NpZ25Jbikge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGRpc3BsYXkgYSBkZWZhdWx0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAvLyBPciB5b3UgY2FuIHJldHVybiBhIFVSTCB0byByZWRpcmVjdCB0bzpcclxuICAgICAgICAgICAgICAvLyByZXR1cm4gJy91bmF1dGhvcml6ZWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVFxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImNyZWRlbnRpYWxzIiwiaXNBbGxvd2VkVG9TaWduSW4iLCJzZWNyZXQiLCJTRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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