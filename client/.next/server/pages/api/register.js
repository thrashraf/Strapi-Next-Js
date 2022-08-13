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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
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

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { username , password , email  } = req.body;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${\"http://localhost:1337\"}/api/auth/local/register`, {\n            username,\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)({\n            res\n        }, \"jwt\", response.data.jwt, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            maxAge: 30 * 24 * 60 * 60,\n            path: \"/\"\n        });\n        console.log(response.data.user);\n        res.status(200).end();\n    } catch (e) {\n        res.status(400).send(e.response.data.error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUVwQyxpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBRTlDLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTVIsaURBQVUsQ0FDL0IsQ0FBQyxFQUFFVSx1QkFBOEIsQ0FBQyx3QkFBd0IsQ0FBQyxFQUMzRDtZQUNFTixRQUFRO1lBQ1JFLEtBQUs7WUFDTEQsUUFBUTtTQUNULENBQ0Y7UUFFREosa0RBQVMsQ0FBQztZQUFFRSxHQUFHO1NBQUUsRUFBRSxLQUFLLEVBQUVLLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDM0NDLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLE1BQU0sRUFBRU4sYUFsQkQsS0FrQjBCLGFBQWE7WUFDOUNPLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ3pCQyxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUMsQ0FBQztRQUVIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osUUFBUSxDQUFDSyxJQUFJLENBQUNRLElBQUksQ0FBQyxDQUFDO1FBRWhDbEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUN2QixDQUFDLE9BQU9DLENBQUMsRUFBRTtRQUNWckIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUNELENBQUMsQ0FBQ2hCLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDYSxLQUFLLENBQUMsQ0FBQztLQUM3QztDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJVVJMfS9hcGkvYXV0aC9sb2NhbC9yZWdpc3RlcmAsXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldENvb2tpZSh7IHJlcyB9LCAnand0JywgcmVzcG9uc2UuZGF0YS5qd3QsIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnVzZXIpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZS5yZXNwb25zZS5kYXRhLmVycm9yKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInNldENvb2tpZSIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsImJvZHkiLCJyZXNwb25zZSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJVVJMIiwiZGF0YSIsImp3dCIsImh0dHBPbmx5Iiwic2VjdXJlIiwibWF4QWdlIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwic3RhdHVzIiwiZW5kIiwiZSIsInNlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();