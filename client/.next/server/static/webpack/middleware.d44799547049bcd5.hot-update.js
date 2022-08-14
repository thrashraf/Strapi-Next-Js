"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n    const url = req.url;\n    console.log(\"lol\");\n    console.log(url);\n    if (cookie.jwt && url.includes(\"/login\")) {\n        console.log(\"hehe\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNKO0FBRWhDLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLE1BQU0sR0FBR0gscURBQVksRUFBRTtJQUM3QixNQUFNSSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0UsR0FBRztJQUVuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUVqQixJQUFJRCxNQUFNLENBQUNJLEdBQUcsSUFBSUgsR0FBRyxDQUFDSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeENILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU9QLDBEQUFpQixFQUFFLENBQUM7S0FDNUI7SUFFRCxPQUFPQSwwREFBaUIsRUFBRSxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxKSB7XG4gIGNvbnN0IGNvb2tpZSA9IHBhcnNlQ29va2llcygpO1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuXG4gIGNvbnNvbGUubG9nKCdsb2wnKTtcbiAgY29uc29sZS5sb2codXJsKTtcblxuICBpZiAoY29va2llLmp3dCAmJiB1cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XG4gICAgY29uc29sZS5sb2coJ2hlaGUnKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInBhcnNlQ29va2llcyIsIm1pZGRsZXdhcmUiLCJyZXEiLCJjb29raWUiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiand0IiwiaW5jbHVkZXMiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});