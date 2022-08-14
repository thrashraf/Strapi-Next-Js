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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"(middleware)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const { cookie  } = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n    const url = req.url;\n    console.log(req.headers.get(\"jwt\"));\n    // if (cookie.jwt && url.includes('/login')) {\n    //   console.log('hehe');\n    //   return NextResponse.next();\n    // }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNKO0FBRWhDLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdILHFEQUFZLEVBQUU7SUFDakMsTUFBTUksR0FBRyxHQUFHRixHQUFHLENBQUNFLEdBQUc7SUFFbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsSUFBSTtJQUVKLE9BQU9ULDBEQUFpQixFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgeyBjb29raWUgfSA9IHBhcnNlQ29va2llcygpO1xuICBjb25zdCB1cmwgPSByZXEudXJsO1xuXG4gIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzLmdldCgnand0JykpO1xuICAvLyBpZiAoY29va2llLmp3dCAmJiB1cmwuaW5jbHVkZXMoJy9sb2dpbicpKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2hlaGUnKTtcbiAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgLy8gfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInBhcnNlQ29va2llcyIsIm1pZGRsZXdhcmUiLCJyZXEiLCJjb29raWUiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsImdldCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});