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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const url = req.url;\n    const cookies = req.cookies;\n    const { origin  } = req.nextUrl;\n    console.log(cookies);\n    if (cookies && url.includes(\"/login\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNiO0FBRXZCLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDQyxHQUFHO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0YsR0FBRyxDQUFDRSxPQUFPO0lBQzNCLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztJQUU5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLElBQUlBLE9BQU8sSUFBSUQsR0FBRyxDQUFDTSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckMsT0FBT1YsOERBQXFCLENBQUMsQ0FBQyxFQUFFTSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QztJQUVELE9BQU9OLDBEQUFpQixFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgdXJsID0gcmVxLnVybDtcbiAgY29uc3QgY29va2llcyA9IHJlcS5jb29raWVzO1xuICBjb25zdCB7IG9yaWdpbiB9ID0gcmVxLm5leHRVcmw7XG5cbiAgY29uc29sZS5sb2coY29va2llcyk7XG4gIGlmIChjb29raWVzICYmIHVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KGAke29yaWdpbn0vYCk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJub29raWVzIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsImNvb2tpZXMiLCJvcmlnaW4iLCJuZXh0VXJsIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicmVkaXJlY3QiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});