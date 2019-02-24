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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/blog",
    className: "jsx-3378642848"
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/about",
    className: "jsx-3378642848"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/victorkernes",
    target: "_blank",
    className: "jsx-3378642848"
  }, "Twitter"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3378642848"
  }, "\xA9 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3378642848",
    css: ["@import url('https://rsms.me/inter/inter-ui.css');", "footer.jsx-3378642848{text-align:center;}", "p.jsx-3378642848{font-size:1.125rem;font-weight:normal;color:#595959;line-height:1.5;padding-bottom:18px;font-family:'Inter UI',sans-serif;margin:0;}", "ul.jsx-3378642848{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:0;margin:0;-webkit-text-decoration:none;text-decoration:none;}", "li.jsx-3378642848{list-style:none;padding-right:1rem;}", "a.jsx-3378642848{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;color:#555556;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-3378642848:hover{color:#2455c3;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/NowPost.js



var NowPost_NowPost = function NowPost() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3557213670" + " " + "container"
  }, external_react_default.a.createElement("section", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("h2", {
    className: "jsx-3557213670"
  }, "What I\u2019m Doing Now"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, "This is what I\u2019m focused on at this point in my life."), external_react_default.a.createElement("h3", {
    className: "jsx-3557213670"
  }, "Profile"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, "Here\u2019s a short update that\u2019s to the point, inspired by David Molwear\u2019s idea for a ", external_react_default.a.createElement("a", {
    href: "/blog/new-social-network",
    className: "jsx-3557213670"
  }, "new social network"), "."), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-3557213670"
  }, "Living"), ": Yes"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-3557213670"
  }, "Marital Status"), ": Married"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-3557213670"
  }, "Children"), ": None at the moment"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-3557213670"
  }, "Opportunity"), ": Open"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-3557213670"
  }, "Location"), ": San Francisco"), external_react_default.a.createElement("h3", {
    className: "jsx-3557213670"
  }, "Writing"), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, "I\u2019m trying to write more in 2019. My ", external_react_default.a.createElement("a", {
    href: "/blog",
    className: "jsx-3557213670"
  }, "blog"), " is the primary way to stay in touch with me moving forward."), external_react_default.a.createElement("p", {
    className: "jsx-3557213670"
  }, "P.S. This is a ", external_react_default.a.createElement("a", {
    href: "https://nownownow.com/about",
    target: "_blank",
    className: "jsx-3557213670"
  }, "\u201Cnow\u201D"), " page. You should make one, too.")), external_react_default.a.createElement(style_default.a, {
    styleId: "3557213670",
    css: ["@import url('https://rsms.me/inter/inter-ui.css');", "*.jsx-3557213670{padding:0;margin:0;font-family:'Inter UI',sans-serif;}", "div.jsx-3557213670{width:100%;background:#fff;border-radius:4px;}", "section.jsx-3557213670{max-width:720px;margin:0 auto;}", "h2.jsx-3557213670{font-size:40px;font-weight:800;color:#111112;padding-bottom:16px;}", "h3.jsx-3557213670{font-size:32px;font-weight:800;color:#111112;padding-bottom:8px;}", "p.jsx-3557213670{font-size:18px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}", "li.jsx-3557213670{font-size:20px;font-weight:normal;color:black;line-height:32px;}", "span.jsx-3557213670{font-size:16px;color:#595959;text-transform:uppercase;}", "a.jsx-3557213670{font-size:18px;-webkit-text-decoration:none;text-decoration:none;font-weight:600;color:#2455c3;}", "a.jsx-3557213670:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}", "h2.jsx-3557213670 a.jsx-3557213670{font-size:40px;font-weight:800;color:black;padding-bottom:16px;}", "h2.jsx-3557213670 a.jsx-3557213670:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}", ".container.jsx-3557213670{padding-top:32px;padding-bottom:56px;}", "header.jsx-3557213670{padding-bottom:24px;}"]
  }));
};

/* harmony default export */ var components_NowPost = (NowPost_NowPost);
// CONCATENATED MODULE: ./pages/now.js



/* harmony default export */ var now = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(components_NowPost, null));
});

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2249175750"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2249175750"
  }, "Victor Kernes")), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2249175750",
    css: ["*.jsx-2249175750{margin:0;padding:0;}", ".container.jsx-2249175750{max-width:1080px;margin:0 auto;}", ".content.jsx-2249175750{max-width:1080px;margin:0 auto;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });