/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_4__.WalletAdapterNetwork.Devnet;\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.clusterApiUrl)(network), [\n        network\n    ]);\n    const wallet = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__.PhantomWalletAdapter()\n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {\n            wallets: wallet,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.WalletModalProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wallet-button-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.WalletMultiButton, {\n                            className: \"wallet-button\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1U7QUFDMkM7QUFDZjtBQUNHO0FBSTdCO0FBQ087QUFDSTtBQUdyQyxTQUFTUyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1DLFVBQVVSLDZFQUFvQkEsQ0FBQ1MsTUFBTTtJQUMzQyxNQUFNQyxXQUFXYiw4Q0FBT0EsQ0FBQyxJQUFNTyw4REFBYUEsQ0FBQ0ksVUFBVTtRQUFDQTtLQUFRO0lBRWhFLE1BQU1HLFNBQVNkLDhDQUFPQSxDQUNwQixJQUFNO1lBQ0osSUFBSUksZ0ZBQW9CQTtTQUN6QixFQUNEO1FBQUNPO0tBQVE7SUFHWCxxQkFDRSw4REFBQ1YsNEVBQWtCQTtRQUFDWSxVQUFVQTtrQkFDNUIsNEVBQUNYLHdFQUFjQTtZQUFDYSxTQUFTRDtzQkFDdkIsNEVBQUNULGdGQUFtQkE7O2tDQUNsQiw4REFBQ1c7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNYLDhFQUFpQkE7NEJBQ2xCVyxXQUFVOzs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1I7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdG1pbnRlci8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25Qcm92aWRlciwgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xyXG5pbXBvcnQgeyBQaGFudG9tV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cyc7XHJcbmltcG9ydCB7XHJcbiAgV2FsbGV0TW9kYWxQcm92aWRlcixcclxuICBXYWxsZXRNdWx0aUJ1dHRvbixcclxufSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcclxuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XHJcbmltcG9ydCAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgbmV0d29yayA9IFdhbGxldEFkYXB0ZXJOZXR3b3JrLkRldm5ldDtcclxuICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4gY2x1c3RlckFwaVVybChuZXR3b3JrKSwgW25ldHdvcmtdKTtcclxuXHJcbiAgY29uc3Qgd2FsbGV0ID0gdXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAgbmV3IFBoYW50b21XYWxsZXRBZGFwdGVyKCksXHJcbiAgICBdLFxyXG4gICAgW25ldHdvcmtdXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxyXG4gICAgICA8V2FsbGV0UHJvdmlkZXIgd2FsbGV0cz17d2FsbGV0fT5cclxuICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0LWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nd2FsbGV0LWJ1dHRvbidcclxuICAgICAgICAgICAgPjwvV2FsbGV0TXVsdGlCdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1dhbGxldE1vZGFsUHJvdmlkZXI+XHJcbiAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XHJcbiAgICA8L0Nvbm5lY3Rpb25Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsIldhbGxldE11bHRpQnV0dG9uIiwiY2x1c3RlckFwaVVybCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5ldHdvcmsiLCJEZXZuZXQiLCJlbmRwb2ludCIsIndhbGxldCIsIndhbGxldHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();