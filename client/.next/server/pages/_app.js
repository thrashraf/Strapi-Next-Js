/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ErrorBoundary.jsx":
/*!**************************************!*\
  !*** ./components/ErrorBoundary.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n        // Define a state variable to track whether is an error or not\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(error) {\n        // Update state so the next render will show the fallback UI\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        // You can use your own error logging service here\n        console.log({\n            error,\n            errorInfo\n        });\n    }\n    render() {\n        // Check if the error is thrown\n        if (this.state.hasError) {\n            // You can render any custom fallback UI\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Oops, there is an error!\"\n                    }, void 0, false, {\n                        fileName: \"/home/ashraf/Internship/Strapi/client/components/ErrorBoundary.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>this.setState({\n                                hasError: false\n                            }),\n                        children: \"Try again?\"\n                    }, void 0, false, {\n                        fileName: \"/home/ashraf/Internship/Strapi/client/components/ErrorBoundary.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/components/ErrorBoundary.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this);\n        }\n        // Return children components in case of no error\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsYUFBYSxTQUFTRCx3REFBZTtJQUN6Q0csWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFFYiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFBRUMsUUFBUSxFQUFFLEtBQUs7U0FBRSxDQUFDO0tBQ2xDO0lBQ0QsT0FBT0Msd0JBQXdCLENBQUNDLEtBQUssRUFBRTtRQUNyQyw0REFBNEQ7UUFFNUQsT0FBTztZQUFFRixRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FDM0I7SUFDREcsaUJBQWlCLENBQUNELEtBQUssRUFBRUUsU0FBUyxFQUFFO1FBQ2xDLGtEQUFrRDtRQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBRUosS0FBSztZQUFFRSxTQUFTO1NBQUUsQ0FBQyxDQUFDO0tBQ25DO0lBQ0RHLE1BQU0sR0FBRztRQUNQLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQ1IsS0FBSyxDQUFDQyxRQUFRLEVBQUU7WUFDdkIsd0NBQXdDO1lBQ3hDLHFCQUNFLDhEQUFDUSxLQUFHOztrQ0FDRiw4REFBQ0MsSUFBRTtrQ0FBQywwQkFBd0I7Ozs7OzRCQUFLO2tDQUNqQyw4REFBQ0MsUUFBTTt3QkFDTEMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JDLE9BQU8sRUFBRSxJQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUFFYixRQUFRLEVBQUUsS0FBSzs2QkFBRSxDQUFDO2tDQUNsRCxZQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMLENBQ047U0FDSDtRQUVELGlEQUFpRDtRQUVqRCxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDZ0IsUUFBUSxDQUFDO0tBQzVCO0NBQ0Y7QUFFRCxpRUFBZW5CLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qc3g/MDNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBEZWZpbmUgYSBzdGF0ZSB2YXJpYWJsZSB0byB0cmFjayB3aGV0aGVyIGlzIGFuIGVycm9yIG9yIG5vdFxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUlcblxuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XG4gIH1cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIC8vIFlvdSBjYW4gdXNlIHlvdXIgb3duIGVycm9yIGxvZ2dpbmcgc2VydmljZSBoZXJlXG4gICAgY29uc29sZS5sb2coeyBlcnJvciwgZXJyb3JJbmZvIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgZXJyb3IgaXMgdGhyb3duXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPk9vcHMsIHRoZXJlIGlzIGFuIGVycm9yITwvaDI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUcnkgYWdhaW4/XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gY2hpbGRyZW4gY29tcG9uZW50cyBpbiBjYXNlIG9mIG5vIGVycm9yXG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRXJyb3JCb3VuZGFyeSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImhhc0Vycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJkaXYiLCJoMiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ErrorBoundary.jsx\n");

/***/ }),

/***/ "./helpers/Context.jsx":
/*!*****************************!*\
  !*** ./helpers/Context.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null,\n    loading: false\n});\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n    console.log(cookie.jwt);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/helpers/Context.jsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL0NvbnRleHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0U7QUFDbEI7QUFFaEQsTUFBTU0sV0FBVyxpQkFBR0wsb0RBQWEsQ0FBQztJQUNoQ00sSUFBSSxFQUFFLElBQUk7SUFDVkMsT0FBTyxFQUFFLEtBQUs7Q0FDZixDQUFDO0FBRUssTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNuRCxNQUFNLEtBQUNILElBQUksTUFBRUksT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV0QyxNQUFNVSxNQUFNLEdBQUdQLHFEQUFZLEVBQUU7SUFDN0JRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLHFCQUFPLDhEQUFDVCxXQUFXLENBQUNVLFFBQVE7UUFBQ0MsS0FBSyxFQUFFVixJQUFJO2tCQUFHRyxRQUFROzs7OztpQkFBd0IsQ0FBQztDQUM3RSxDQUFDO0FBRUYsaUVBQWVKLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2hlbHBlcnMvQ29udGV4dC5qc3g/ZjY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBub29raWVzLCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB1c2VyOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29va2llID0gcGFyc2VDb29raWVzKCk7XG4gIGNvbnNvbGUubG9nKGNvb2tpZS5qd3QpO1xuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sIm5hbWVzIjpbInJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm9va2llcyIsInBhcnNlQ29va2llcyIsIkF1dGhDb250ZXh0IiwidXNlciIsImxvYWRpbmciLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwiY29va2llIiwiY29uc29sZSIsImxvZyIsImp3dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/Context.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorBoundary */ \"./components/ErrorBoundary.jsx\");\n/* harmony import */ var _helpers_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Context */ \"./helpers/Context.jsx\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Context__WEBPACK_IMPORTED_MODULE_4__.AuthContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBQ0g7QUFDeUI7QUFDQztBQUV6RCxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0osaUVBQWE7a0JBQ1osNEVBQUNDLGlFQUFtQjtzQkFDbEIsNEVBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNSOzs7OztZQUNSLENBQ2hCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9Db250ZXh0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiRXJyb3JCb3VuZGFyeSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();