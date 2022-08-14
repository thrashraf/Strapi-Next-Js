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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n    const url = req.url;\n    console.log(req.headers);\n    if (cookie.jwt && url.includes(\"/login\")) {\n        console.log(\"hehe\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNKO0FBRWhDLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLE1BQU0sR0FBR0gscURBQVksRUFBRTtJQUM3QixNQUFNSSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0UsR0FBRztJQUVuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDLENBQUM7SUFDekIsSUFBSUosTUFBTSxDQUFDSyxHQUFHLElBQUlKLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hDSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPUCwwREFBaUIsRUFBRSxDQUFDO0tBQzVCO0lBRUQsT0FBT0EsMERBQWlCLEVBQUUsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCBjb29raWUgPSBwYXJzZUNvb2tpZXMoKTtcbiAgY29uc3QgdXJsID0gcmVxLnVybDtcblxuICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycyk7XG4gIGlmIChjb29raWUuand0ICYmIHVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcbiAgICBjb25zb2xlLmxvZygnaGVoZScpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicGFyc2VDb29raWVzIiwibWlkZGxld2FyZSIsInJlcSIsImNvb2tpZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiand0IiwiaW5jbHVkZXMiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});