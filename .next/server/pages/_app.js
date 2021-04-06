module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-typist/dist/Typist.css":
/*!***************************************************!*\
  !*** ./node_modules/react-typist/dist/Typist.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10eXBpc3QvZGlzdC9UeXBpc3QuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-typist/dist/Typist.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./pages/components/api.js\");\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-typist/dist/Typist.css */ \"./node_modules/react-typist/dist/Typist.css\");\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/hectorandac/Documents/Projects/auctions/auctions-front-end/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  new _components_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        main: \"#035263\",\n        contrastText: '#fff'\n      },\n      secondary: {\n        main: \"#035263\"\n      },\n      error: {\n        main: \"#EE6C4D\"\n      },\n      warning: {\n        main: \"#ff9800\"\n      },\n      info: {\n        main: \"#2196f3\"\n      },\n      success: {\n        main: \"#69995D\"\n      }\n    }\n  });\n  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 10\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"Need help?\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    charSet: \"UTF-8\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Anton&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Raleway&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  })), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcGkiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJ3YXJuaW5nIiwiaW5mbyIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLE1BQUlDLHVEQUFKO0FBRUEsUUFBTUMsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BDLFlBQUksRUFBRSxTQURDO0FBRVBDLG9CQUFZLEVBQUU7QUFGUCxPQURGO0FBS1BDLGVBQVMsRUFBRTtBQUNURixZQUFJLEVBQUU7QUFERyxPQUxKO0FBUVBHLFdBQUssRUFBRTtBQUNMSCxZQUFJLEVBQUU7QUFERCxPQVJBO0FBV1BJLGFBQU8sRUFBRTtBQUNQSixZQUFJLEVBQUU7QUFEQyxPQVhGO0FBY1BLLFVBQUksRUFBRTtBQUNKTCxZQUFJLEVBQUU7QUFERixPQWRDO0FBaUJQTSxhQUFPLEVBQUU7QUFDUE4sWUFBSSxFQUFFO0FBREM7QUFqQkY7QUFEa0IsR0FBRCxDQUE1QjtBQXdCQSxTQUFPLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVKLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsNkVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLHlEQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxXQUFPLEVBQUMsT0FBL0M7QUFBdUQsUUFBSSxFQUFDLDJFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxRQUFJLEVBQUMsaUZBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sUUFBSSxFQUFDLDZEQUFYO0FBQXlFLE9BQUcsRUFBQyxZQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRTtBQUFNLFFBQUksRUFBQywyRUFBWDtBQUF1RixPQUFHLEVBQUMsWUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBTSxRQUFJLEVBQUMsK0RBQVg7QUFBMkUsT0FBRyxFQUFDLFlBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURLLEVBWUwsTUFBQyxTQUFELGVBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpLLENBQVA7QUFjRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBpIGZyb20gJy4vY29tcG9uZW50cy9hcGknO1xuaW1wb3J0ICdyZWFjdC10eXBpc3QvZGlzdC9UeXBpc3QuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIG5ldyBBcGkoKTtcblxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46IFwiIzAzNTI2M1wiLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBtYWluOiBcIiMwMzUyNjNcIlxuICAgICAgfSxcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1haW46IFwiI0VFNkM0RFwiXG4gICAgICB9LFxuICAgICAgd2FybmluZzoge1xuICAgICAgICBtYWluOiBcIiNmZjk4MDBcIlxuICAgICAgfSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgbWFpbjogXCIjMjE5NmYzXCIsXG4gICAgICB9LFxuICAgICAgc3VjY2Vzczoge1xuICAgICAgICBtYWluOiBcIiM2OTk5NURcIlxuICAgICAgfVxuICAgIH0sXG4gIH0pOyAgXG5cbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TmVlZCBoZWxwPzwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkrU0MmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1RoZW1lUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/api.js":
/*!*********************************!*\
  !*** ./pages/components/api.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Api; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Api {\n  constructor() {\n    Api.axiosInstance = this.loadAxios();\n    Api.cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2___default.a();\n  }\n\n  static signIn(email, password, onSuccess, onFailure, onStart, onFinish) {\n    onStart();\n    var data = {\n      email: email,\n      password: password\n    };\n    Api.axiosInstance.post(`${\"http://10.147.20.190:3000/api/v1\"}/auth/sign_in`, data).then(function (response) {\n      onSuccess(response);\n      Api.cookies.set('access-token', response.headers['access-token'], {\n        path: '/'\n      });\n      Api.cookies.set('client', response.headers['client'], {\n        path: '/'\n      });\n      Api.cookies.set('uid', response.headers['uid'], {\n        path: '/'\n      });\n      Api.cookies.set('role', response.data.data.roles_list[0], {\n        path: '/'\n      });\n    }).catch(function (error) {\n      console.log(error);\n      onFailure(error.response.data.errors);\n    });\n    onFinish();\n  }\n\n  static userLoggedIn() {\n    return Api.cookies.get('access-token') != undefined && Api.cookies.get('client') != undefined && Api.cookies.get('uid') != undefined && Api.cookies.get('role') != undefined;\n  }\n\n  loadAxios() {\n    const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create();\n    axiosInstance.interceptors.request.use(config => {\n      config.headers = {\n        'access-token': Api.cookies.get('token') == undefined ? '' : Api.cookies.get('token'),\n        'client': Api.cookies.get('client') == undefined ? '' : Api.cookies.get('client'),\n        'uid': Api.cookies.get('uid') == undefined ? '' : Api.cookies.get('uid')\n      };\n      return config;\n    }, error => Promise.reject(error));\n    return axiosInstance;\n  }\n\n}\n\n_defineProperty(Api, \"axiosInstance\", void 0);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2FwaS5qcz8yMjAyIl0sIm5hbWVzIjpbIkFwaSIsImNvbnN0cnVjdG9yIiwiYXhpb3NJbnN0YW5jZSIsImxvYWRBeGlvcyIsImNvb2tpZXMiLCJDb29raWVzIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsIm9uU3RhcnQiLCJvbkZpbmlzaCIsImRhdGEiLCJwb3N0IiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsInNldCIsImhlYWRlcnMiLCJwYXRoIiwicm9sZXNfbGlzdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwidXNlckxvZ2dlZEluIiwiZ2V0IiwidW5kZWZpbmVkIiwiYXhpb3MiLCJjcmVhdGUiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiUHJvbWlzZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEdBQU4sQ0FBVTtBQUl2QkMsYUFBVyxHQUFHO0FBQ1pELE9BQUcsQ0FBQ0UsYUFBSixHQUFvQixLQUFLQyxTQUFMLEVBQXBCO0FBQ0FILE9BQUcsQ0FBQ0ksT0FBSixHQUFjLElBQUlDLHVEQUFKLEVBQWQ7QUFDRDs7QUFFRCxTQUFPQyxNQUFQLENBQWNDLEtBQWQsRUFBcUJDLFFBQXJCLEVBQStCQyxTQUEvQixFQUEwQ0MsU0FBMUMsRUFBcURDLE9BQXJELEVBQThEQyxRQUE5RCxFQUF3RTtBQUN0RUQsV0FBTztBQUNQLFFBQUlFLElBQUksR0FBRztBQUNUTixXQUFLLEVBQUVBLEtBREU7QUFFVEMsY0FBUSxFQUFFQTtBQUZELEtBQVg7QUFJQVIsT0FBRyxDQUFDRSxhQUFKLENBQWtCWSxJQUFsQixDQUF3QixHQUFFQyxrQ0FBZ0MsZUFBMUQsRUFBMEVGLElBQTFFLEVBQWdGRyxJQUFoRixDQUFxRixVQUFVQyxRQUFWLEVBQW9CO0FBQ3ZHUixlQUFTLENBQUNRLFFBQUQsQ0FBVDtBQUNBakIsU0FBRyxDQUFDSSxPQUFKLENBQVljLEdBQVosQ0FBZ0IsY0FBaEIsRUFBZ0NELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixjQUFqQixDQUFoQyxFQUFrRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFsRTtBQUNBcEIsU0FBRyxDQUFDSSxPQUFKLENBQVljLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixRQUFqQixDQUExQixFQUFzRDtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUF0RDtBQUNBcEIsU0FBRyxDQUFDSSxPQUFKLENBQVljLEdBQVosQ0FBZ0IsS0FBaEIsRUFBdUJELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixLQUFqQixDQUF2QixFQUFnRDtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFoRDtBQUNBcEIsU0FBRyxDQUFDSSxPQUFKLENBQVljLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JELFFBQVEsQ0FBQ0osSUFBVCxDQUFjQSxJQUFkLENBQW1CUSxVQUFuQixDQUE4QixDQUE5QixDQUF4QixFQUEwRDtBQUFFRCxZQUFJLEVBQUU7QUFBUixPQUExRDtBQUNELEtBTkQsRUFNR0UsS0FOSCxDQU1TLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FiLGVBQVMsQ0FBQ2EsS0FBSyxDQUFDTixRQUFOLENBQWVKLElBQWYsQ0FBb0JhLE1BQXJCLENBQVQ7QUFDRCxLQVREO0FBVUFkLFlBQVE7QUFDVDs7QUFFRCxTQUFPZSxZQUFQLEdBQXNCO0FBQ3BCLFdBQU8zQixHQUFHLENBQUNJLE9BQUosQ0FBWXdCLEdBQVosQ0FBZ0IsY0FBaEIsS0FBbUNDLFNBQW5DLElBQWdEN0IsR0FBRyxDQUFDSSxPQUFKLENBQVl3QixHQUFaLENBQWdCLFFBQWhCLEtBQTZCQyxTQUE3RSxJQUEwRjdCLEdBQUcsQ0FBQ0ksT0FBSixDQUFZd0IsR0FBWixDQUFnQixLQUFoQixLQUEwQkMsU0FBcEgsSUFBaUk3QixHQUFHLENBQUNJLE9BQUosQ0FBWXdCLEdBQVosQ0FBZ0IsTUFBaEIsS0FBMkJDLFNBQW5LO0FBQ0Q7O0FBRUQxQixXQUFTLEdBQUc7QUFDVixVQUFNRCxhQUFhLEdBQUc0Qiw0Q0FBSyxDQUFDQyxNQUFOLEVBQXRCO0FBRUE3QixpQkFBYSxDQUFDOEIsWUFBZCxDQUEyQkMsT0FBM0IsQ0FBbUNDLEdBQW5DLENBQ0VDLE1BQU0sSUFBSTtBQUNSQSxZQUFNLENBQUNoQixPQUFQLEdBQWlCO0FBQ2Ysd0JBQWdCbkIsR0FBRyxDQUFDSSxPQUFKLENBQVl3QixHQUFaLENBQWdCLE9BQWhCLEtBQTRCQyxTQUE1QixHQUF3QyxFQUF4QyxHQUE2QzdCLEdBQUcsQ0FBQ0ksT0FBSixDQUFZd0IsR0FBWixDQUFnQixPQUFoQixDQUQ5QztBQUVmLGtCQUFVNUIsR0FBRyxDQUFDSSxPQUFKLENBQVl3QixHQUFaLENBQWdCLFFBQWhCLEtBQTZCQyxTQUE3QixHQUF5QyxFQUF6QyxHQUE4QzdCLEdBQUcsQ0FBQ0ksT0FBSixDQUFZd0IsR0FBWixDQUFnQixRQUFoQixDQUZ6QztBQUdmLGVBQU81QixHQUFHLENBQUNJLE9BQUosQ0FBWXdCLEdBQVosQ0FBZ0IsS0FBaEIsS0FBMEJDLFNBQTFCLEdBQXNDLEVBQXRDLEdBQTJDN0IsR0FBRyxDQUFDSSxPQUFKLENBQVl3QixHQUFaLENBQWdCLEtBQWhCO0FBSG5DLE9BQWpCO0FBTUEsYUFBT08sTUFBUDtBQUNELEtBVEgsRUFVRVosS0FBSyxJQUFJYSxPQUFPLENBQUNDLE1BQVIsQ0FBZWQsS0FBZixDQVZYO0FBYUEsV0FBT3JCLGFBQVA7QUFDRDs7QUFqRHNCOztnQkFBSkYsRyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcblxuICBzdGF0aWMgYXhpb3NJbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBBcGkuYXhpb3NJbnN0YW5jZSA9IHRoaXMubG9hZEF4aW9zKCk7XG4gICAgQXBpLmNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICB9XG5cbiAgc3RhdGljIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBvblN0YXJ0LCBvbkZpbmlzaCkge1xuICAgIG9uU3RhcnQoKTtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH1cbiAgICBBcGkuYXhpb3NJbnN0YW5jZS5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2F1dGgvc2lnbl9pbmAsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgQXBpLmNvb2tpZXMuc2V0KCdhY2Nlc3MtdG9rZW4nLCByZXNwb25zZS5oZWFkZXJzWydhY2Nlc3MtdG9rZW4nXSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICBBcGkuY29va2llcy5zZXQoJ2NsaWVudCcsIHJlc3BvbnNlLmhlYWRlcnNbJ2NsaWVudCddLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgIEFwaS5jb29raWVzLnNldCgndWlkJywgcmVzcG9uc2UuaGVhZGVyc1sndWlkJ10sIHsgcGF0aDogJy8nIH0pO1xuICAgICAgQXBpLmNvb2tpZXMuc2V0KCdyb2xlJywgcmVzcG9uc2UuZGF0YS5kYXRhLnJvbGVzX2xpc3RbMF0sIHsgcGF0aDogJy8nIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBvbkZhaWx1cmUoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgIH0pO1xuICAgIG9uRmluaXNoKCk7XG4gIH1cblxuICBzdGF0aWMgdXNlckxvZ2dlZEluKCkge1xuICAgIHJldHVybiBBcGkuY29va2llcy5nZXQoJ2FjY2Vzcy10b2tlbicpICE9IHVuZGVmaW5lZCAmJiBBcGkuY29va2llcy5nZXQoJ2NsaWVudCcpICE9IHVuZGVmaW5lZCAmJiBBcGkuY29va2llcy5nZXQoJ3VpZCcpICE9IHVuZGVmaW5lZCAmJiBBcGkuY29va2llcy5nZXQoJ3JvbGUnKSAhPSB1bmRlZmluZWRcbiAgfVxuXG4gIGxvYWRBeGlvcygpIHtcbiAgICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XG4gIFxuICAgIGF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgICAgY29uZmlnID0+IHtcbiAgICAgICAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IEFwaS5jb29raWVzLmdldCgndG9rZW4nKSA9PSB1bmRlZmluZWQgPyAnJyA6IEFwaS5jb29raWVzLmdldCgndG9rZW4nKSxcbiAgICAgICAgICAnY2xpZW50JzogQXBpLmNvb2tpZXMuZ2V0KCdjbGllbnQnKSA9PSB1bmRlZmluZWQgPyAnJyA6IEFwaS5jb29raWVzLmdldCgnY2xpZW50JyksXG4gICAgICAgICAgJ3VpZCc6IEFwaS5jb29raWVzLmdldCgndWlkJykgPT0gdW5kZWZpbmVkID8gJycgOiBBcGkuY29va2llcy5nZXQoJ3VpZCcpXG4gICAgICAgIH07XG4gIFxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICk7XG4gIFxuICAgIHJldHVybiBheGlvc0luc3RhbmNlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/api.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"universal-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtY29va2llXCI/YmQ0NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1bml2ZXJzYWwtY29va2llLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///universal-cookie\n");

/***/ })

/******/ });