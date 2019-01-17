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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/blog.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3350595960" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog/new-social-network",
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "A New Social Network")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350595960" + " " + "post-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "January 6, 2019 \xB7 2 min"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "I subscribe to a newsletter called \u201CThe Maven Game\u201D, and it is one of the few that I read from beginning to end whenever there\u2019s a new post."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "A few months ago, David included a snippet that talked of an idea he had for a new type of social media. He had quit both Twitter and Instagram and was looking for something simpler."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog/new-social-network",
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Continue reading \u201CA New Social Network\u201D")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog/one-day-remote-work",
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "One Day of Remote Work")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350595960" + " " + "post-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "December 21, 2018 \xB7 3 min"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Yesterday, I had the luxury of working of from home to make sure I received a Christmas package. I say \u201Cluxury\u201D because I understand that having the option to work from home is not available to everyone."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog/one-day-remote-work",
    className: "jsx-3350595960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Continue reading \u201COne Day of Remote Work\u201D")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3350595960",
    css: "@import url('https://rsms.me/inter/inter-ui.css');*.jsx-3350595960{padding:0;margin:0;font-family:'Inter UI',sans-serif;}html.jsx-3350595960{margin:0;padding:0;}body.jsx-3350595960{margin:0;padding:0;}div.jsx-3350595960{width:100%;background:#fff;border-radius:4px;}h2.jsx-3350595960{font-size:40px;font-weight:800;color:#111112;padding-bottom:8px;}p.jsx-3350595960{font-size:20px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}li.jsx-3350595960{-webkit-text-decoration:none;text-decoration:none;padding-bottom:32px;}ul.jsx-3350595960{list-style:none;}a.jsx-3350595960{font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:normal;color:#2455c3;}a.jsx-3350595960:hover{color:#1b3f91;cursor:pointer;}h2.jsx-3350595960 a.jsx-3350595960{font-size:40px;font-weight:800;color:black;}h2.jsx-3350595960 a.jsx-3350595960:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}.container.jsx-3350595960{padding-top:32px;padding-bottom:96px;max-width:720px;margin:0 auto;}header.jsx-3350595960{padding-bottom:32px;}.post-details.jsx-3350595960{font-size:18px;padding-bottom:24px;color:#595959;}.post-details.jsx-3350595960 a.jsx-3350595960{font-size:18px;padding-bottom:16px;color:#2455c3;}.post-details.jsx-3350595960 a.jsx-3350595960:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9wYWdlcy9ibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCYyxBQUVvRCxBQUVyQyxBQUtELEFBSUEsQUFJRSxBQUtJLEFBTUEsQUFPTSxBQUlMLEFBR0QsQUFNRCxBQUlDLEFBS0QsQUFNRyxBQU1HLEFBR0wsQUFLQSxBQUtJLFNBeEVULEFBSUEsQ0FURCxDQWFPLEdBK0JELEFBU00sQ0FuQ0wsQUFNRyxBQWNFLEFBVUwsQUFvQkksQUFLQSxDQXRDdEIsQ0F3QnNCLEVBMURlLEFBS3JDLEFBSUEsQUFvRWtDLENBYmxDLE9BbkRvQixFQStCcEIsRUExQmdCLEFBOEJGLEdBeEJFLENBNENBLEFBS0EsRUFkRSxNQVZsQixFQW5DQSxBQUtxQixHQU1ILENBNENsQixBQUtBLENBNUNzQixDQWdETCxFQTdFakIsQUEyRGdCLFdBeENoQixBQU1zQixBQTJCTCxDQWZJLENBeUNyQixDQWxCQSxHQTlCQSxTQXVCcUIsS0EzQnJCLEFBWWdCLGNBQ2hCLEFBZUEiLCJmaWxlIjoiL1VzZXJzL3ZpY3Rvci9Qcm9qZWN0cy92aWN0b3JrZXJuZXMuY29tL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICA8c2VjdGlvbj5cbiAgICA8aDE+PC9oMT5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbj5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj48YSBocmVmPVwiL2Jsb2cvbmV3LXNvY2lhbC1uZXR3b3JrXCI+QSBOZXcgU29jaWFsIE5ldHdvcms8L2E+PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kZXRhaWxzXCI+SmFudWFyeSA2LCAyMDE5IMK3IDIgbWluPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJIHN1YnNjcmliZSB0byBhIG5ld3NsZXR0ZXIgY2FsbGVkIOKAnFRoZSBNYXZlbiBHYW1l4oCdLCBhbmQgaXQgaXMgb25lIG9mIHRoZSBmZXcgdGhhdCBJIHJlYWQgZnJvbSBiZWdpbm5pbmcgdG8gZW5kIHdoZW5ldmVyIHRoZXJl4oCZcyBhIG5ldyBwb3N0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEEgZmV3IG1vbnRocyBhZ28sIERhdmlkIGluY2x1ZGVkIGEgc25pcHBldCB0aGF0IHRhbGtlZCBvZiBhbiBpZGVhIGhlIGhhZCBmb3IgYSBuZXcgdHlwZSBvZiBzb2NpYWwgbWVkaWEuIEhlIGhhZCBxdWl0IGJvdGggVHdpdHRlciBhbmQgSW5zdGFncmFtIGFuZCB3YXMgbG9va2luZyBmb3Igc29tZXRoaW5nIHNpbXBsZXIuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIi9ibG9nL25ldy1zb2NpYWwtbmV0d29ya1wiPkNvbnRpbnVlIHJlYWRpbmcg4oCcQSBOZXcgU29jaWFsIE5ldHdvcmvigJ08L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+PGEgaHJlZj1cIi9ibG9nL29uZS1kYXktcmVtb3RlLXdvcmtcIj5PbmUgRGF5IG9mIFJlbW90ZSBXb3JrPC9hPjwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtZGV0YWlsc1wiPkRlY2VtYmVyIDIxLCAyMDE4IMK3IDMgbWluPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgWWVzdGVyZGF5LCBJIGhhZCB0aGUgbHV4dXJ5IG9mIHdvcmtpbmcgb2YgZnJvbSBob21lIHRvIG1ha2Ugc3VyZSBJIHJlY2VpdmVkIGEgQ2hyaXN0bWFzIHBhY2thZ2UuIEkgc2F5IOKAnGx1eHVyeeKAnSBiZWNhdXNlIEkgdW5kZXJzdGFuZCB0aGF0IGhhdmluZyB0aGUgb3B0aW9uIHRvIHdvcmsgZnJvbSBob21lIGlzIG5vdCBhdmFpbGFibGUgdG8gZXZlcnlvbmUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIi9ibG9nL29uZS1kYXktcmVtb3RlLXdvcmtcIj5Db250aW51ZSByZWFkaW5nIOKAnE9uZSBEYXkgb2YgUmVtb3RlIFdvcmvigJ08L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvc2VjdGlvbj5cbiAgPEZvb3RlciAvPlxuICA8c3R5bGUganN4PntgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXItdWkuY3NzJyk7XG4gICoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgVUknLCBzYW5zLXNlcmlmO1xuICB9XG4gIGh0bWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjMTExMTEyO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICMxMTExMTI7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuICBsaSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogIzI0NTVjMztcbiAgfVxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzFiM2Y5MTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaDIgYSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIGgyIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMjQ1NWMzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbiAgLnBvc3QtZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICB9XG4gIC5wb3N0LWRldGFpbHMgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiAjMjQ1NWMzO1xuICB9XG4gIC5wb3N0LWRldGFpbHMgYTpob3ZlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI0NTVjMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/pages/blog.js */",
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog.js */"./pages/blog.js");


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
//# sourceMappingURL=blog.js.map