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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Blog = ()=>{\n    _s();\n    const { blogDetails , blogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.DoraContext);\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"blog-section fill-section\",\n        id: \"blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section_title wow fadeInUp center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"From My Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Our Recent Updates, Blog, Tips, Tricks & More\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blog-items\",\n                    children: blogs.map((blog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"blog-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wow fadeInUp item__\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"blog-date-cont\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: blog.date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        className: \"blog-item-img\",\n                                        onClick: ()=>blogDetails(blog),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: blog.img,\n                                            alt: \"dora_img\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"blog-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                onClick: ()=>blogDetails(blog),\n                                                className: \"category\",\n                                                children: blog.catagory\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    onClick: ()=>blogDetails(blog),\n                                                    children: blog.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, undefined)\n                        }, blog.id, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Blog.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"1Dpuve1lLNtYav09VcmFqw3TH78=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0o7QUFFekMsTUFBTUcsT0FBTyxJQUFNOztJQUNqQixNQUFNLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRSxpREFBV0E7SUFFckQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUVOLCtDQUFRQTtJQUV2QyxxQkFDRSw4REFBQ087UUFBUUMsV0FBVTtRQUE0QkMsSUFBRztrQkFDaEQsNEVBQUNDO1lBQUlGLFdBQVU7OzhCQUViLDhEQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNHO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNDO3NDQUFHOzs7Ozs7Ozs7Ozs7OEJBRU4sOERBQUNGO29CQUFJRixXQUFVOzhCQUNaSixNQUFNUyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNKOzRCQUFJRixXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFJRixXQUFVO2tEQUNiLDRFQUFDRztzREFBR0csS0FBS0MsSUFBSTs7Ozs7Ozs7Ozs7a0RBRWYsOERBQUNDO3dDQUNDQyxNQUFLO3dDQUNMVCxXQUFVO3dDQUNWVSxTQUFTLElBQU1mLFlBQVlXO2tEQUUzQiw0RUFBQ0s7NENBQUlDLEtBQUtOLEtBQUtLLEdBQUc7NENBQUVFLEtBQUk7Ozs7Ozs7Ozs7O2tEQUUxQiw4REFBQ1g7d0NBQUlGLFdBQVU7OzBEQUNiLDhEQUFDUTtnREFDQ0MsTUFBSztnREFDTEMsU0FBUyxJQUFNZixZQUFZVztnREFDM0JOLFdBQVU7MERBRVRNLEtBQUtRLFFBQVE7Ozs7OzswREFFaEIsOERBQUNDOzBEQUNDLDRFQUFDUDtvREFBRUMsTUFBSztvREFBSUMsU0FBUyxJQUFNZixZQUFZVzs4REFDcENBLEtBQUtVLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXRCV1YsS0FBS0wsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNuRDtHQWhETVA7S0FBQUE7QUFpRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcz8wNjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb3JhQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0XCI7XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYmxvZ0RldGFpbHMsIGJsb2dzIH0gPSB1c2VDb250ZXh0KERvcmFDb250ZXh0KTtcblxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXT0gdXNlU3RhdGUoKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1zZWN0aW9uIGZpbGwtc2VjdGlvblwiIGlkPVwiYmxvZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgey8qIEJsb2cgVGl0ZWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl90aXRsZSB3b3cgZmFkZUluVXAgY2VudGVyXCI+XG4gICAgICAgICAgPHA+RnJvbSBNeSBCbG9nPC9wPlxuICAgICAgICAgIDxoMj5PdXIgUmVjZW50IFVwZGF0ZXMsIEJsb2csIFRpcHMsIFRyaWNrcyAmYW1wOyBNb3JlPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pdGVtc1wiPlxuICAgICAgICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pdGVtXCIga2V5PXtibG9nLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgaXRlbV9fXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWRhdGUtY29udFwiPlxuICAgICAgICAgICAgICAgICAgPHA+e2Jsb2cuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2ctaXRlbS1pbWdcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmxvZ0RldGFpbHMoYmxvZyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1nfSBhbHQ9XCJkb3JhX2ltZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJsb2dEZXRhaWxzKGJsb2cpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtibG9nLmNhdGFnb3J5fVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGJsb2dEZXRhaWxzKGJsb2cpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJEb3JhQ29udGV4dCIsIkJsb2ciLCJibG9nRGV0YWlscyIsImJsb2dzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsInAiLCJoMiIsIm1hcCIsImJsb2ciLCJkYXRlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiY2F0YWdvcnkiLCJoNCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Blog.js\n"));

/***/ })

});