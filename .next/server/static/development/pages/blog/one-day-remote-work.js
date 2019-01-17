module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog",
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/about",
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/victorkernes",
    target: "_blank",
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Twitter"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\xA9 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3378642848",
    css: "@import url('https://rsms.me/inter/inter-ui.css');footer.jsx-3378642848{text-align:center;}p.jsx-3378642848{font-size:1.125rem;font-weight:normal;color:#595959;line-height:1.5;padding-bottom:18px;font-family:'Inter UI',sans-serif;margin:0;}ul.jsx-3378642848{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:0;margin:0;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3378642848{list-style:none;padding-right:1rem;}a.jsx-3378642848{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;color:#555556;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3378642848:hover{color:#2455c3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVYyxBQUVvRCxBQUU3QixBQUdDLEFBU0MsQUFNSixBQUlJLEFBS04sY0FDaEIsRUFUcUIsRUFsQnJCLENBR3FCLGdCQWdCckIsR0FmZ0IsY0FDRSxnQkFDSSxvQkFDZSxjQUt6QixBQVVJLFVBVEwsSUFVWSxLQVRBLENBTlosU0FDWCxtQ0FlQSxLQVRBIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8bmF2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PHA+PGEgaHJlZj1cIi9ibG9nXCI+QmxvZzwvYT48L3A+PC9saT5cbiAgICAgICAgPGxpPjxwPjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L3A+PC9saT5cbiAgICAgICAgPGxpPjxwPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3ZpY3Rvcmtlcm5lc1wiIHRhcmdldD1cIl9ibGFua1wiPlR3aXR0ZXI8L2E+PC9wPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxwPsKpIDIwMTk8L3A+XG4gIDxzdHlsZSBqc3g+e2BcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vcnNtcy5tZS9pbnRlci9pbnRlci11aS5jc3MnKTtcbiAgZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBVSScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgfVxuICBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBjb2xvcjogIzU1NTU1NjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMyNDU1YzM7XG4gIH1cbiAgYH08L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2249175750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2249175750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Victor Kernes")), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2249175750",
    css: "*.jsx-2249175750{margin:0;padding:0;}.container.jsx-2249175750{max-width:1080px;margin:0 auto;}.content.jsx-2249175750{max-width:1080px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHa0IsQUFJUSxBQUlBLFNBUFAsUUFJSSxBQUlBLEVBUGhCLFlBSUEsQUFJQSIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlZpY3RvciBLZXJuZXM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3Rlci8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Layout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/RemotePost.js":
/*!**********************************!*\
  !*** ./components/RemotePost.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/RemotePost.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RemotePost =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemotePost, _React$Component);

  function RemotePost() {
    _classCallCheck(this, RemotePost);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemotePost).apply(this, arguments));
  }

  _createClass(RemotePost, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2371165684" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "http://localhost:3000/blog/one-day-remote-work",
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, "One Day of Remote Work")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684" + " " + "post-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "December 21, 2018 \xB7 3 min")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Yesterday, I had the luxury of working of from home to make sure I received a Christmas package. I say \u201Cluxury\u201D because I understand that having the option to work from home is not available to everyone."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "For the past ten years of my working life, I never had the chance to do this. Nor did I ever think about it. I\u2019m very lucky to work for a company that offers this. Here are my thoughts of how yesterday went:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Communication"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Lots of communication was done via Slack and that felt somewhat overwhelming but also productive. Most of the conversations had would normally have been through a \"tap on the shoulder\u201D if I was in the office. This was good and did not hinder productivity.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Noise"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "The sound was different. It was quiet inside my apartment compared to the office downtown (honk, honk!). I was free to play videos without needing headphones. My computer was allowed to play the sounds of delightful notifications that were created by Sound Designers\u2014the most important being Deliveries, as that\u2019s how I was tracking the updates for my package.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Productivity"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "I felt that this was my most productive day by far. I designed three different parts of a major project and iterated on those designs rapidly. I also spent time writing code for this project, trying to make sure we were consistent with our styling throughout as we\u2019ve have over 4 different engineers contribute on the frontend.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Focus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Staying focused throughout the entire workday is hard. It rarely happens. I did notice, however, that being outside of the office helped provide longer periods of focus. This seemed to have occurred because I was alone. That sounds sad, but it\u2019s the truth. Usually, I do not like being alone. I started feeling lonely around 2 o\u2019clock. Around 3 o\u2019clock my wife came home and that helped. Then a meeting with our design team at 4 o\u2019clock helped remove the feeling of loneliness entirely. I\u2019m so thankful to work with an amazing team.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Food"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "This was probably the hardest part of not working at our downtown office. Seems silly, but I get hungry throughout the day. Often. I was fresh out of greek yogurt, berries, apples, salted almonds (sike, we never have healthy snacks at home). So, I ended up snacking on some less-healthy food and left it at that.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Overall"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "My goal is to become remote in the upcoming years and having this small taste provided a delightful insight into the future. Just need to keep that refrigerator packed with some more snacks."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2371165684" + " " + "post-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u2014 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/victorkernes",
        target: "_blank",
        className: "jsx-2371165684",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "@victorkernes"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2371165684",
        css: "@import url('https://rsms.me/inter/inter-ui.css');*.jsx-2371165684{padding:0;margin:0;font-family:'Inter UI',sans-serif;}div.jsx-2371165684{width:100%;background:#fff;border-radius:4px;}section.jsx-2371165684{margin-bottom:24px;}h2.jsx-2371165684{font-size:40px;font-weight:800;color:#111112;padding-bottom:8px;}h4.jsx-2371165684{font-size:24px;padding-bottom:8px;}p.jsx-2371165684{font-size:20px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}ul.jsx-2371165684{list-style:none;}li.jsx-2371165684{font-size:20px;font-weight:normal;color:black;line-height:32px;}span.jsx-2371165684{font-size:16px;color:#595959;text-transform:uppercase;}a.jsx-2371165684{font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:600;color:#2455c3;}a.jsx-2371165684:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}h2.jsx-2371165684 a.jsx-2371165684{font-size:40px;font-weight:800;color:black;}h2.jsx-2371165684 a.jsx-2371165684:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}.container.jsx-2371165684{padding-top:32px;padding-bottom:56px;max-width:720px;margin:0 auto;}header.jsx-2371165684{padding-bottom:24px;}.post-details.jsx-2371165684{font-size:18px;color:#595959;padding-bottom:0;}.post-details.jsx-2371165684 a.jsx-2371165684{font-size:18px;color:#2455c3;}.post-details.jsx-2371165684 a.jsx-2371165684:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL1JlbW90ZVBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURpQixBQUVzRCxBQUVyQyxBQUtDLEFBS1EsQUFHSixBQU1BLEFBSUEsQUFPQyxBQUdELEFBTUEsQUFLQSxBQU1JLEFBS0osQUFLRCxBQU1HLEFBTUcsQUFHTCxBQUtBLEFBSUksVUFuRlYsQ0FLTyxHQXVESyxDQS9DTCxBQU1HLEFBSUEsQUFVQSxBQU1MLEFBS08sQUFXTCxBQW9CRixBQUtBLENBbERoQixDQW9Dc0IsRUFqRWUsQUFTckMsQUF3Q2tDLEFBa0NBLENBWmxDLE9BbEVvQixFQWtDTyxBQW9DUixBQUtuQixFQW5FZ0IsQUEwQ0YsR0FwQ2QsQUFJZ0IsQUFVRixHQWlDSSxNQVZsQixFQWxEQSxBQVFxQixDQW9CRixBQTBDbkIsRUFwRGtCLEdBMEJELEFBa0NBLEVBbkZqQixBQWtFZ0IsQ0EzQmhCLFNBTEEsQ0FwQkEsQUFVc0IsQUFtQ0wsQ0FoQkMsQ0FPbEIsQUFrQ0EsQ0FqQkEsWUFQcUIsRUFoQkwsR0FuQmhCLFdBb0JBLEdBZ0JBIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL1JlbW90ZVBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZW1vdGVQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgyPjxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYmxvZy9vbmUtZGF5LXJlbW90ZS13b3JrXCI+T25lIERheSBvZiBSZW1vdGUgV29yazwvYT48L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LWRldGFpbHNcIj5EZWNlbWJlciAyMSwgMjAxOCDCtyAzIG1pbjwvcD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllc3RlcmRheSwgSSBoYWQgdGhlIGx1eHVyeSBvZiB3b3JraW5nIG9mIGZyb20gaG9tZSB0byBtYWtlIHN1cmUgSSByZWNlaXZlZCBhIENocmlzdG1hcyBwYWNrYWdlLiBJIHNheSDigJxsdXh1cnnigJ0gYmVjYXVzZSBJIHVuZGVyc3RhbmQgdGhhdCBoYXZpbmcgdGhlIG9wdGlvbiB0byB3b3JrIGZyb20gaG9tZSBpcyBub3QgYXZhaWxhYmxlIHRvIGV2ZXJ5b25lLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEZvciB0aGUgcGFzdCB0ZW4geWVhcnMgb2YgbXkgd29ya2luZyBsaWZlLCBJIG5ldmVyIGhhZCB0aGUgY2hhbmNlIHRvIGRvIHRoaXMuIE5vciBkaWQgSSBldmVyIHRoaW5rIGFib3V0IGl0LiBJ4oCZbSB2ZXJ5IGx1Y2t5IHRvIHdvcmsgZm9yIGEgY29tcGFueSB0aGF0IG9mZmVycyB0aGlzLiBIZXJlIGFyZSBteSB0aG91Z2h0cyBvZiBob3cgeWVzdGVyZGF5IHdlbnQ6XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgIDxoND5Db21tdW5pY2F0aW9uPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvdHMgb2YgY29tbXVuaWNhdGlvbiB3YXMgZG9uZSB2aWEgU2xhY2sgYW5kIHRoYXQgZmVsdCBzb21ld2hhdCBvdmVyd2hlbG1pbmcgYnV0IGFsc28gcHJvZHVjdGl2ZS4gTW9zdCBvZiB0aGUgY29udmVyc2F0aW9ucyBoYWQgd291bGQgbm9ybWFsbHkgaGF2ZSBiZWVuIHRocm91Z2ggYSBcInRhcCBvbiB0aGUgc2hvdWxkZXLigJ0gaWYgSSB3YXMgaW4gdGhlIG9mZmljZS4gVGhpcyB3YXMgZ29vZCBhbmQgZGlkIG5vdCBoaW5kZXIgcHJvZHVjdGl2aXR5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICA8aDQ+Tm9pc2U8L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIHNvdW5kIHdhcyBkaWZmZXJlbnQuIEl0IHdhcyBxdWlldCBpbnNpZGUgbXkgYXBhcnRtZW50IGNvbXBhcmVkIHRvIHRoZSBvZmZpY2UgZG93bnRvd24gKGhvbmssIGhvbmshKS4gSSB3YXMgZnJlZSB0byBwbGF5IHZpZGVvcyB3aXRob3V0IG5lZWRpbmcgaGVhZHBob25lcy4gTXkgY29tcHV0ZXIgd2FzIGFsbG93ZWQgdG8gcGxheSB0aGUgc291bmRzIG9mIGRlbGlnaHRmdWwgbm90aWZpY2F0aW9ucyB0aGF0IHdlcmUgY3JlYXRlZCBieSBTb3VuZCBEZXNpZ25lcnPigJR0aGUgbW9zdCBpbXBvcnRhbnQgYmVpbmcgRGVsaXZlcmllcywgYXMgdGhhdOKAmXMgaG93IEkgd2FzIHRyYWNraW5nIHRoZSB1cGRhdGVzIGZvciBteSBwYWNrYWdlLlxuICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgPGg0PlByb2R1Y3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSBmZWx0IHRoYXQgdGhpcyB3YXMgbXkgbW9zdCBwcm9kdWN0aXZlIGRheSBieSBmYXIuIEkgZGVzaWduZWQgdGhyZWUgZGlmZmVyZW50IHBhcnRzIG9mIGEgbWFqb3IgcHJvamVjdCBhbmQgaXRlcmF0ZWQgb24gdGhvc2UgZGVzaWducyByYXBpZGx5LiBJIGFsc28gc3BlbnQgdGltZSB3cml0aW5nIGNvZGUgZm9yIHRoaXMgcHJvamVjdCwgdHJ5aW5nIHRvIG1ha2Ugc3VyZSB3ZSB3ZXJlIGNvbnNpc3RlbnQgd2l0aCBvdXIgc3R5bGluZyB0aHJvdWdob3V0IGFzIHdl4oCZdmUgaGF2ZSBvdmVyIDQgZGlmZmVyZW50IGVuZ2luZWVycyBjb250cmlidXRlIG9uIHRoZSBmcm9udGVuZC5cbiAgICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgPGg0PkZvY3VzPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFN0YXlpbmcgZm9jdXNlZCB0aHJvdWdob3V0IHRoZSBlbnRpcmUgd29ya2RheSBpcyBoYXJkLiBJdCByYXJlbHkgaGFwcGVucy4gSSBkaWQgbm90aWNlLCBob3dldmVyLCB0aGF0IGJlaW5nIG91dHNpZGUgb2YgdGhlIG9mZmljZSBoZWxwZWQgcHJvdmlkZSBsb25nZXIgcGVyaW9kcyBvZiBmb2N1cy4gVGhpcyBzZWVtZWQgdG8gaGF2ZSBvY2N1cnJlZCBiZWNhdXNlIEkgd2FzIGFsb25lLiBUaGF0IHNvdW5kcyBzYWQsIGJ1dCBpdOKAmXMgdGhlIHRydXRoLiBVc3VhbGx5LCBJIGRvIG5vdCBsaWtlIGJlaW5nIGFsb25lLiBJIHN0YXJ0ZWQgZmVlbGluZyBsb25lbHkgYXJvdW5kIDIgb+KAmWNsb2NrLiBBcm91bmQgMyBv4oCZY2xvY2sgbXkgd2lmZSBjYW1lIGhvbWUgYW5kIHRoYXQgaGVscGVkLiBUaGVuIGEgbWVldGluZyB3aXRoIG91ciBkZXNpZ24gdGVhbSBhdCA0IG/igJljbG9jayBoZWxwZWQgcmVtb3ZlIHRoZSBmZWVsaW5nIG9mIGxvbmVsaW5lc3MgZW50aXJlbHkuIEnigJltIHNvIHRoYW5rZnVsIHRvIHdvcmsgd2l0aCBhbiBhbWF6aW5nIHRlYW0uXG4gICAgICAgICAgPC9wPiBcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICA8aDQ+Rm9vZDwvaDQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHdhcyBwcm9iYWJseSB0aGUgaGFyZGVzdCBwYXJ0IG9mIG5vdCB3b3JraW5nIGF0IG91ciBkb3dudG93biBvZmZpY2UuIFNlZW1zIHNpbGx5LCBidXQgSSBnZXQgaHVuZ3J5IHRocm91Z2hvdXQgdGhlIGRheS4gT2Z0ZW4uIEkgd2FzIGZyZXNoIG91dCBvZiBncmVlayB5b2d1cnQsIGJlcnJpZXMsIGFwcGxlcywgc2FsdGVkIGFsbW9uZHMgKHNpa2UsIHdlIG5ldmVyIGhhdmUgaGVhbHRoeSBzbmFja3MgYXQgaG9tZSkuIFNvLCBJIGVuZGVkIHVwIHNuYWNraW5nIG9uIHNvbWUgbGVzcy1oZWFsdGh5IGZvb2QgYW5kIGxlZnQgaXQgYXQgdGhhdC5cbiAgICAgICAgICA8L3A+IFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgIDxoND5PdmVyYWxsPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE15IGdvYWwgaXMgdG8gYmVjb21lIHJlbW90ZSBpbiB0aGUgdXBjb21pbmcgeWVhcnMgYW5kIGhhdmluZyB0aGlzIHNtYWxsIHRhc3RlIHByb3ZpZGVkIGEgZGVsaWdodGZ1bCBpbnNpZ2h0IGludG8gdGhlIGZ1dHVyZS4gSnVzdCBuZWVkIHRvIGtlZXAgdGhhdCByZWZyaWdlcmF0b3IgcGFja2VkIHdpdGggc29tZSBtb3JlIHNuYWNrcy4gIFxuICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kZXRhaWxzXCI+4oCUIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3ZpY3Rvcmtlcm5lc1wiIHRhcmdldD1cIl9ibGFua1wiPkB2aWN0b3JrZXJuZXM8L2E+PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICA8c3R5bGUganN4PntgXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vcnNtcy5tZS9pbnRlci9pbnRlci11aS5jc3MnKTtcbiAgICAqIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJ0ludGVyIFVJJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMxMTExMTI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogIzExMTExMjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgbGkge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyNDU1YzM7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjQ1NWMzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBoMiBhIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIGgyIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICMyNDU1YzM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XG4gICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICB9XG4gICAgLnBvc3QtZGV0YWlscyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgICAucG9zdC1kZXRhaWxzIGEge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICMyNDU1YzM7XG4gICAgfVxuICAgIC5wb3N0LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNDU1YzM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICBgfTwvc3R5bGU+XG4gICA8L2Rpdj4pXG4gIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgUmVtb3RlUG9zdDsiXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/RemotePost.js */",
        __self: this
      }));
    }
  }]);

  return RemotePost;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RemotePost);

/***/ }),

/***/ "./pages/blog/one-day-remote-work.js":
/*!*******************************************!*\
  !*** ./pages/blog/one-day-remote-work.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RemotePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/RemotePost */ "./components/RemotePost.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/blog/one-day-remote-work.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RemotePost__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
});

/***/ }),

/***/ 6:
/*!*************************************************!*\
  !*** multi ./pages/blog/one-day-remote-work.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog/one-day-remote-work.js */"./pages/blog/one-day-remote-work.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=one-day-remote-work.js.map