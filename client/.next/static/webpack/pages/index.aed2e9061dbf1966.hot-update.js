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

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger */ \"./components/hamburger.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between items-center w-full p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10 h-10 bg-red-400 rounded-full flex justify-center items-center text-xl\",\n                    children: \"D\"\n                }, void 0, false, {\n                    fileName: \"/home/ashraf/Internship/Strapi/client/components/navbar.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/components/navbar.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hamburger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isOpen,\n                setIsOpen: setIsOpen\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/components/navbar.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"absolute bg-white w-[70%] h-[400px] top-1/3 right-2/4 transform -translate-x-1/4 -translate-y-1/3 rounded-md\"\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/components/navbar.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/components/navbar.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUFpQztBQUNHO0FBRXBDLElBQU1FLE1BQU0sR0FBRyxXQUFNOztJQUNuQixJQUE0QkYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ0csTUFBTSxHQUFlSCxHQUFlLEdBQTlCLEVBQUVJLFNBQVMsR0FBSUosR0FBZSxHQUFuQjtJQUV4QixxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsOENBQThDOzswQkFDM0QsOERBQUNDLE9BQUs7MEJBQ0osNEVBQUNDLEtBQUc7b0JBQUNGLFNBQVMsRUFBQyw0RUFBNEU7OEJBQUMsR0FFNUY7Ozs7O3lCQUFNOzs7OztxQkFPQTswQkFFUiw4REFBQ0wsa0RBQVM7Z0JBQUNFLE1BQU0sRUFBRUEsTUFBTTtnQkFBRUMsU0FBUyxFQUFFQSxTQUFTOzs7OztxQkFBSTswQkFFbkQsOERBQUNHLE9BQUs7Z0JBQUNELFNBQVMsRUFBQyw4R0FBOEc7Ozs7O3FCQUFTOzs7Ozs7YUFDcEksQ0FDTjtDQUNIO0dBdEJLSixNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUF3QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qc3g/ZjUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnLi9oYW1idXJnZXInO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBwLTUnPlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCBoLTEwIGJnLXJlZC00MDAgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQteGwnPlxuICAgICAgICAgIERcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9J2ZsZXggdy1bODAlXSc+XG4gICAgICAgICAge1snbGVhcm4nLCAnYmxvZycsICdib29rbWFyaycsICdhYm91dCB1cyddLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGk+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPiAqL31cbiAgICAgIDwvYXNpZGU+XG5cbiAgICAgIDxIYW1idXJnZXIgaXNPcGVuPXtpc09wZW59IHNldElzT3Blbj17c2V0SXNPcGVufSAvPlxuXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPSdhYnNvbHV0ZSBiZy13aGl0ZSB3LVs3MCVdIGgtWzQwMHB4XSB0b3AtMS8zIHJpZ2h0LTIvNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvNCAtdHJhbnNsYXRlLXktMS8zIHJvdW5kZWQtbWQnPjwvYXNpZGU+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIYW1idXJnZXIiLCJOYXZiYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJuYXYiLCJjbGFzc05hbWUiLCJhc2lkZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});