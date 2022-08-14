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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.url;\n    const cookie = req.cookies;\n    console.log(cookie.includes(\"jwt\"));\n    if (cookie && url.includes(\"/login\")) {\n        console.log(\"hehe\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNDLEdBQUc7SUFDbkIsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXBDLElBQUlKLE1BQU0sSUFBSUQsR0FBRyxDQUFDSyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU9QLDBEQUFpQixFQUFFLENBQUM7S0FDNUI7SUFFRCxPQUFPQSwwREFBaUIsRUFBRSxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuICBjb25zdCBjb29raWUgPSByZXEuY29va2llcztcbiAgY29uc29sZS5sb2coY29va2llLmluY2x1ZGVzKCdqd3QnKSk7XG5cbiAgaWYgKGNvb2tpZSAmJiB1cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XG4gICAgY29uc29sZS5sb2coJ2hlaGUnKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJjb29raWUiLCJjb29raWVzIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});