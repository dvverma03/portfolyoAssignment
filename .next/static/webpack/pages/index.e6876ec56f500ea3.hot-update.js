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

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Projects = ()=>{\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setServices(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.projects);\n                console.log(data.user.projects);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: services && services.map((e)=>{\n            var _e_image;\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: e === null || e === void 0 ? void 0 : (_e_image = e.image) === null || _e_image === void 0 ? void 0 : _e_image.url,\n                            alt: \"\",\n                            srcset: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: e.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: e === null || e === void 0 ? void 0 : e.techStack.join(\",\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"EtqJBMMCfged1IUmg+kuIketvTg=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUN3QjtBQUVsRCxNQUFNSSxXQUFXLElBQU07O0lBRW5CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTdDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssWUFBWSxVQUFZO1lBQzVCLElBQUk7b0JBRVVDO2dCQURaLE1BQU0sRUFBRUEsS0FBSSxFQUFFLEdBQUcsTUFBTVIsaURBQVMsQ0FBQztnQkFDakNNLFlBQVlFLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTUUsSUFBSSxjQUFWRix3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUcsUUFBRjtnQkFDdEJDLFFBQVFDLEdBQUcsQ0FBQ0wsS0FBS0UsSUFBSSxDQUFDQyxRQUFRO1lBQ2hDLEVBQUUsT0FBT0csS0FBSztnQkFDWkYsUUFBUUMsR0FBRyxDQUFDQztZQUNkO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFHUCxxQkFDRSw4REFBQ1E7a0JBQ0VWLFlBQVlBLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQztnQkFJWEE7MEJBSGQscUVBQUNGOztrQ0FDRyw4REFBQ0E7a0NBRUQsNEVBQUNHOzRCQUFJQyxLQUFLRixjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxXQUFBQSxFQUFHRyxLQUFLLGNBQVJILHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVSSxHQUFGOzRCQUFPQyxLQUFJOzRCQUFHQyxRQUFPOzs7Ozs7Ozs7OztrQ0FFdkMsOERBQUNSOzswQ0FDRyw4REFBQ1M7MENBQUdQLEVBQUVRLEtBQUs7Ozs7OzswQ0FDWCw4REFBQ0Q7MENBQUdQLGNBQUFBLGVBQUFBLEtBQUFBLElBQUFBLEVBQUdTLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQztHQW5DTXZCO0tBQUFBO0FBcUNOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzPzk3MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKTtcclxuICAgICAgICAgIHNldFNlcnZpY2VzKGRhdGE/LnVzZXI/LnByb2plY3RzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudXNlci5wcm9qZWN0cylcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2VydmljZXMgJiYgc2VydmljZXMubWFwKChlKT0+KFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZT8uaW1hZ2U/LnVybH0gYWx0PVwiXCIgc3Jjc2V0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD57ZS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57ZT8udGVjaFN0YWNrLmpvaW4oXCIsXCIpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvamVjdHMiLCJzZXJ2aWNlcyIsInNldFNlcnZpY2VzIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImdldCIsInVzZXIiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJkaXYiLCJtYXAiLCJlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJzcmNzZXQiLCJwIiwidGl0bGUiLCJ0ZWNoU3RhY2siLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Projects.js\n"));

/***/ })

});