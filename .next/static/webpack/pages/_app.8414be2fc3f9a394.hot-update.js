"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DoraContext\": function() { return /* binding */ DoraContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create Context\nconst DoraContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    BLOG: \"BLOG\",\n    COLOR: \"COLOR\",\n    PORTFOLIO_MODAL: \"PORTFOLIO_MODAL\"\n};\nconst { BLOG , COLOR , PORTFOLIO_MODAL  } = type;\n// Initial Value\nconst initialState = {\n    color: \"yellow\",\n    blog: null,\n    blogs: [\n        {\n            id: 1,\n            date: \"23 Oct 2022\",\n            img: \"https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg\",\n            title: \"User interface design or user interface engineering\",\n            catagory: \"UI/UX Design\"\n        },\n        {\n            id: 2,\n            date: \"13 Dec 2022\",\n            img: \"https://neilpatel.com/wp-content/uploads/fly-images/47522/blog-post-image-guide-1200x675-c.jpg\",\n            title: \"Web design encompasses many different skills\",\n            catagory: \"Web Design\"\n        },\n        {\n            id: 3,\n            date: \"23 Dec 2022\",\n            img: \"https://www.rasmussen.edu/images/rasmussenlibraries/blogs/graphic-design-blogs-19f9365b5-450e-4b97-8263-d44fe9a6c941.jpg\",\n            title: \"Jim Morisson Says when the musics over turn off the light\",\n            catagory: \"Web Development\"\n        },\n        {\n            id: 1,\n            date: \"23 Oct 2022\",\n            img: \"https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg\",\n            title: \"User interface design or user interface engineering\",\n            catagory: \"UI/UX Design\"\n        },\n        {\n            id: 2,\n            date: \"13 Dec 2022\",\n            img: \"https://neilpatel.com/wp-content/uploads/fly-images/47522/blog-post-image-guide-1200x675-c.jpg\",\n            title: \"Web design encompasses many different skills\",\n            catagory: \"Web Design\"\n        },\n        {\n            id: 3,\n            date: \"23 Dec 2022\",\n            img: \"https://www.rasmussen.edu/images/rasmussenlibraries/blogs/graphic-design-blogs-19f9365b5-450e-4b97-8263-d44fe9a6c941.jpg\",\n            title: \"Jim Morisson Says when the musics over turn off the light\",\n            catagory: \"Web Development\"\n        }\n    ],\n    portfolio_modal: false\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case BLOG:\n            return {\n                ...state,\n                blog: payload\n            };\n        case PORTFOLIO_MODAL:\n            return {\n                ...state,\n                portfolio_modal: payload\n            };\n        case COLOR:\n            return {\n                ...state,\n                color: payload\n            };\n        default:\n            return state;\n    }\n};\n// Watson State\nconst DoraState = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    // Page Color\n    const colorChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: COLOR,\n            payload: value\n        });\n    }, []);\n    const blogDetails = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: BLOG,\n            payload: value\n        });\n    }, []);\n    const portfolio_modal_show = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIO_MODAL,\n            payload: value\n        });\n    }, []);\n    const { color , blog , blogs , portfolio_modal  } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DoraContext.Provider, {\n        value: {\n            color,\n            colorChange,\n            blogs,\n            blog,\n            blogDetails,\n            portfolio_modal,\n            portfolio_modal_show\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deepak verma\\\\Downloads\\\\dora\\\\dora\\\\src\\\\Context.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DoraState, \"/Rz3UueJB41+qaroOkv7bfWD7AU=\");\n_c = DoraState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoraState);\n\nvar _c;\n$RefreshReg$(_c, \"DoraState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStEO0FBRS9ELGlCQUFpQjtBQUNqQixNQUFNRyw0QkFBY0gsb0RBQWFBO0FBRWpDLE9BQU87QUFDUCxNQUFNSSxPQUFPO0lBQ1hDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxpQkFBaUI7QUFDbkI7QUFDQSxNQUFNLEVBQUVGLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxnQkFBZSxFQUFFLEdBQUdIO0FBRXpDLGdCQUFnQjtBQUNoQixNQUFNSSxlQUFlO0lBQ25CQyxPQUFPO0lBQ1BDLE1BQU0sSUFBSTtJQUNWQyxPQUFPO1FBQ0w7WUFDRUMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7UUFDQTtZQUNFSixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VKLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsVUFBVTtRQUNaO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7UUFDQTtZQUNFSixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VKLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsVUFBVTtRQUNaO0tBQ0Q7SUFDREMsaUJBQWlCLEtBQUs7QUFDeEI7QUFFQSxVQUFVO0FBQ1YsTUFBTUMsVUFBVSxDQUFDQyxPQUFPQyxTQUFXO0lBQ2pDLE1BQU0sRUFBRWhCLEtBQUksRUFBRWlCLFFBQU8sRUFBRSxHQUFHRDtJQUMxQixPQUFRaEI7UUFDTixLQUFLQztZQUNILE9BQU87Z0JBQ0wsR0FBR2MsS0FBSztnQkFDUlQsTUFBTVc7WUFDUjtRQUNGLEtBQUtkO1lBQ0gsT0FBTztnQkFDTCxHQUFHWSxLQUFLO2dCQUNSRixpQkFBaUJJO1lBQ25CO1FBQ0YsS0FBS2Y7WUFDSCxPQUFPO2dCQUNMLEdBQUdhLEtBQUs7Z0JBQ1JWLE9BQU9ZO1lBQ1Q7UUFDRjtZQUNFLE9BQU9GO0lBQ1g7QUFDRjtBQUVBLGVBQWU7QUFDZixNQUFNRyxZQUFZLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDN0IsTUFBTSxDQUFDSixPQUFPSyxTQUFTLEdBQUd0QixpREFBVUEsQ0FBQ2dCLFNBQVNWO0lBRTlDLGFBQWE7SUFDYixNQUFNaUIsY0FBY3hCLGtEQUFXQSxDQUFDLENBQUN5QixRQUFVO1FBQ3pDRixTQUFTO1lBQ1BwQixNQUFNRTtZQUNOZSxTQUFTSztRQUNYO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBYzFCLGtEQUFXQSxDQUFDLENBQUN5QixRQUFVO1FBQ3pDRixTQUFTO1lBQ1BwQixNQUFNQztZQUNOZ0IsU0FBU0s7UUFDWDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLHVCQUF1QjNCLGtEQUFXQSxDQUFDLENBQUN5QixRQUFVO1FBQ2xERixTQUFTO1lBQ1BwQixNQUFNRztZQUNOYyxTQUFTSztRQUNYO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFakIsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRU0sZ0JBQWUsRUFBRSxHQUFHRTtJQUNoRCxxQkFDRSw4REFBQ2hCLFlBQVkwQixRQUFRO1FBQ25CSCxPQUFPO1lBQ0xqQjtZQUNBZ0I7WUFDQWQ7WUFDQUQ7WUFDQWlCO1lBQ0FWO1lBQ0FXO1FBQ0Y7a0JBRUNMOzs7Ozs7QUFHUDtHQXpDTUQ7S0FBQUE7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29udGV4dC5qcz9lYjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIENyZWF0ZSBDb250ZXh0XG5jb25zdCBEb3JhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuLy8gVHlwZVxuY29uc3QgdHlwZSA9IHtcbiAgQkxPRzogXCJCTE9HXCIsXG4gIENPTE9SOiBcIkNPTE9SXCIsXG4gIFBPUlRGT0xJT19NT0RBTDogXCJQT1JURk9MSU9fTU9EQUxcIixcbn07XG5jb25zdCB7IEJMT0csIENPTE9SLCBQT1JURk9MSU9fTU9EQUwgfSA9IHR5cGU7XG5cbi8vIEluaXRpYWwgVmFsdWVcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY29sb3I6IFwieWVsbG93XCIsXG4gIGJsb2c6IG51bGwsXG4gIGJsb2dzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBkYXRlOiBcIjIzIE9jdCAyMDIyXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly90aHVtYnMuZHJlYW1zdGltZS5jb20vYi9ibG9nZ2luZy1ibG9nLWNvbmNlcHRzLWlkZWFzLXdvcmt0YWJsZS1ibG9nZ2luZy1ibG9nLWNvbmNlcHRzLWlkZWFzLXdoaXRlLXdvcmt0YWJsZS0xMTA0MjM0ODIuanBnXCIsXG4gICAgICB0aXRsZTogXCJVc2VyIGludGVyZmFjZSBkZXNpZ24gb3IgdXNlciBpbnRlcmZhY2UgZW5naW5lZXJpbmdcIixcbiAgICAgIGNhdGFnb3J5OiBcIlVJL1VYIERlc2lnblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBkYXRlOiBcIjEzIERlYyAyMDIyXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9uZWlscGF0ZWwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9mbHktaW1hZ2VzLzQ3NTIyL2Jsb2ctcG9zdC1pbWFnZS1ndWlkZS0xMjAweDY3NS1jLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiV2ViIGRlc2lnbiBlbmNvbXBhc3NlcyBtYW55IGRpZmZlcmVudCBza2lsbHNcIixcbiAgICAgIGNhdGFnb3J5OiBcIldlYiBEZXNpZ25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgZGF0ZTogXCIyMyBEZWMgMjAyMlwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vd3d3LnJhc211c3Nlbi5lZHUvaW1hZ2VzL3Jhc211c3NlbmxpYnJhcmllcy9ibG9ncy9ncmFwaGljLWRlc2lnbi1ibG9ncy0xOWY5MzY1YjUtNDUwZS00Yjk3LTgyNjMtZDQ0ZmU5YTZjOTQxLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiSmltIE1vcmlzc29uIFNheXMgd2hlbiB0aGUgbXVzaWNzIG92ZXIgdHVybiBvZmYgdGhlIGxpZ2h0XCIsXG4gICAgICBjYXRhZ29yeTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgZGF0ZTogXCIyMyBPY3QgMjAyMlwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vdGh1bWJzLmRyZWFtc3RpbWUuY29tL2IvYmxvZ2dpbmctYmxvZy1jb25jZXB0cy1pZGVhcy13b3JrdGFibGUtYmxvZ2dpbmctYmxvZy1jb25jZXB0cy1pZGVhcy13aGl0ZS13b3JrdGFibGUtMTEwNDIzNDgyLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiVXNlciBpbnRlcmZhY2UgZGVzaWduIG9yIHVzZXIgaW50ZXJmYWNlIGVuZ2luZWVyaW5nXCIsXG4gICAgICBjYXRhZ29yeTogXCJVSS9VWCBEZXNpZ25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgZGF0ZTogXCIxMyBEZWMgMjAyMlwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vbmVpbHBhdGVsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvZmx5LWltYWdlcy80NzUyMi9ibG9nLXBvc3QtaW1hZ2UtZ3VpZGUtMTIwMHg2NzUtYy5qcGdcIixcbiAgICAgIHRpdGxlOiBcIldlYiBkZXNpZ24gZW5jb21wYXNzZXMgbWFueSBkaWZmZXJlbnQgc2tpbGxzXCIsXG4gICAgICBjYXRhZ29yeTogXCJXZWIgRGVzaWduXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGRhdGU6IFwiMjMgRGVjIDIwMjJcIixcbiAgICAgIGltZzogXCJodHRwczovL3d3dy5yYXNtdXNzZW4uZWR1L2ltYWdlcy9yYXNtdXNzZW5saWJyYXJpZXMvYmxvZ3MvZ3JhcGhpYy1kZXNpZ24tYmxvZ3MtMTlmOTM2NWI1LTQ1MGUtNGI5Ny04MjYzLWQ0NGZlOWE2Yzk0MS5qcGdcIixcbiAgICAgIHRpdGxlOiBcIkppbSBNb3Jpc3NvbiBTYXlzIHdoZW4gdGhlIG11c2ljcyBvdmVyIHR1cm4gb2ZmIHRoZSBsaWdodFwiLFxuICAgICAgY2F0YWdvcnk6IFwiV2ViIERldmVsb3BtZW50XCIsXG4gICAgfSxcbiAgXSxcbiAgcG9ydGZvbGlvX21vZGFsOiBmYWxzZSxcbn07XG5cbi8vIFJlZHVjZXJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBCTE9HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJsb2c6IHBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgUE9SVEZPTElPX01PREFMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcnRmb2xpb19tb2RhbDogcGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBDT0xPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb2xvcjogcGF5bG9hZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gV2F0c29uIFN0YXRlXG5jb25zdCBEb3JhU3RhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIC8vIFBhZ2UgQ29sb3JcbiAgY29uc3QgY29sb3JDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDT0xPUixcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmxvZ0RldGFpbHMgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBCTE9HLFxuICAgICAgcGF5bG9hZDogdmFsdWUsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBwb3J0Zm9saW9fbW9kYWxfc2hvdyA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFBPUlRGT0xJT19NT0RBTCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBjb2xvciwgYmxvZywgYmxvZ3MsIHBvcnRmb2xpb19tb2RhbCB9ID0gc3RhdGU7XG4gIHJldHVybiAoXG4gICAgPERvcmFDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb2xvcixcbiAgICAgICAgY29sb3JDaGFuZ2UsXG4gICAgICAgIGJsb2dzLFxuICAgICAgICBibG9nLFxuICAgICAgICBibG9nRGV0YWlscyxcbiAgICAgICAgcG9ydGZvbGlvX21vZGFsLFxuICAgICAgICBwb3J0Zm9saW9fbW9kYWxfc2hvdyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRG9yYUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb3JhU3RhdGU7XG5leHBvcnQgeyBEb3JhQ29udGV4dCB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJEb3JhQ29udGV4dCIsInR5cGUiLCJCTE9HIiwiQ09MT1IiLCJQT1JURk9MSU9fTU9EQUwiLCJpbml0aWFsU3RhdGUiLCJjb2xvciIsImJsb2ciLCJibG9ncyIsImlkIiwiZGF0ZSIsImltZyIsInRpdGxlIiwiY2F0YWdvcnkiLCJwb3J0Zm9saW9fbW9kYWwiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiRG9yYVN0YXRlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImNvbG9yQ2hhbmdlIiwidmFsdWUiLCJibG9nRGV0YWlscyIsInBvcnRmb2xpb19tb2RhbF9zaG93IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Context.js\n"));

/***/ })

});