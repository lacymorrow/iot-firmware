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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/preact/compat/jsx-dev-runtime.mjs\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/lab/LoadingButton */ \"./node_modules/@mui/lab/LoadingButton/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr/immutable */ \"./node_modules/swr/immutable/dist/index.mjs\");\n/* harmony import */ var _components_IpAdress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/IpAdress */ \"./src/components/IpAdress.tsx\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Meta */ \"./src/components/Meta.tsx\");\n/* harmony import */ var _components_QrCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/QrCode */ \"./src/components/QrCode.tsx\");\n/* harmony import */ var _components_useDevice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/useDevice */ \"./src/components/useDevice.ts\");\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/MainLayout */ \"./src/layouts/MainLayout.tsx\");\n/* harmony import */ var _lib_py_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/py/api */ \"./src/lib/py/api.ts\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/config */ \"./src/utils/config.ts\");\n\n\n/*\n  brand login/logout\n  video autoplay\n  meta\n\tpagination\n\tvotes\n\tsharing\n\tflag\n\tcomments\n\tloading states\n\tSSR/SSG\n\ttype: any\n*/ \n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/ip-address\", _asyncToGenerator(_Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var ipAddress;\n        return _Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    ipAddress = (0,_lib_py_api__WEBPACK_IMPORTED_MODULE_10__.getIpAddress)();\n                    return _ctx.abrupt(\"return\", ipAddress);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }))), ipData = ref.data;\n    var device = (0,_components_useDevice__WEBPACK_IMPORTED_MODULE_8__[\"default\"])().device;\n    var ref1 = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('/hardware-id', function() {\n        var hwid = (0,_lib_py_api__WEBPACK_IMPORTED_MODULE_10__.getHardwareId)();\n        return hwid;\n    }), hwId = ref1.data, hwError = ref1.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            title: \"Smartcloud | \".concat(_utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].title, \": \").concat(_utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].tagline),\n            description: _utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].description\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                title: \"\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].title, \": \").concat(_utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].tagline),\n                description: _utils_config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].description\n            }, void 0, false, {\n                fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col content-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: hwError ? 'Error' : hwId || 'loading'\n                    }, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"device: \",\n                            device.ip,\n                            \" data \",\n                            ipData\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: _asyncToGenerator(_Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var ipAddress;\n                            return _Users_tmorrow_repo_iot_cloud_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return (0,_lib_py_api__WEBPACK_IMPORTED_MODULE_10__.getIpAddress)();\n                                    case 2:\n                                        ipAddress = _ctx.sent;\n                                        return _ctx.abrupt(\"return\", ipAddress);\n                                    case 4:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })),\n                        children: \"Reload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_IpAdress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_QrCode__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        data: hwId\n                    }, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/wifi\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, void 0, void 0),\n                            loading: !hwId,\n                            loadingPosition: \"end\",\n                            variant: \"contained\",\n                            children: \"WiFi Setup\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tmorrow/repo/iot-cloud/src/pages/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"IjtUyO0C9vLvc/BRsdGCYmiXHuk=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _components_useDevice__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        swr_immutable__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQVlFOzs7Ozs7Ozs7Ozs7QUFBQSxHQUU2QztBQUNHO0FBQ3RCO0FBQ0o7QUFDbUI7QUFFRztBQUNUO0FBQ0k7QUFDTTtBQUNMO0FBQ2lCO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxHQUFLLENBQUNhLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBb0JWLEdBSXZCLEdBSnVCQSwrQ0FBTSxDQUFFLENBQVcseUtBQUcsUUFBUSxXQUFJLENBQUM7WUFFcERXLFNBQVM7Ozs7b0JBQVRBLFNBQVMsR0FBR0gsMERBQVk7aURBQ3ZCRyxTQUFTOzs7Ozs7SUFDbEIsQ0FBQyxLQUphQyxNQUFNLEdBQUtaLEdBSXZCLENBSk1hLElBQUk7SUFLWixHQUFLLENBQUdDLE1BQU0sR0FBS1QsaUVBQVMsR0FBcEJTLE1BQU07SUFDZCxHQUFLLENBQWtDYixJQUdyQyxHQUhxQ0EseURBQWUsQ0FBQyxDQUFjLGVBQUUsUUFDekUsR0FEK0UsQ0FBQztRQUM1RSxHQUFLLENBQUNjLElBQUksR0FBR1IsMkRBQWE7UUFDMUIsTUFBTSxDQUFDUSxJQUFJO0lBQ2IsQ0FBQyxHQUhhQyxJQUFJLEdBQXFCZixJQUdyQyxDQUhNWSxJQUFJLEVBQWVJLE9BQU8sR0FBS2hCLElBR3JDLENBSGtCaUIsS0FBSztJQUt6QixNQUFNLDZFQUNIWiwyREFBTTtRQUNMYSxJQUFJLDhFQUNEaEIsd0RBQUk7WUFDSGlCLEtBQUssRUFBRyxDQUFhLGVBQW1CWCxNQUFjLENBQS9CQSw0REFBWSxFQUFDLENBQUUsS0FBaUIsT0FBZkEsOERBQWM7WUFDdERhLFdBQVcsRUFBRWIsa0VBQWtCOzs7d0ZBSWxDTix3REFBSTtnQkFDSGlCLEtBQUssRUFBRyxHQUFtQlgsTUFBYyxDQUEvQkEsNERBQVksRUFBQyxDQUFFLEtBQWlCLE9BQWZBLDhEQUFjO2dCQUN6Q2EsV0FBVyxFQUFFYixrRUFBa0I7Ozs7Ozt3RkFHaENjLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5RDs7Z0dBQ3JFQyxDQUFDO2tDQUFFUixPQUFPLEdBQUcsQ0FBTyxTQUFHRCxJQUFJLElBQUksQ0FBUzs7Ozs7O2dHQUN4Q1MsQ0FBQzs7NEJBQUMsQ0FDTzs0QkFBQ1gsTUFBTSxDQUFDWSxFQUFFOzRCQUFDLENBQU07NEJBQUNkLE1BQU07Ozs7Ozs7Z0dBRWpDZSxDQUFNO3dCQUNMQyxPQUFPLDZKQUFFLFFBQVEsV0FBSSxDQUFDO2dDQUNkakIsU0FBUzs7Ozs7K0NBQVNILDBEQUFZOzt3Q0FBOUJHLFNBQVM7cUVBQ1JBLFNBQVM7Ozs7Ozt3QkFDbEIsQ0FBQztrQ0FDRixDQUVEOzs7Ozs7Z0dBQ0NULDREQUFTOzs7OztnR0FDVEUsMERBQU07d0JBQUNTLElBQUksRUFBRUcsSUFBSTs7Ozs7O2dHQUNqQmpCLGtEQUFJO3dCQUFDOEIsSUFBSSxFQUFDLENBQU87d0JBQUNDLFFBQVE7OEdBQ3hCaEMsK0RBQWE7NEJBQ1ppQyxPQUFPLDhFQUFHbEMsaUVBQVE7NEJBQ2xCbUMsT0FBTyxHQUFHaEIsSUFBSTs0QkFDZGlCLGVBQWUsRUFBQyxDQUFLOzRCQUNyQkMsT0FBTyxFQUFDLENBQVc7c0NBQ3BCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQXRES3hCLEtBQUs7O1FBQ2dCViwyQ0FBTTtRQUtaSyw2REFBUztRQUNXSixxREFBZTs7O0tBUGxEUyxLQUFLO0FBd0RYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIGJyYW5kIGxvZ2luL2xvZ291dFxuICB2aWRlbyBhdXRvcGxheVxuICBtZXRhXG5cdHBhZ2luYXRpb25cblx0dm90ZXNcblx0c2hhcmluZ1xuXHRmbGFnXG5cdGNvbW1lbnRzXG5cdGxvYWRpbmcgc3RhdGVzXG5cdFNTUi9TU0dcblx0dHlwZTogYW55XG4qL1xuXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kJztcbmltcG9ydCBMb2FkaW5nQnV0dG9uIGZyb20gJ0BtdWkvbGFiL0xvYWRpbmdCdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB1c2VTV1JJbW11dGFibGUgZnJvbSAnc3dyL2ltbXV0YWJsZSc7XG5cbmltcG9ydCBJcEFkZHJlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9JcEFkcmVzcyc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnO1xuaW1wb3J0IFFyQ29kZSBmcm9tICcuLi9jb21wb25lbnRzL1FyQ29kZSc7XG5pbXBvcnQgdXNlRGV2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlRGV2aWNlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcbmltcG9ydCB7IGdldEhhcmR3YXJlSWQsIGdldElwQWRkcmVzcyB9IGZyb20gJy4uL2xpYi9weS9hcGknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi91dGlscy9jb25maWcnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBpcERhdGEgfSA9IHVzZVNXUihgL2lwLWFkZHJlc3NgLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gYXdhaXQgcHljYWxsKCdJUCBJUz8nKTtcbiAgICBjb25zdCBpcEFkZHJlc3MgPSBnZXRJcEFkZHJlc3MoKTtcbiAgICByZXR1cm4gaXBBZGRyZXNzO1xuICB9KTtcbiAgY29uc3QgeyBkZXZpY2UgfSA9IHVzZURldmljZSgpO1xuICBjb25zdCB7IGRhdGE6IGh3SWQsIGVycm9yOiBod0Vycm9yIH0gPSB1c2VTV1JJbW11dGFibGUoJy9oYXJkd2FyZS1pZCcsICgpID0+IHtcbiAgICBjb25zdCBod2lkID0gZ2V0SGFyZHdhcmVJZCgpO1xuICAgIHJldHVybiBod2lkO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPXtgU21hcnRjbG91ZCB8ICR7Y29uZmlnLnRpdGxlfTogJHtjb25maWcudGFnbGluZX1gfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb25maWcuZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e2Ake2NvbmZpZy50aXRsZX06ICR7Y29uZmlnLnRhZ2xpbmV9YH1cbiAgICAgICAgZGVzY3JpcHRpb249e2NvbmZpZy5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb250ZW50LWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cD57aHdFcnJvciA/ICdFcnJvcicgOiBod0lkIHx8ICdsb2FkaW5nJ308L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIGRldmljZToge2RldmljZS5pcH0gZGF0YSB7aXBEYXRhfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpcEFkZHJlc3MgPSBhd2FpdCBnZXRJcEFkZHJlc3MoKTtcbiAgICAgICAgICAgIHJldHVybiBpcEFkZHJlc3M7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlbG9hZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPElwQWRkcmVzcyAvPlxuICAgICAgICA8UXJDb2RlIGRhdGE9e2h3SWR9IC8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd2lmaVwiIHBhc3NIcmVmPlxuICAgICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgICBlbmRJY29uPXs8U2VuZEljb24gLz59XG4gICAgICAgICAgICBsb2FkaW5nPXshaHdJZH1cbiAgICAgICAgICAgIGxvYWRpbmdQb3NpdGlvbj1cImVuZFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBXaUZpIFNldHVwXG4gICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlNlbmRJY29uIiwiTG9hZGluZ0J1dHRvbiIsIkxpbmsiLCJ1c2VTV1IiLCJ1c2VTV1JJbW11dGFibGUiLCJJcEFkZHJlc3MiLCJNZXRhIiwiUXJDb2RlIiwidXNlRGV2aWNlIiwiTGF5b3V0IiwiZ2V0SGFyZHdhcmVJZCIsImdldElwQWRkcmVzcyIsImNvbmZpZyIsIkluZGV4IiwiaXBBZGRyZXNzIiwiaXBEYXRhIiwiZGF0YSIsImRldmljZSIsImh3aWQiLCJod0lkIiwiaHdFcnJvciIsImVycm9yIiwibWV0YSIsInRpdGxlIiwidGFnbGluZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlwIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJwYXNzSHJlZiIsImVuZEljb24iLCJsb2FkaW5nIiwibG9hZGluZ1Bvc2l0aW9uIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});