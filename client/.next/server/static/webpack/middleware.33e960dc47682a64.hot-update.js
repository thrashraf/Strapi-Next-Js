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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.url;\n    const jwt = req.cookies;\n    const { origin  } = req.nextUrl;\n    console.log(jwt, origin);\n    if (jwt && url.includes(\"/login\")) {\n        console.log(\"lol\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${origin}/`);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNDLEdBQUc7SUFDbkIsTUFBTUMsR0FBRyxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFDdkIsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxPQUFPO0lBRTlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsR0FBRyxFQUFFRSxNQUFNLENBQUMsQ0FBQztJQUN6QixJQUFJRixHQUFHLElBQUlELEdBQUcsQ0FBQ08sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPVCw4REFBcUIsQ0FBQyxDQUFDLEVBQUVNLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBRUQsT0FBT04sMERBQWlCLEVBQUUsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgdXJsID0gcmVxLnVybDtcbiAgY29uc3Qgand0ID0gcmVxLmNvb2tpZXM7XG4gIGNvbnN0IHsgb3JpZ2luIH0gPSByZXEubmV4dFVybDtcblxuICBjb25zb2xlLmxvZyhqd3QsIG9yaWdpbik7XG4gIGlmIChqd3QgJiYgdXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xuICAgIGNvbnNvbGUubG9nKCdsb2wnKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KGAke29yaWdpbn0vYCk7XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidXJsIiwiand0IiwiY29va2llcyIsIm9yaWdpbiIsIm5leHRVcmwiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJyZWRpcmVjdCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});