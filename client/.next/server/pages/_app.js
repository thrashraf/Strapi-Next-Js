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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./helpers/api.js\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUserFromCookies() {\n            const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n            if (cookie.jwt) {\n                _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.Authorization = `Bearer ${cookie.jwt}`;\n                const { data: user  } = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/users/me\");\n                setUser(user);\n            }\n            setLoading(false);\n        }\n        if (user) {}\n        loadUserFromCookies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/helpers/Context.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL0NvbnRleHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThFO0FBQzlCO0FBQ3hCO0FBRXhCLE1BQU1RLFdBQVcsaUJBQUdQLG9EQUFhLENBQUMsRUFBRSxDQUFDO0FBRTlCLE1BQU1RLG1CQUFtQixHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDbkQsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSVYsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxLQUFDVyxPQUFPLE1BQUVDLFVBQVUsTUFBSVosK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFNUNDLGdEQUFTLENBQUMsSUFBTTtRQUNkLGVBQWVZLG1CQUFtQixHQUFHO1lBQ25DLE1BQU1DLE1BQU0sR0FBR1YscURBQVksRUFBRTtZQUM3QixJQUFJVSxNQUFNLENBQUNDLEdBQUcsRUFBRTtnQkFDZFYsMkVBQWtDLEdBQUcsQ0FBQyxPQUFPLEVBQUVTLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxFQUFFSSxJQUFJLEVBQUVWLElBQUksR0FBRSxHQUFHLE1BQU1KLGdEQUFPLENBQUMsZUFBZSxDQUFDO2dCQUNyREssT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQzthQUNmO1lBQ0RHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtRQUVELElBQUlILElBQUksRUFBRSxFQUNUO1FBQ0RJLG1CQUFtQixFQUFFLENBQUM7S0FDdkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDUCxXQUFXLENBQUNlLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUViLElBQUk7WUFBRUUsT0FBTztZQUFFRCxPQUFPO1NBQUU7a0JBQ3BERixRQUFROzs7OztpQkFDWSxDQUN2QjtDQUNILENBQUM7QUFFSyxNQUFNZSxPQUFPLEdBQUcsSUFBTXJCLGlEQUFVLENBQUNJLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vaGVscGVycy9Db250ZXh0LmpzeD9mNjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG5vb2tpZXMsIHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyRnJvbUNvb2tpZXMoKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBwYXJzZUNvb2tpZXMoKTtcbiAgICAgIGlmIChjb29raWUuand0KSB7XG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7Y29va2llLmp3dH1gO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IGF3YWl0IGFwaS5nZXQoJy9hcGkvdXNlcnMvbWUnKTtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh1c2VyKSB7XG4gICAgfVxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIHNldFVzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4iXSwibmFtZXMiOlsicmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0Iiwibm9va2llcyIsInBhcnNlQ29va2llcyIsImFwaSIsIkF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRVc2VyRnJvbUNvb2tpZXMiLCJjb29raWUiLCJqd3QiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImdldCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/Context.jsx\n");

/***/ }),

/***/ "./helpers/api.js":
/*!************************!*\
  !*** ./helpers/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// api.js\n\nlet urls = {\n    development: \"http://localhost:1337/\"\n};\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: urls[\"development\"],\n    headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTO0FBQ2lCO0FBRTFCLElBQUlDLElBQUksR0FBRztJQUNUQyxXQUFXLEVBQUUsd0JBQXdCO0NBQ3RDO0FBQ0QsTUFBTUMsR0FBRyxHQUFHSCxtREFBWSxDQUFDO0lBQ3ZCSyxPQUFPLEVBQUVKLElBQUksQ0FQZixhQUFhLENBT3dCO0lBQ25DSyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixjQUFjLEVBQUUsa0JBQWtCO0tBQ25DO0NBQ0YsQ0FBQztBQUVGLGlFQUFlSixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9oZWxwZXJzL2FwaS5qcz81OGYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS5qc1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxubGV0IHVybHMgPSB7XG4gIGRldmVsb3BtZW50OiAnaHR0cDovL2xvY2FsaG9zdDoxMzM3LycsXG59O1xuY29uc3QgYXBpID0gQXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogdXJsc1twcm9jZXNzLmVudi5OT0RFX0VOVl0sXG4gIGhlYWRlcnM6IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJBeGlvcyIsInVybHMiLCJkZXZlbG9wbWVudCIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQWNjZXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorBoundary */ \"./components/ErrorBoundary.jsx\");\n/* harmony import */ var _helpers_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Context */ \"./helpers/Context.jsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Context__WEBPACK_IMPORTED_MODULE_4__.AuthContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ashraf/Internship/Strapi/client/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBQ0g7QUFDeUI7QUFDQztBQUNQO0FBRWxELFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDTCxpRUFBYTtrQkFDWiw0RUFBQ0MsaUVBQW1CO3NCQUNsQiw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1I7Ozs7O1lBQ1IsQ0FDaEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5JztcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL0NvbnRleHQnO1xuaW1wb3J0IHsgUHJvdGVjdFJvdXRlIH0gZnJvbSAnLi4vaGVscGVycy9Db250ZXh0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiRXJyb3JCb3VuZGFyeSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJQcm90ZWN0Um91dGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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