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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const About = () => __jsx("div", {
  className: "jsx-393792292" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("section", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("header", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Hi. I\u2019m", " ", __jsx("a", {
  href: "/work",
  className: "jsx-393792292" + " " + "hover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "@victorkernes.")), __jsx("h2", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "I design and code at Virta Health, ", __jsx("br", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), "where we reverse type 2 diabetes."), __jsx("h2", {
  className: "jsx-393792292",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Based in San Francisco."), __jsx("div", {
  className: "jsx-393792292" + " " + "follow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "https://twitter.com/intent/tweet?text=%F0%9F%91%8B@victorkernes",
  target: "_blank",
  className: "jsx-393792292" + " " + "inline",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/twitter.svg",
  className: "jsx-393792292" + " " + "twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("p", {
  className: "jsx-393792292" + " " + "follow-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Tweet, tweet."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "393792292",
  __self: undefined
}, "div.jsx-393792292{width:100%;}.container.jsx-393792292{-webkit-animation:fadein-jsx-393792292 2s;animation:fadein-jsx-393792292 2s;}@-webkit-keyframes fadein-jsx-393792292{from{opacity:0;}to{opacity:1;}}@keyframes fadein-jsx-393792292{from{opacity:0;}to{opacity:1;}}section.jsx-393792292{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;}h1.jsx-393792292{font-size:40px;font-weight:600;margin-bottom:16px;text-align:left;}h2.jsx-393792292{font-size:24px;font-weight:300;padding-bottom:24px;text-align:left;line-height:38px;}h2.jsx-393792292:nth-child(3){padding-bottom:0;}.twitter.jsx-393792292{margin-top:48px;}.follow.jsx-393792292,.follow.jsx-393792292 a.jsx-393792292{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.follow.jsx-393792292 .twitter.jsx-393792292{height:24px;width:24px;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.follow.jsx-393792292:hover .twitter.jsx-393792292{-webkit-transform:scale(1.4);-ms-transform:scale(1.4);transform:scale(1.4);}.inline.jsx-393792292{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.follow.jsx-393792292 .follow-text.jsx-393792292{visibility:hidden;margin-left:16px;font-size:16px;padding:8px 16px;border-radius:16px 16px 16px 0;background:rgba(255,255,255,0.1);font-weight:400;opacity:0;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:visibility 0s,opacity 0.7s linear;transition:visibility 0s,opacity 0.7s linear;}.follow.jsx-393792292:hover .follow-text.jsx-393792292{visibility:visible;color:#fff;opacity:1;}h1.jsx-393792292 a.jsx-393792292{font-size:40px;font-weight:600;margin-bottom:16px;text-align:left;color:rgba(255,255,255,1);-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;}h1.jsx-393792292 a.jsx-393792292:hover{color:#8c7df7;cursor:pointer;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}h3.jsx-393792292{padding-bottom:8px;}header.jsx-393792292{padding-bottom:24px;text-align:left;margin:0 auto;}@media (max-width:720px){h1.jsx-393792292,h1.jsx-393792292 a.jsx-393792292{font-size:32px;}h2.jsx-393792292{font-size:18px;line-height:28px;}header.jsx-393792292{padding-right:2rem;padding-left:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHb0IsQUFHUyxBQUlSLEFBR0EsQUFJQyxBQU1FLEFBTUEsQUFPRSxBQUdELEFBSUQsQUFJSCxBQUtTLEFBR0QsQUFJRixBQVlDLEFBS0osQUFTRCxBQUtLLEFBR0MsQUFPSCxBQUdBLEFBSUksVUFoR3JCLEFBR0EsQ0FWRixDQTRDYSxFQXNDSSxDQTlEQyxBQU1BLEFBY0ssQUFpQ0wsQUF3QmhCLEFBR21CLENBaEVyQixDQUhBLENBdUJtQixDQVlOLEFBbUJiLEFBaUJzQixDQWRKLEdBN0NnQixNQXNDQSxDQWR0QixDQWhEUyxBQU1DLEFBK0NELENBMkJuQixHQTVDZSxDQWtDRCxDQWNkLEdBbkNGLFVBaERrQixBQW9DQyxBQWlCRCxBQWlCbEIsQ0FoRWtCLGNBYWxCLENBbEJBLEFBcUQrQixDQS9DWixBQThCYyxPQTdDWixDQW1DckIsQ0E5Q0EsUUEyQkEsUUErQ3VCLEdBL0J2QixHQWNzQyxHQXdCdEMsQ0FoQ3FCLDZCQVNILFdBaUJnQixLQWhCdEIsVUFDVyxVQWhERiw0QkFzQ3JCLFlBV2dELE9BZWhELHNCQS9EZSxhQUNmLHdEQWdEQSIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9BYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEhpLiBJ4oCZbXtcIiBcIn1cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3ZlclwiIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgQHZpY3Rvcmtlcm5lcy5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBJIGRlc2lnbiBhbmQgY29kZSBhdCBWaXJ0YSBIZWFsdGgsIDxiciAvPlxuICAgICAgICAgIHdoZXJlIHdlIHJldmVyc2UgdHlwZSAyIGRpYWJldGVzLlxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDI+QmFzZWQgaW4gU2FuIEZyYW5jaXNjby48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGxvd1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmVcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JUYwJTlGJTkxJThCQHZpY3Rvcmtlcm5lc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidHdpdHRlclwiIHNyYz1cIi9zdGF0aWMvdHdpdHRlci5zdmdcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9sbG93LXRleHRcIj5Ud2VldCwgdHdlZXQuPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgfVxuICAgICAgaDI6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAudHdpdHRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgICB9XG4gICAgICAuZm9sbG93LFxuICAgICAgLmZvbGxvdyBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuZm9sbG93IC50d2l0dGVyIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAuZm9sbG93OmhvdmVyIC50d2l0dGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICAgICAgfVxuICAgICAgLmlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmZvbGxvdyAuZm9sbG93LXRleHQge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMTZweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjdzIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIC5mb2xsb3c6aG92ZXIgLmZvbGxvdy10ZXh0IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICBoMSBhIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIGgxIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzhjN2RmNztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIH1cbiAgICAgIGhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICBoMSxcbiAgICAgICAgaDEgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/About.js */"));

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("footer", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  href: "/blog",
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Blog")), __jsx("li", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  href: "/work",
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Work")), __jsx("li", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/victorkernes",
  target: "_blank",
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "GitHub")), __jsx("li", {
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  href: "mailto:victorkernes@gmail.com",
  target: "_blank",
  className: "jsx-3832245763",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Contact")))), __jsx("p", {
  className: "jsx-3832245763" + " " + "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Copyright \xA9 2020 Victor Kernes"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3832245763",
  __self: undefined
}, "footer.jsx-3832245763{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}ul.jsx-3832245763{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:0;margin:0;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3832245763{list-style:none;padding-right:1rem;}li.jsx-3832245763:nth-child(4){padding-right:0;}p.jsx-3832245763,a.jsx-3832245763{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;font-size:1.125rem;color:rgba(255,255,255,0.3);line-height:1.5;padding-bottom:18px;font-style:normal;font-weight:400;margin:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.copyright.jsx-3832245763{font-size:16px;color:rgba(255,255,255,0.1);}.copyright.jsx-3832245763:hover,a.jsx-3832245763:hover{color:rgba(255,255,255,0.5);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBRzJCLEFBT0UsQUFNSixBQUlBLEFBSUksQUFZTCxBQUtnQixlQUpBLENBcEJaLEFBSXJCLEVBakJlLFVBc0NtQixPQXhCbEMsUUFvQkEsaURBakN3QixRQXNDeEIsRUFoQ1ksQUFjVyxVQWJaLFNBQ1ksK0JBYUYsa0JBcEJBLENBUXJCLEFBYWlDLDRCQUNmLGdCQUNJLG9CQUNGLGtCQUNGLFVBeEJGLE1BeUJMLFFBeEJYLENBeUJrQyx3RUFDbEMiLCJmaWxlIjoiL1VzZXJzL3ZpY3Rvci9Qcm9qZWN0cy92aWN0b3JrZXJuZXMuY29tL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyPlxuICAgIDxuYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL2Jsb2dcIj5CbG9nPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIi93b3JrXCI+V29yazwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmljdG9ya2VybmVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp2aWN0b3JrZXJuZXNAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgMjAyMCBWaWN0b3IgS2VybmVzPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCg0KSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICBwLFxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgfVxuICAgICAgLmNvcHlyaWdodDpob3ZlcixcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Footer.js */"));

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cloud.typography.com/6931734/6253212/css/fonts.css",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/x-icon",
  href: "../static/favicon/favicon.ico",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "../static/favicon/apple-touch-icon.png",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "../static/favicon/favicon-32x32.png",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "../static/favicon/favicon-16x16.png",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("link", {
  rel: "manifest",
  href: "../static/favicon/site.webmanifest",
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("title", {
  className: "jsx-1461338322",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "@victorkernes")), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1461338322",
  __self: undefined
}, "*{padding:0;margin:0;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html{font-family:\"Ideal Sans A\",\"Ideal Sans B\",-apple-system,BlinkMacSystemFont, San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%;text-rendering:optimizeLegibility;}button,input,optgroup,select,textarea{font-family:inherit;}body{background-color:#202123;color:rgb(255,255,255);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3VCLEFBR21CLEFBUW1ELEFBU3pDLEFBR0ssVUFuQmhCLFNBQ2EsQ0FnQnhCLEtBRzJCLGdCQWxCVSxPQW1CckMsNEJBbEJvQyxrQ0FDcEMsc0JBSXdCLG9EQUNZLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2xvdWQudHlwb2dyYXBoeS5jb20vNjkzMTczNC82MjUzMjEyL2Nzcy9mb250cy5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2Zhdmljb24uaWNvXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8dGl0bGU+QHZpY3Rvcmtlcm5lczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgfVxuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIklkZWFsIFNhbnMgQVwiLCBcIklkZWFsIFNhbnMgQlwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgICAgICAgU2FuIEZyYW5jaXNjbywgUm9ib3RvLCBTZWdvZSBVSSwgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICB9XG4gICAgICBidXR0b24sXG4gICAgICBpbnB1dCxcbiAgICAgIG9wdGdyb3VwLFxuICAgICAgc2VsZWN0LFxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIzO1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_About__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}))));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victor/Projects/victorkernes.com/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map