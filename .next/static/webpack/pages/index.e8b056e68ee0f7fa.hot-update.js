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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Feedback = ()=>{\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user, _data_user1;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setProjects(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.projects);\n                console.log(data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.projects);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feedback-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"feedback-section-title-cont\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section_title wow fadeInUp\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"This is my project section \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 42\n                                    }, undefined),\n                                    \"our work, view and see the technologies\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"feedback-btn-cont wow fadeInUp\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"slider-arrow feedback-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"images/icons/arrow-left.svg\",\n                                        alt: \"dora_img\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"slider-arrow active feedback-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"images/icons/arrow-right.svg\",\n                                        alt: \"dora_img\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n                    ..._sliderProps__WEBPACK_IMPORTED_MODULE_2__.doraSlider.feedbackSlider,\n                    className: \"swiper feedback-items-cont\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"swiper-wrapper feedback-items wow fadeInUp\",\n                        children: projects && projects.map((e, i)=>{\n                            var _e_image;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                                className: \"swiper-slide feedback-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"project_cards_section\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"project_section_image\",\n                                            src: e === null || e === void 0 ? void 0 : (_e_image = e.image) === null || _e_image === void 0 ? void 0 : _e_image.url,\n                                            alt: \"dora_img\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"This project made by using\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"This project made by using\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feedback, \"KL5sgk8pm0HzOCuFqYY4fikIxrI=\");\n_c = Feedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback); // import axios from 'axios';\n // import React, { useEffect, useState } from 'react'\n // const Projects = () => {\n //     const [services, setServices] = useState(null);\n //     useEffect(() => {\n //       const fetchData = async () => {\n //         try {\n //           const { data } = await axios.get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n //           setServices(data?.user?.projects);\n //           console.log(data.user.projects)\n //         } catch (err) {\n //           console.log(err);\n //         }\n //       };\n //       fetchData();\n //     }, []);\n //   return (\n //     <div>\n //     <h4>This is my projects section</h4>\n //     <div className='project_section'>\n //       {services && services.map((e)=>(\n //         <div className='project_section_mainContainer'>\n //             <img className='project_section_image' src={e?.image?.url} alt=\"\" srcset=\"\" />\n //             <div>\n //                 <p>{e.title}</p>\n //                 <p>{e?.techStack.join(\",\")}</p>\n //             </div>\n //         </div>\n //       ))}\n //     </div>\n //     </div>\n //   )\n // }\n // export default Projects\nvar _c;\n$RefreshReg$(_c, \"Feedback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtDQUNqQixZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixNQUFNO0NBQ04sSUFBSTtDQUVKLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qcz85NzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IGRvcmFTbGlkZXIgfSBmcm9tIFwiLi4vc2xpZGVyUHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IHtcclxuXHJcblxyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIik7XHJcbiAgICAgICAgc2V0UHJvamVjdHMoZGF0YT8udXNlcj8ucHJvamVjdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGE/LnVzZXI/LnByb2plY3RzKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVlZGJhY2stc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2stc2VjdGlvbi10aXRsZS1jb250XCI+XHJcbiAgICAgICAgICB7LyogRmVlZGJhY2sgVGl0bGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fdGl0bGUgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBUaGlzIGlzIG15IHByb2plY3Qgc2VjdGlvbiA8YnIgLz5cclxuICAgICAgICAgICAgICBvdXIgd29yaywgdmlldyBhbmQgc2VlIHRoZSB0ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFNsaWRlciBhcnJvdyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2stYnRuLWNvbnQgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IGZlZWRiYWNrLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2ljb25zL2Fycm93LWxlZnQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImRvcmFfaW1nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IGFjdGl2ZSBmZWVkYmFjay1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImRvcmFfaW1nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICB7Li4uZG9yYVNsaWRlci5mZWVkYmFja1NsaWRlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlciBmZWVkYmFjay1pdGVtcy1jb250XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci13cmFwcGVyIGZlZWRiYWNrLWl0ZW1zIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICB7LyogMDEgZmVlZGJhY2sgaXRlbSBzdGFydCAqL31cclxuICAgICAgICAgICAge3Byb2plY3RzICYmIHByb2plY3RzLm1hcCgoZSwgaSk9PihcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfSBjbGFzc05hbWU9XCJzd2lwZXItc2xpZGUgZmVlZGJhY2staXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9jYXJkc19zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3Rfc2VjdGlvbl9pbWFnZVwiIHNyYz17ZT8uaW1hZ2U/LnVybH0gYWx0PVwiZG9yYV9pbWdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGlzIHByb2plY3QgbWFkZSBieSB1c2luZzwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgcHJvamVjdCBtYWRlIGJ5IHVzaW5nPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG5cclxuLy8gICAgIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKTtcclxuLy8gICAgICAgICAgIHNldFNlcnZpY2VzKGRhdGE/LnVzZXI/LnByb2plY3RzKTtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudXNlci5wcm9qZWN0cylcclxuLy8gICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9O1xyXG4gIFxyXG4vLyAgICAgICBmZXRjaERhdGEoKTtcclxuLy8gICAgIH0sIFtdKTtcclxuXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgPGg0PlRoaXMgaXMgbXkgcHJvamVjdHMgc2VjdGlvbjwvaDQ+XHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9zZWN0aW9uJz5cclxuLy8gICAgICAge3NlcnZpY2VzICYmIHNlcnZpY2VzLm1hcCgoZSk9PihcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdF9zZWN0aW9uX21haW5Db250YWluZXInPlxyXG4vLyAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncHJvamVjdF9zZWN0aW9uX2ltYWdlJyBzcmM9e2U/LmltYWdlPy51cmx9IGFsdD1cIlwiIHNyY3NldD1cIlwiIC8+XHJcbi8vICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8cD57ZS50aXRsZX08L3A+XHJcbi8vICAgICAgICAgICAgICAgICA8cD57ZT8udGVjaFN0YWNrLmpvaW4oXCIsXCIpfTwvcD5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICkpfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFByb2plY3RzXHJcbiJdLCJuYW1lcyI6WyJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsImRvcmFTbGlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmVlZGJhY2siLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImdldCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiYnIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImZlZWRiYWNrU2xpZGVyIiwibWFwIiwiZSIsImkiLCJpbWFnZSIsInVybCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.js\n"));

/***/ })

});