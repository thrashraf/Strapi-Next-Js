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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.url;\n    const { cookie , origin  } = req;\n    console.log(cookie);\n    if (cookie && url.includes(\"/login\")) {\n        next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNDLEdBQUc7SUFDbkIsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLE1BQU0sR0FBRSxHQUFHSCxHQUFHO0lBQzlCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7SUFFcEIsSUFBSUEsTUFBTSxJQUFJRCxHQUFHLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQ1IsOERBQXFCLENBQUMsQ0FBQyxFQUFFSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU9MLDBEQUFpQixFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxKSB7XG4gIGNvbnN0IHVybCA9IHJlcS51cmw7XG4gIGNvbnN0IHsgY29va2llLCBvcmlnaW4gfSA9IHJlcTtcbiAgY29uc29sZS5sb2coY29va2llKTtcblxuICBpZiAoY29va2llICYmIHVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcbiAgICBOZXh0UmVzcG9uc2UucmVkaXJlY3QoYCR7b3JpZ2lufS9gKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJjb29raWUiLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJyZWRpcmVjdCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});