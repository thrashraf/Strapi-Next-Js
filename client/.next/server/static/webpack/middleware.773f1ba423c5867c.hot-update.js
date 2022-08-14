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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.url;\n    const cookies = req.cookies.get(\"jwt\");\n    const { origin  } = req.nextUrl;\n    console.log(cookies);\n    if (cookies && url.includes(\"/login\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNDLEdBQUc7SUFDbkIsTUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUN0QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHSixHQUFHLENBQUNLLE9BQU87SUFFOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQztJQUNyQixJQUFJQSxPQUFPLElBQUlELEdBQUcsQ0FBQ08sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JDLE9BQU9WLDhEQUFxQixDQUFDLENBQUMsRUFBRU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFFRCxPQUFPTiwwREFBaUIsRUFBRSxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuICBjb25zdCBjb29raWVzID0gcmVxLmNvb2tpZXMuZ2V0KCdqd3QnKTtcbiAgY29uc3QgeyBvcmlnaW4gfSA9IHJlcS5uZXh0VXJsO1xuXG4gIGNvbnNvbGUubG9nKGNvb2tpZXMpO1xuICBpZiAoY29va2llcyAmJiB1cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChgJHtvcmlnaW59L2ApO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsImNvb2tpZXMiLCJnZXQiLCJvcmlnaW4iLCJuZXh0VXJsIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicmVkaXJlY3QiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});