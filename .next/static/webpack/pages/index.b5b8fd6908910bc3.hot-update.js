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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user, _data_user1;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setProjects(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.services);\n                console.log(data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.services);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"blog-section fill-section\",\n        id: \"blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section_title wow fadeInUp center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"From My Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Our Recent Updates, Blog, Tips, Tricks & More\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blog-items\",\n                    children: services && services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"blog-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wow fadeInUp item__\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: service,\n                                    alt: \"\",\n                                    srcset: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined)\n                        }, service._id, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"EtqJBMMCfged1IUmg+kuIketvTg=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNmO0FBQ2Y7QUFFMUIsTUFBTUssT0FBTyxJQUFNOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRUwsK0NBQVFBLENBQUMsSUFBSTtJQUU1Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1PLFlBQVksVUFBWTtZQUM1QixJQUFJO29CQUVVQyxZQUNBQTtnQkFGWixNQUFNLEVBQUVBLEtBQUksRUFBRSxHQUFHLE1BQU1MLGlEQUFTLENBQUM7Z0JBQ2pDTyxZQUFZRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGFBQUFBLEtBQU1HLElBQUksY0FBVkgsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlILFFBQUY7Z0JBQ3RCTyxRQUFRQyxHQUFHLENBQUNMLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsS0FBTUcsSUFBSSxjQUFWSCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBWUgsUUFBRjtZQUN4QixFQUFFLE9BQU9TLEtBQUs7Z0JBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDZDtRQUNGO1FBQ0FQO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQ0UsOERBQUNRO1FBQVFDLFdBQVU7UUFBNEJDLElBQUc7a0JBQ2hELDRFQUFDQztZQUFJRixXQUFVOzs4QkFFYiw4REFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRztzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQztzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUVOLDhEQUFDRjtvQkFBSUYsV0FBVTs4QkFDWlgsWUFBWUEsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDekIsOERBQUNKOzRCQUFJRixXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBSUYsV0FBVTswQ0FDZCw0RUFBQ087b0NBQUlDLEtBQUtGO29DQUFTRyxLQUFJO29DQUFHQyxRQUFPOzs7Ozs7Ozs7OzsyQkFGSkosUUFBUUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZEO0dBcENNdkI7S0FBQUE7QUFxQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcz8wNjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERvcmFDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc109IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIik7XG4gICAgICAgIHNldFByb2plY3RzKGRhdGE/LnVzZXI/LnNlcnZpY2VzKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YT8udXNlcj8uc2VydmljZXMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1zZWN0aW9uIGZpbGwtc2VjdGlvblwiIGlkPVwiYmxvZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgey8qIEJsb2cgVGl0ZWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl90aXRsZSB3b3cgZmFkZUluVXAgY2VudGVyXCI+XG4gICAgICAgICAgPHA+RnJvbSBNeSBCbG9nPC9wPlxuICAgICAgICAgIDxoMj5PdXIgUmVjZW50IFVwZGF0ZXMsIEJsb2csIFRpcHMsIFRyaWNrcyAmYW1wOyBNb3JlPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pdGVtc1wiPlxuICAgICAgICAgIHtzZXJ2aWNlcyAmJiBzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pdGVtXCIga2V5PXtzZXJ2aWNlLl9pZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IGZhZGVJblVwIGl0ZW1fX1wiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcnZpY2V9IGFsdD1cIlwiIHNyY3NldD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRG9yYUNvbnRleHQiLCJheGlvcyIsIkJsb2ciLCJzZXJ2aWNlcyIsInNldFNlcnZpY2VzIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImdldCIsInNldFByb2plY3RzIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJwIiwiaDIiLCJtYXAiLCJzZXJ2aWNlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3Jjc2V0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Blog.js\n"));

/***/ })

});