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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { password , identifier  } = req.body;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${\"http://localhost:1337\"}/api/auth/local`, {\n            identifier,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)({\n            res\n        }, \"jwt\", response.data.jwt, {\n            secure: \"development\" !== \"development\",\n            maxAge: 30 * 24 * 60 * 60,\n            path: \"/\"\n        });\n        res.status(200).send(response.data.user);\n    } catch (e) {\n        res.status(400).send(e.response.data.error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUVwQyxpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLFFBQVEsR0FBRUMsVUFBVSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUV6QyxJQUFJO1FBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1QLGlEQUFVLENBQy9CLENBQUMsRUFBRVMsdUJBQThCLENBQUMsZUFBZSxDQUFDLEVBQ2xEO1lBQ0VKLFVBQVU7WUFDVkQsUUFBUTtTQUNULENBQ0Y7UUFFREgsa0RBQVMsQ0FBQztZQUFFRSxHQUFHO1NBQUUsRUFBRSxLQUFLLEVBQUVJLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDM0NDLE1BQU0sRUFBRUwsYUFoQkQsS0FnQjBCLGFBQWE7WUFDOUNNLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ3pCQyxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUMsQ0FBQztRQUVIYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDWCxRQUFRLENBQUNLLElBQUksQ0FBQ08sSUFBSSxDQUFDLENBQUM7S0FDMUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7UUFDVmpCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNFLENBQUMsQ0FBQ2IsUUFBUSxDQUFDSyxJQUFJLENBQUNTLEtBQUssQ0FBQyxDQUFDO0tBQzdDO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdub29raWVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcGFzc3dvcmQsIGlkZW50aWZpZXIgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJVVJMfS9hcGkvYXV0aC9sb2NhbGAsXG4gICAgICB7XG4gICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZXRDb29raWUoeyByZXMgfSwgJ2p3dCcsIHJlc3BvbnNlLmRhdGEuand0LCB7XG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuICAgICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwic2V0Q29va2llIiwicmVxIiwicmVzIiwicGFzc3dvcmQiLCJpZGVudGlmaWVyIiwiYm9keSIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElVUkwiLCJkYXRhIiwiand0Iiwic2VjdXJlIiwibWF4QWdlIiwicGF0aCIsInN0YXR1cyIsInNlbmQiLCJ1c2VyIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();