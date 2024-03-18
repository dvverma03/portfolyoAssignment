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

/***/ "./src/components/Blog.js":
/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user, _data_user1;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setProjects(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.services);\n                console.log(data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.services);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"blog-section fill-section\",\n        id: \"blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section_title wow fadeInUp center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"From My Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Our Recent Updates, Blog, Tips, Tricks & More\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blog-items\",\n                    children: services && services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"blog-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wow fadeInUp item__\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined)\n                        }, service._id, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"EtqJBMMCfged1IUmg+kuIketvTg=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNmO0FBQ2Y7QUFFMUIsTUFBTUssT0FBTyxJQUFNOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRUwsK0NBQVFBLENBQUMsSUFBSTtJQUU1Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1PLFlBQVksVUFBWTtZQUM1QixJQUFJO29CQUVVQyxZQUNBQTtnQkFGWixNQUFNLEVBQUVBLEtBQUksRUFBRSxHQUFHLE1BQU1MLGlEQUFTLENBQUM7Z0JBQ2pDTyxZQUFZRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGFBQUFBLEtBQU1HLElBQUksY0FBVkgsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlILFFBQUY7Z0JBQ3RCTyxRQUFRQyxHQUFHLENBQUNMLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsS0FBTUcsSUFBSSxjQUFWSCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBWUgsUUFBRjtZQUN4QixFQUFFLE9BQU9TLEtBQUs7Z0JBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDZDtRQUNGO1FBQ0FQO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQ0UsOERBQUNRO1FBQVFDLFdBQVU7UUFBNEJDLElBQUc7a0JBQ2hELDRFQUFDQztZQUFJRixXQUFVOzs4QkFFYiw4REFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRztzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQztzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUVOLDhEQUFDRjtvQkFBSUYsV0FBVTs4QkFDWlgsWUFBWUEsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDekIsOERBQUNKOzRCQUFJRixXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBSUYsV0FBVTs7Ozs7OzJCQURlTSxRQUFRQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdkQ7R0FwQ01uQjtLQUFBQTtBQXFDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzPzA2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9yYUNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBCbG9nID0gKCkgPT4ge1xuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXT0gdXNlU3RhdGUobnVsbClcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKTtcbiAgICAgICAgc2V0UHJvamVjdHMoZGF0YT8udXNlcj8uc2VydmljZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhPy51c2VyPy5zZXJ2aWNlcylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9nLXNlY3Rpb24gZmlsbC1zZWN0aW9uXCIgaWQ9XCJibG9nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7LyogQmxvZyBUaXRlbCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX3RpdGxlIHdvdyBmYWRlSW5VcCBjZW50ZXJcIj5cbiAgICAgICAgICA8cD5Gcm9tIE15IEJsb2c8L3A+XG4gICAgICAgICAgPGgyPk91ciBSZWNlbnQgVXBkYXRlcywgQmxvZywgVGlwcywgVHJpY2tzICZhbXA7IE1vcmU8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWl0ZW1zXCI+XG4gICAgICAgICAge3NlcnZpY2VzICYmIHNlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWl0ZW1cIiBrZXk9e3NlcnZpY2UuX2lkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgaXRlbV9fXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEb3JhQ29udGV4dCIsImF4aW9zIiwiQmxvZyIsInNlcnZpY2VzIiwic2V0U2VydmljZXMiLCJmZXRjaERhdGEiLCJkYXRhIiwiZ2V0Iiwic2V0UHJvamVjdHMiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImVyciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsInAiLCJoMiIsIm1hcCIsInNlcnZpY2UiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Blog.js\n"));

/***/ })

});