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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sliderProps */ \"./src/sliderProps.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Feedback = ()=>{\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                var _data_user, _data_user1;\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n                setProjects(data === null || data === void 0 ? void 0 : (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.projects);\n                console.log(data === null || data === void 0 ? void 0 : (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.projects);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feedback-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"feedback-section-title-cont\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section_title wow fadeInUp\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"This is my project section \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 42\n                                    }, undefined),\n                                    \"our work, view and see the technologies\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"feedback-btn-cont wow fadeInUp\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"slider-arrow feedback-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"images/icons/arrow-left.svg\",\n                                        alt: \"dora_img\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"slider-arrow active feedback-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"images/icons/arrow-right.svg\",\n                                        alt: \"dora_img\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n                    ..._sliderProps__WEBPACK_IMPORTED_MODULE_2__.doraSlider.feedbackSlider,\n                    className: \"swiper feedback-items-cont\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"swiper-wrapper feedback-items wow fadeInUp\",\n                        children: projects && projects.map((e, i)=>{\n                            var _e_image;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                                className: \"swiper-slide feedback-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"project_cards_section\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"project_section_image\",\n                                            src: e === null || e === void 0 ? void 0 : (_e_image = e.image) === null || _e_image === void 0 ? void 0 : _e_image.url,\n                                            alt: \"dora_img\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"This project made by using\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\components\\\\Projects.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feedback, \"KL5sgk8pm0HzOCuFqYY4fikIxrI=\");\n_c = Feedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback); // import axios from 'axios';\n // import React, { useEffect, useState } from 'react'\n // const Projects = () => {\n //     const [services, setServices] = useState(null);\n //     useEffect(() => {\n //       const fetchData = async () => {\n //         try {\n //           const { data } = await axios.get(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\");\n //           setServices(data?.user?.projects);\n //           console.log(data.user.projects)\n //         } catch (err) {\n //           console.log(err);\n //         }\n //       };\n //       fetchData();\n //     }, []);\n //   return (\n //     <div>\n //     <h4>This is my projects section</h4>\n //     <div className='project_section'>\n //       {services && services.map((e)=>(\n //         <div className='project_section_mainContainer'>\n //             <img className='project_section_image' src={e?.image?.url} alt=\"\" srcset=\"\" />\n //             <div>\n //                 <p>{e.title}</p>\n //                 <p>{e?.techStack.join(\",\")}</p>\n //             </div>\n //         </div>\n //       ))}\n //     </div>\n //     </div>\n //   )\n // }\n // export default Projects\nvar _c;\n$RefreshReg$(_c, \"Feedback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiLE1BQU07Q0FDTixJQUFJO0NBRUosMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzPzk3MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgZG9yYVNsaWRlciB9IGZyb20gXCIuLi9zbGlkZXJQcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKTtcclxuICAgICAgICBzZXRQcm9qZWN0cyhkYXRhPy51c2VyPy5wcm9qZWN0cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YT8udXNlcj8ucHJvamVjdHMpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWVkYmFjay1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFjay1zZWN0aW9uLXRpdGxlLWNvbnRcIj5cclxuICAgICAgICAgIHsvKiBGZWVkYmFjayBUaXRsZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl90aXRsZSB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIFRoaXMgaXMgbXkgcHJvamVjdCBzZWN0aW9uIDxiciAvPlxyXG4gICAgICAgICAgICAgIG91ciB3b3JrLCB2aWV3IGFuZCBzZWUgdGhlIHRlY2hub2xvZ2llc1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU2xpZGVyIGFycm93ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFjay1idG4tY29udCB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgZmVlZGJhY2stbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiZG9yYV9pbWdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgYWN0aXZlIGZlZWRiYWNrLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiZG9yYV9pbWdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgIHsuLi5kb3JhU2xpZGVyLmZlZWRiYWNrU2xpZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyIGZlZWRiYWNrLWl0ZW1zLWNvbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXIgZmVlZGJhY2staXRlbXMgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgIHsvKiAwMSBmZWVkYmFjayBpdGVtIHN0YXJ0ICovfVxyXG4gICAgICAgICAgICB7cHJvamVjdHMgJiYgcHJvamVjdHMubWFwKChlLCBpKT0+KFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZSBmZWVkYmFjay1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X2NhcmRzX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdF9zZWN0aW9uX2ltYWdlXCIgc3JjPXtlPy5pbWFnZT8udXJsfSBhbHQ9XCJkb3JhX2ltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgcHJvamVjdCBtYWRlIGJ5IHVzaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e308L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjaztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcblxyXG4vLyAgICAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlXCIpO1xyXG4vLyAgICAgICAgICAgc2V0U2VydmljZXMoZGF0YT8udXNlcj8ucHJvamVjdHMpO1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS51c2VyLnByb2plY3RzKVxyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH07XHJcbiAgXHJcbi8vICAgICAgIGZldGNoRGF0YSgpO1xyXG4vLyAgICAgfSwgW10pO1xyXG5cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICA8aDQ+VGhpcyBpcyBteSBwcm9qZWN0cyBzZWN0aW9uPC9oND5cclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X3NlY3Rpb24nPlxyXG4vLyAgICAgICB7c2VydmljZXMgJiYgc2VydmljZXMubWFwKChlKT0+KFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0X3NlY3Rpb25fbWFpbkNvbnRhaW5lcic+XHJcbi8vICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwcm9qZWN0X3NlY3Rpb25faW1hZ2UnIHNyYz17ZT8uaW1hZ2U/LnVybH0gYWx0PVwiXCIgc3Jjc2V0PVwiXCIgLz5cclxuLy8gICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxwPntlLnRpdGxlfTwvcD5cclxuLy8gICAgICAgICAgICAgICAgIDxwPntlPy50ZWNoU3RhY2suam9pbihcIixcIil9PC9wPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcclxuIl0sIm5hbWVzIjpbIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiZG9yYVNsaWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJGZWVkYmFjayIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJmZXRjaERhdGEiLCJkYXRhIiwiZ2V0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJiciIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiZmVlZGJhY2tTbGlkZXIiLCJtYXAiLCJlIiwiaSIsImltYWdlIiwidXJsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects.js\n"));

/***/ })

});