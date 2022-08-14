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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(ctx) {\n    const url = ctx.url;\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx);\n    const { origin  } = ctx.nextUrl;\n    console.log(ctx);\n    if (cookies && url.includes(\"/login\")) {\n        console.log(\"lol\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNiO0FBRXZCLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDQyxHQUFHO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0osa0RBQVcsQ0FBQ0UsR0FBRyxDQUFDO0lBQ2hDLE1BQU0sRUFBRUksTUFBTSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBTztJQUU5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUlFLE9BQU8sSUFBSUQsR0FBRyxDQUFDTyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU9WLDhEQUFxQixDQUFDLENBQUMsRUFBRU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFFRCxPQUFPUCwwREFBaUIsRUFBRSxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUoY3R4KSB7XG4gIGNvbnN0IHVybCA9IGN0eC51cmw7XG4gIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjdHgpO1xuICBjb25zdCB7IG9yaWdpbiB9ID0gY3R4Lm5leHRVcmw7XG5cbiAgY29uc29sZS5sb2coY3R4KTtcbiAgaWYgKGNvb2tpZXMgJiYgdXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xuICAgIGNvbnNvbGUubG9nKCdsb2wnKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KGAke29yaWdpbn0vYCk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJub29raWVzIiwibWlkZGxld2FyZSIsImN0eCIsInVybCIsImNvb2tpZXMiLCJnZXQiLCJvcmlnaW4iLCJuZXh0VXJsIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicmVkaXJlY3QiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});