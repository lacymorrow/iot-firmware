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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/preact/compat/jsx-dev-runtime.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ \"./src/components/Meta.tsx\");\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/MainLayout */ \"./src/layouts/MainLayout.tsx\");\n/* harmony import */ var _lib_py_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/py/api */ \"./src/lib/py/api.ts\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/config */ \"./src/utils/config.ts\");\n\n/*\n  brand login/logout\n  video autoplay\n  meta\n\tpagination\n\tvotes\n\tsharing\n\tflag\n\tcomments\n\tloading states\n\tSSR/SSG\n\ttype: any\n*/ \n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), data1 = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        fetch('api/profile-data').then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Smartcloud | \".concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].title, \": \").concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].tagline),\n            description: _utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].description\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].title, \": \").concat(_utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].tagline),\n                description: _utils_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].description\n            }, void 0, false, {\n                fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col content-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"device: \",\n                            device.ip\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: _lib_py_api__WEBPACK_IMPORTED_MODULE_4__.getIpAddress,\n                        children: \"Reload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"BR7CYm+yJ7fdylwYc2YVrWcU9Ac=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFZRTs7Ozs7Ozs7Ozs7O0FBQUEsR0FFeUM7QUFFTjtBQUNLO0FBQ0U7QUFDUjs7O0FBRXBDLEdBQUssQ0FBQ00sS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7SUFDbkIsR0FBSyxDQUFtQk4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJPLEtBQUksR0FBYVAsR0FBYyxLQUF6QlEsT0FBTyxHQUFJUixHQUFjO0lBQ3RDLEdBQUssQ0FBMkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDUyxTQUFTLEdBQWdCVCxJQUFlLEtBQTdCVSxVQUFVLEdBQUlWLElBQWU7SUFFL0NDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZTLFVBQVUsQ0FBQyxJQUFJO1FBQ2ZDLEtBQUssQ0FBQyxDQUFrQixtQkFDckJDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7V0FDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBMLElBQUksRUFBSyxDQUFDO1lBQ2ZDLE9BQU8sQ0FBQ0QsSUFBSTtZQUNaRyxVQUFVLENBQUMsS0FBSztRQUNsQixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hQLDJEQUFNO1FBQ0xZLElBQUksOEVBQ0RiLHdEQUFJO1lBQ0hjLEtBQUssRUFBRyxDQUFhLGVBQW1CWCxNQUFjLENBQS9CQSwyREFBWSxFQUFDLENBQUUsS0FBaUIsT0FBZkEsNkRBQWM7WUFDdERhLFdBQVcsRUFBRWIsaUVBQWtCOzs7d0ZBSWxDSCx3REFBSTtnQkFDSGMsS0FBSyxFQUFHLEdBQW1CWCxNQUFjLENBQS9CQSwyREFBWSxFQUFDLENBQUUsS0FBaUIsT0FBZkEsNkRBQWM7Z0JBQ3pDYSxXQUFXLEVBQUViLGlFQUFrQjs7Ozs7O3dGQUdoQ2MsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlEOztnR0FFckVDLENBQUM7OzRCQUFDLENBQVE7NEJBQUNDLE1BQU0sQ0FBQ0MsRUFBRTs7Ozs7OztnR0FDcEJDLENBQU07d0JBQUNDLE9BQU8sRUFBRXJCLHFEQUFZO2tDQUFFLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0MsQ0FBQztHQS9DS0UsS0FBSztLQUFMQSxLQUFLO0FBaURYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIGJyYW5kIGxvZ2luL2xvZ291dFxuICB2aWRlbyBhdXRvcGxheVxuICBtZXRhXG5cdHBhZ2luYXRpb25cblx0dm90ZXNcblx0c2hhcmluZ1xuXHRmbGFnXG5cdGNvbW1lbnRzXG5cdGxvYWRpbmcgc3RhdGVzXG5cdFNTUi9TU0dcblx0dHlwZTogYW55XG4qL1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnO1xuaW1wb3J0IHsgZ2V0SXBBZGRyZXNzIH0gZnJvbSAnLi4vbGliL3B5L2FwaSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKCdhcGkvcHJvZmlsZS1kYXRhJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT17YFNtYXJ0Y2xvdWQgfCAke2NvbmZpZy50aXRsZX06ICR7Y29uZmlnLnRhZ2xpbmV9YH1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17Y29uZmlnLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXtgJHtjb25maWcudGl0bGV9OiAke2NvbmZpZy50YWdsaW5lfWB9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtjb25maWcuZGVzY3JpcHRpb259XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgey8qIDxwPntod0Vycm9yID8gJ0Vycm9yJyA6IGh3SWQgfHwgJ2xvYWRpbmcnfTwvcD4gKi99XG4gICAgICAgIDxwPmRldmljZToge2RldmljZS5pcH08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0SXBBZGRyZXNzfT5SZWxvYWQ8L2J1dHRvbj5cbiAgICAgICAgey8qIDxJcEFkZHJlc3MgLz4gKi99XG4gICAgICAgIHsvKiA8UXJDb2RlIGRhdGE9e2h3SWR9IC8+ICovfVxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi93aWZpXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPExvYWRpbmdCdXR0b25cbiAgICAgICAgICAgIGVuZEljb249ezxTZW5kSWNvbiAvPn1cbiAgICAgICAgICAgIGxvYWRpbmc9eyFod0lkfVxuICAgICAgICAgICAgbG9hZGluZ1Bvc2l0aW9uPVwiZW5kXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFdpRmkgU2V0dXBcbiAgICAgICAgICA8L0xvYWRpbmdCdXR0b24+XG4gICAgICAgIDwvTGluaz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWV0YSIsIkxheW91dCIsImdldElwQWRkcmVzcyIsImNvbmZpZyIsIkluZGV4IiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm1ldGEiLCJ0aXRsZSIsInRhZ2xpbmUiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJkZXZpY2UiLCJpcCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});