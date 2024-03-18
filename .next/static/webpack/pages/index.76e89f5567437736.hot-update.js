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

/***/ "./src/components/Works.js":
/*!*********************************!*\
  !*** ./src/components/Works.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PortfolioIsotope = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_PortfolioIsotope_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./PortfolioIsotope */ \"./src/components/PortfolioIsotope.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\src\\\\components\\\\Works.js -> \" + \"./PortfolioIsotope\"\n        ]\n    },\n    ssr: false\n});\n_c = PortfolioIsotope;\nconst Works = ()=>{\n    _s();\n    const [timelines, setTimelines] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user, _data_user1;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setProjects(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.timeline);\n                console.log(data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.timeline);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"works-section\",\n        id: \"works\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section_title wow fadeInUp center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"My Amazing Works\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PortfolioIsotope, {\n                    projects: projects\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Works.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Works, \"IW5bAqsQN4qXxFD8tSBaNUFfezM=\");\n_c1 = Works;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c, _c1;\n$RefreshReg$(_c, \"PortfolioIsotope\");\n$RefreshReg$(_c1, \"Works\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDUztBQUM1QyxNQUFNSSxtQkFBbUJILG1EQUFPQSxDQUFDLElBQU0saU1BQTRCOzs7Ozs7SUFDakVJLEtBQUssS0FBSzs7S0FETkQ7QUFHTixNQUFNRSxRQUFRLElBQU07O0lBRWxCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8sWUFBWSxVQUFZO1lBQzVCLElBQUk7b0JBRVVDLFlBQ0FBO2dCQUZaLE1BQU0sRUFBRUEsS0FBSSxFQUFFLEdBQUcsTUFBTVYsaURBQVMsQ0FBQztnQkFDakNZLFlBQVlGLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTUcsSUFBSSxjQUFWSCx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUksUUFBRjtnQkFDdEJDLFFBQVFDLEdBQUcsQ0FBQ04saUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxLQUFNRyxJQUFJLGNBQVZILHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFZSSxRQUFGO1lBQ3hCLEVBQUUsT0FBT0csS0FBSztnQkFDWkYsUUFBUUMsR0FBRyxDQUFDQztZQUNkO1FBQ0Y7UUFFQVI7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBUUMsV0FBVTtRQUFnQkMsSUFBRztrQkFDcEMsNEVBQUNDO1lBQUlGLFdBQVU7OzhCQUViLDhEQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNHO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNDO3NDQUFHOzs7Ozs7Ozs7Ozs7OEJBR04sOERBQUNuQjtvQkFBaUJvQixVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0FoQ01sQjtNQUFBQTtBQWlDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy5qcz9jNzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFBvcnRmb2xpb0lzb3RvcGUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vUG9ydGZvbGlvSXNvdG9wZVwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5jb25zdCBXb3JrcyA9ICgpID0+IHtcblxuICBjb25zdCBbdGltZWxpbmVzLCBzZXRUaW1lbGluZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKTtcbiAgICAgICAgc2V0UHJvamVjdHMoZGF0YT8udXNlcj8udGltZWxpbmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhPy51c2VyPy50aW1lbGluZSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pOyBcblxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid29ya3Mtc2VjdGlvblwiIGlkPVwid29ya3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiBXb3JrIFRpdGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fdGl0bGUgd293IGZhZGVJblVwIGNlbnRlclwiPlxuICAgICAgICAgIDxwPlBvcnRmb2xpbzwvcD5cbiAgICAgICAgICA8aDI+TXkgQW1hemluZyBXb3JrczwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogV29yayBJc290b3BlICovfVxuICAgICAgICA8UG9ydGZvbGlvSXNvdG9wZSBwcm9qZWN0cz17cHJvamVjdHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JrcztcbiJdLCJuYW1lcyI6WyJheGlvcyIsImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvcnRmb2xpb0lzb3RvcGUiLCJzc3IiLCJXb3JrcyIsInRpbWVsaW5lcyIsInNldFRpbWVsaW5lcyIsImZldGNoRGF0YSIsImRhdGEiLCJnZXQiLCJzZXRQcm9qZWN0cyIsInVzZXIiLCJ0aW1lbGluZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJwIiwiaDIiLCJwcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Works.js\n"));

/***/ })

});