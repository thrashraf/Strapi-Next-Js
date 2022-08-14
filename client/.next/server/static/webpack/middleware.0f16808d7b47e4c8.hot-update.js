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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.url;\n    const cookie = req.cookies.get(\"jwt\");\n    const { origin  } = req.nextUrl;\n    console.log(cookies);\n    if (cookies && url.includes(\"/login\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNDLEdBQUc7SUFDbkIsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHTCxHQUFHLENBQUNNLE9BQU87SUFFOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQztJQUNyQixJQUFJQSxPQUFPLElBQUlGLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JDLE9BQU9YLDhEQUFxQixDQUFDLENBQUMsRUFBRU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFFRCxPQUFPUCwwREFBaUIsRUFBRSxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuICBjb25zdCBjb29raWUgPSByZXEuY29va2llcy5nZXQoJ2p3dCcpO1xuICBjb25zdCB7IG9yaWdpbiB9ID0gcmVxLm5leHRVcmw7XG5cbiAgY29uc29sZS5sb2coY29va2llcyk7XG4gIGlmIChjb29raWVzICYmIHVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KGAke29yaWdpbn0vYCk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidXJsIiwiY29va2llIiwiY29va2llcyIsImdldCIsIm9yaWdpbiIsIm5leHRVcmwiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJyZWRpcmVjdCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});