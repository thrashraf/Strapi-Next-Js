"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.jsx\");\n/* harmony import */ var _components_Posts_CardPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Posts/CardPost */ \"./components/Posts/CardPost.jsx\");\n/* harmony import */ var _components_Posts_FeaturedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Posts/FeaturedPost */ \"./components/Posts/FeaturedPost.jsx\");\n/* harmony import */ var _helpers_formateDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/formateDate */ \"./helpers/formateDate.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var initialPosts = param.data, featured = param.featured;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPosts), posts = ref[0], setPosts = ref[1];\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header-img\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"theblogwhite.svg\",\n                    className: \"m-auto\"\n                }, void 0, false, {\n                    fileName: \"/home/ashraf/Internship/Strapi/client/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts_CardPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                posts: posts\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"8TfU64fBHa+NmmL0N+ZY3a+vFmE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ1M7QUFDVTtBQUNRO0FBQ1I7O0FBaUNyQyxTQUFTSyxJQUFJLENBQUMsS0FBZ0MsRUFBRTtRQUFoQ0MsWUFBa0IsR0FBcEIsS0FBZ0MsQ0FBOUJBLElBQUksRUFBZ0JFLFFBQVEsR0FBOUIsS0FBZ0MsQ0FBVkEsUUFBUTs7SUFDekQsSUFBMEJSLEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDTyxZQUFZLENBQUMsRUFBekNFLEtBQUssR0FBY1QsR0FBc0IsR0FBcEMsRUFBRVUsUUFBUSxHQUFJVixHQUFzQixHQUExQjtJQUV0QlcsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDUiwwREFBTTs7MEJBQ0wsOERBQUNZLFFBQU07Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOzBCQUM1Qiw0RUFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFDLGtCQUFrQjtvQkFBQ0YsU0FBUyxFQUFDLFFBQVE7Ozs7O3dCQUFHOzs7OztvQkFDMUM7MEJBTVQsOERBQUNaLGtFQUFRO2dCQUFDTyxLQUFLLEVBQUVBLEtBQUs7Ozs7O29CQUFJOzs7Ozs7WUFDbkIsQ0FDVDtDQUNIO0dBakJ1QkosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBDYXJkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzL0NhcmRQb3N0JztcbmltcG9ydCBGZWF0dXJlZFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0cy9GZWF0dXJlZFBvc3QnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2hlbHBlcnMvZm9ybWF0ZURhdGUnO1xuXG4vLyBUaGlzIGdldHMgY2FsbGVkIG9uIGV2ZXJ5IHJlcXVlc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcblxuICBjb25zdCBlbmRQb2ludCA9IFtcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElVUkx9L2FwaS9wb3N0cz9wb3B1bGF0ZT0qYCksXG4gICAgZmV0Y2goXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElVUkx9L2FwaS9wb3N0cz9maWx0ZXJzW2ZlYXR1cmVkXVskZXFdPXRydWUmcG9wdWxhdGU9KmBcbiAgICApLFxuICBdO1xuXG4gIGNvbnN0IHtcbiAgICByZXNQb3N0cyxcbiAgICByZXNGZWF0dXJlZCxcbiAgICBpc0Vycm9yID0gZmFsc2UsXG4gIH0gPSBhd2FpdCBQcm9taXNlLmFsbChlbmRQb2ludCkudGhlbihhc3luYyAoW3Bvc3RzRGF0YSwgZmVhdHVyZWREYXRhXSkgPT4ge1xuICAgIGlmICghcG9zdHNEYXRhLm9rIHx8ICFmZWF0dXJlZERhdGEub2spIHJldHVybiB7IGlzRXJyb3I6IHRydWUgfTtcblxuICAgIHJldHVybiB7XG4gICAgICByZXNQb3N0czogYXdhaXQgcG9zdHNEYXRhLmpzb24oKSxcbiAgICAgIHJlc0ZlYXR1cmVkOiBhd2FpdCBmZWF0dXJlZERhdGEuanNvbigpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHBvc3RzID0gcmVzUG9zdHMuZGF0YTtcbiAgY29uc3QgZmVhdHVyZWQgPSByZXNGZWF0dXJlZC5kYXRhO1xuXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdHMsIGZlYXR1cmVkIH0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGE6IGluaXRpYWxQb3N0cywgZmVhdHVyZWQgfSkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKGluaXRpYWxQb3N0cyk7XG5cbiAgY29uc29sZS5sb2cocG9zdHMpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyLWltZyc+XG4gICAgICAgIDxpbWcgc3JjPSd0aGVibG9nd2hpdGUuc3ZnJyBjbGFzc05hbWU9J20tYXV0bycgLz5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogZmVhdHVyZWQgcG9zdCBzZWN0aW9uICovfVxuICAgICAgey8qIDxGZWF0dXJlZFBvc3QgZmVhdHVyZWQ9e2ZlYXR1cmVkfSBwb3N0cz17cG9zdHN9IC8+ICovfVxuXG4gICAgICB7LyogY2FyZCBwb3N0IHNlY3Rpb24gKi99XG4gICAgICA8Q2FyZFBvc3QgcG9zdHM9e3Bvc3RzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0IiwiQ2FyZFBvc3QiLCJGZWF0dXJlZFBvc3QiLCJmb3JtYXREYXRlIiwiSG9tZSIsImRhdGEiLCJpbml0aWFsUG9zdHMiLCJmZWF0dXJlZCIsInBvc3RzIiwic2V0UG9zdHMiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});