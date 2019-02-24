module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/About.js";



var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3374878820" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Short"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "I\u2019m a designer and frontend engineer at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.virtahealth.com/",
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Virta Health"), " in San Francisco."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Long"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "I have a degree in Marketing from The Art Institute. I spent two years in San Francisco studying and working full time. I am a designer first, developer second; I am experienced with CSS, HTML and a bit of JS. I often code my own designs (and design in code)."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Attended a 10\u2013week career accelerator focused on creating advanced interactive web experiences with Javascript. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://generalassemb.ly/education/javascript-development/san-francisco",
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "General Assembly")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "When I\u2019m not working, I tend to play lots of basketball indoors."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3374878820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Want to get in touch? I stopped drinking caffeine but happy to meet you up at a coffee shop.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3374878820",
    css: "@import url('https://rsms.me/inter/inter-ui.css');*.jsx-3374878820{padding:0;margin:0;font-family:'Inter UI',sans-serif;}div.jsx-3374878820{width:100%;background:#fff;border-radius:4px;}section.jsx-3374878820{max-width:720px;margin:0 auto;}h2.jsx-3374878820{font-size:40px;font-weight:800;color:#111112;padding-bottom:16px;}p.jsx-3374878820{font-size:18px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}li.jsx-3374878820{font-size:20px;font-weight:normal;color:black;line-height:32px;}span.jsx-3374878820{font-size:16px;color:#595959;text-transform:uppercase;}a.jsx-3374878820{font-size:18px;-webkit-text-decoration:none;text-decoration:none;font-weight:600;color:#2455c3;}a.jsx-3374878820:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}h2.jsx-3374878820 a.jsx-3374878820{font-size:40px;font-weight:800;color:black;padding-bottom:16px;}h2.jsx-3374878820 a.jsx-3374878820:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}h3.jsx-3374878820{padding-bottom:8px;}.container.jsx-3374878820{padding-top:32px;padding-bottom:56px;}header.jsx-3374878820{padding-bottom:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFFc0QsQUFFckMsQUFLQyxBQUtLLEFBSUQsQUFNQSxBQU9BLEFBTUEsQUFLQSxBQU1JLEFBS0osQUFNRCxBQU1LLEFBR0YsQUFJRyxVQW5FWCxDQUtPLEdBa0RLLENBekNMLEFBTUcsQUFPQSxBQU1MLEFBS08sQUFXTCxDQXZDRixDQXNETSxFQS9EZSxBQTJDSCxBQWlCbEMsQ0FPQSxPQTlEb0IsRUE0Qk8sQ0F2QjNCLENBSWdCLEFBbUNGLEdBN0JFLEFBT0YsR0FxQ2QsTUFkc0IsRUE1Q3RCLEFBU3NCLENBYUgsRUFQRCxHQXVCRCxFQTNDakIsQ0FpQ0EsU0FMQSxBQXNCQSxDQTdCc0IsQUFpQ0wsQ0F2Q2pCLEFBc0JrQixDQU9sQixhQVdxQixFQWpCTCxHQWhCaEIsV0FpQkEsR0FpQkEiLCJmaWxlIjoiL1VzZXJzL3ZpY3Rvci9Qcm9qZWN0cy92aWN0b3JrZXJuZXMuY29tL2NvbXBvbmVudHMvQWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBYm91dCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxoMz5cbiAgICAgICAgU2hvcnRcbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgSeKAmW0gYSBkZXNpZ25lciBhbmQgZnJvbnRlbmQgZW5naW5lZXIgYXQgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnZpcnRhaGVhbHRoLmNvbS9cIj5WaXJ0YSBIZWFsdGg8L2E+IGluIFNhbiBGcmFuY2lzY28uXG4gICAgICA8L3A+XG4gICAgICA8aDM+XG4gICAgICAgIExvbmdcbiAgICAgIDwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgSSBoYXZlIGEgZGVncmVlIGluIE1hcmtldGluZyBmcm9tIFRoZSBBcnQgSW5zdGl0dXRlLiBJIHNwZW50IHR3byB5ZWFycyBpbiBTYW4gRnJhbmNpc2NvIHN0dWR5aW5nIGFuZCB3b3JraW5nIGZ1bGwgdGltZS4gSSBhbSBhIGRlc2lnbmVyIGZpcnN0LCBkZXZlbG9wZXIgc2Vjb25kOyBJIGFtIGV4cGVyaWVuY2VkIHdpdGggQ1NTLCBIVE1MIGFuZCBhIGJpdCBvZiBKUy4gSSBvZnRlbiBjb2RlIG15IG93biBkZXNpZ25zIChhbmQgZGVzaWduIGluIGNvZGUpLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEF0dGVuZGVkIGEgMTDigJN3ZWVrIGNhcmVlciBhY2NlbGVyYXRvciBmb2N1c2VkIG9uIGNyZWF0aW5nIGFkdmFuY2VkIGludGVyYWN0aXZlIHdlYiBleHBlcmllbmNlcyB3aXRoIEphdmFzY3JpcHQuIDxhIGhyZWY9XCJodHRwczovL2dlbmVyYWxhc3NlbWIubHkvZWR1Y2F0aW9uL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQvc2FuLWZyYW5jaXNjb1wiPkdlbmVyYWwgQXNzZW1ibHk8L2E+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiBJ4oCZbSBub3Qgd29ya2luZywgSSB0ZW5kIHRvIHBsYXkgbG90cyBvZiBiYXNrZXRiYWxsIGluZG9vcnMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2FudCB0byBnZXQgaW4gdG91Y2g/IEkgc3RvcHBlZCBkcmlua2luZyBjYWZmZWluZSBidXQgaGFwcHkgdG8gbWVldCB5b3UgdXAgYXQgYSBjb2ZmZWUgc2hvcC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXItdWkuY3NzJyk7XG4gICAgKiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdJbnRlciBVSScsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIHNlY3Rpb24ge1xuICAgICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMxMTExMTI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6ICMxMTExMTI7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjQ1NWMzO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI0NTVjMztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaDIgYSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIGgyIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICMyNDU1YzM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XG4gICAgfVxuICAgIGhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/About.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map