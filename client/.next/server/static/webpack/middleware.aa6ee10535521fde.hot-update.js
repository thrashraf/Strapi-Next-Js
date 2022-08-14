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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const url = req.url;\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(req);\n    const { origin  } = req.nextUrl;\n    console.log(cookies);\n    console.log(jwt, origin);\n    if (cookies && url.includes(\"/login\")) {\n        console.log(\"lol\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNiO0FBRXZCLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDQyxHQUFHO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0osa0RBQVcsQ0FBQ0UsR0FBRyxDQUFDO0lBQ2hDLE1BQU0sRUFBRUksTUFBTSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBTztJQUU5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBQztJQUN6QixJQUFJRixPQUFPLElBQUlELEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPViw4REFBcUIsQ0FBQyxDQUFDLEVBQUVPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBRUQsT0FBT1AsMERBQWlCLEVBQUUsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IG5vb2tpZXMgZnJvbSAnbm9va2llcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuICBjb25zdCBjb29raWVzID0gbm9va2llcy5nZXQocmVxKTtcbiAgY29uc3QgeyBvcmlnaW4gfSA9IHJlcS5uZXh0VXJsO1xuXG4gIGNvbnNvbGUubG9nKGNvb2tpZXMpO1xuICBjb25zb2xlLmxvZyhqd3QsIG9yaWdpbik7XG4gIGlmIChjb29raWVzICYmIHVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcbiAgICBjb25zb2xlLmxvZygnbG9sJyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChgJHtvcmlnaW59L2ApO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9va2llcyIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJjb29raWVzIiwiZ2V0Iiwib3JpZ2luIiwibmV4dFVybCIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJpbmNsdWRlcyIsInJlZGlyZWN0IiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});