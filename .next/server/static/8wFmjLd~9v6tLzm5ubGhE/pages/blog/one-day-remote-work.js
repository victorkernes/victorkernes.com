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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/RemotePost.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RemotePost_RemotePost =
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
      return external_react_default.a.createElement("div", {
        className: "jsx-2371165684" + " " + "container"
      }, external_react_default.a.createElement("header", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("a", {
        href: "http://localhost:3000/blog/one-day-remote-work",
        className: "jsx-2371165684"
      }, "One Day of Remote Work")), external_react_default.a.createElement("p", {
        className: "jsx-2371165684" + " " + "post-details"
      }, "December 21, 2018 \xB7 3 min")), external_react_default.a.createElement("section", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "Yesterday, I had the luxury of working of from home to make sure I received a Christmas package. I say \u201Cluxury\u201D because I understand that having the option to work from home is not available to everyone."), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "For the past ten years of my working life, I never had the chance to do this. Nor did I ever think about it. I\u2019m very lucky to work for a company that offers this. Here are my thoughts of how yesterday went:")), external_react_default.a.createElement("section", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Communication"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "Lots of communication was done via Slack and that felt somewhat overwhelming but also productive. Most of the conversations had would normally have been through a \"tap on the shoulder\u201D if I was in the office. This was good and did not hinder productivity.")), external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Noise"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "The sound was different. It was quiet inside my apartment compared to the office downtown (honk, honk!). I was free to play videos without needing headphones. My computer was allowed to play the sounds of delightful notifications that were created by Sound Designers\u2014the most important being Deliveries, as that\u2019s how I was tracking the updates for my package.")), external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Productivity"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "I felt that this was my most productive day by far. I designed three different parts of a major project and iterated on those designs rapidly. I also spent time writing code for this project, trying to make sure we were consistent with our styling throughout as we\u2019ve have over 4 different engineers contribute on the frontend.")), external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Focus"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "Staying focused throughout the entire workday is hard. It rarely happens. I did notice, however, that being outside of the office helped provide longer periods of focus. This seemed to have occurred because I was alone. That sounds sad, but it\u2019s the truth. Usually, I do not like being alone. I started feeling lonely around 2 o\u2019clock. Around 3 o\u2019clock my wife came home and that helped. Then a meeting with our design team at 4 o\u2019clock helped remove the feeling of loneliness entirely. I\u2019m so thankful to work with an amazing team.")), external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Food"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "This was probably the hardest part of not working at our downtown office. Seems silly, but I get hungry throughout the day. Often. I was fresh out of greek yogurt, berries, apples, salted almonds (sike, we never have healthy snacks at home). So, I ended up snacking on some less-healthy food and left it at that.")), external_react_default.a.createElement("li", {
        className: "jsx-2371165684"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-2371165684"
      }, "Overall"), external_react_default.a.createElement("p", {
        className: "jsx-2371165684"
      }, "My goal is to become remote in the upcoming years and having this small taste provided a delightful insight into the future. Just need to keep that refrigerator packed with some more snacks."))), external_react_default.a.createElement("p", {
        className: "jsx-2371165684" + " " + "post-details"
      }, "\u2014 ", external_react_default.a.createElement("a", {
        href: "https://twitter.com/victorkernes",
        target: "_blank",
        className: "jsx-2371165684"
      }, "@victorkernes"))), external_react_default.a.createElement(style_default.a, {
        styleId: "2371165684",
        css: ["@import url('https://rsms.me/inter/inter-ui.css');", "*.jsx-2371165684{padding:0;margin:0;font-family:'Inter UI',sans-serif;}", "div.jsx-2371165684{width:100%;background:#fff;border-radius:4px;}", "section.jsx-2371165684{margin-bottom:24px;}", "h2.jsx-2371165684{font-size:40px;font-weight:800;color:#111112;padding-bottom:8px;}", "h4.jsx-2371165684{font-size:24px;padding-bottom:8px;}", "p.jsx-2371165684{font-size:20px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}", "ul.jsx-2371165684{list-style:none;}", "li.jsx-2371165684{font-size:20px;font-weight:normal;color:black;line-height:32px;}", "span.jsx-2371165684{font-size:16px;color:#595959;text-transform:uppercase;}", "a.jsx-2371165684{font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:600;color:#2455c3;}", "a.jsx-2371165684:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}", "h2.jsx-2371165684 a.jsx-2371165684{font-size:40px;font-weight:800;color:black;}", "h2.jsx-2371165684 a.jsx-2371165684:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}", ".container.jsx-2371165684{padding-top:32px;padding-bottom:56px;max-width:720px;margin:0 auto;}", "header.jsx-2371165684{padding-bottom:24px;}", ".post-details.jsx-2371165684{font-size:18px;color:#595959;padding-bottom:0;}", ".post-details.jsx-2371165684 a.jsx-2371165684{font-size:18px;color:#2455c3;}", ".post-details.jsx-2371165684 a.jsx-2371165684:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}"]
      }));
    }
  }]);

  return RemotePost;
}(external_react_default.a.Component);

/* harmony default export */ var components_RemotePost = (RemotePost_RemotePost);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/blog/one-day-remote-work.js



/* harmony default export */ var one_day_remote_work = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(components_RemotePost, null));
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