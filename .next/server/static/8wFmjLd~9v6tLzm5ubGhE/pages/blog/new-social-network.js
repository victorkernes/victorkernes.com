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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/NewSocialNetwork.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NewSocialNetwork_NewSocialNetwork =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewSocialNetwork, _React$Component);

  function NewSocialNetwork() {
    _classCallCheck(this, NewSocialNetwork);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewSocialNetwork).apply(this, arguments));
  }

  _createClass(NewSocialNetwork, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-1299366006" + " " + "container"
      }, external_react_default.a.createElement("section", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("header", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("a", {
        href: "/blog/new-social-network",
        className: "jsx-1299366006"
      }, "A New Social Network")), external_react_default.a.createElement("p", {
        className: "jsx-1299366006" + " " + "post-details"
      }, "by ", external_react_default.a.createElement("a", {
        href: "https://twitter.com/victorkernes",
        target: "_blank",
        className: "jsx-1299366006"
      }, "@victorkernes"), " \xB7 January 6, 2019")), external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, "I subscribe to a newsletter called ", external_react_default.a.createElement("a", {
        href: "https://mavengame.com/",
        target: "_blank",
        className: "jsx-1299366006"
      }, "\u201CThe Maven Game\u201D"), ", and it is one of the few that I read from beginning to end whenever there\u2019s a new post."), external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, "A few months ago, David included a snippet that talked of an idea he had for a new type of social media. He had quit both Twitter and Instagram and was looking for something simpler."), external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, "Here\u2019s what it looks like:"), external_react_default.a.createElement("ol", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-1299366006"
      }, "1. Living (Yes/No):"), " Are you still alive?")), external_react_default.a.createElement("li", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-1299366006"
      }, "2. Marital Status (Married/Single):"), " Are you married?")), external_react_default.a.createElement("li", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-1299366006"
      }, "3. Children (#):"), " How many kids do you have?")), external_react_default.a.createElement("li", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-1299366006"
      }, "4. Opportunity (Open/Closed):"), " Are you interested in new opportunities?"), external_react_default.a.createElement("blockquote", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, "This flag is set either to Open or Closed. Open means you\u2019re interested in hearing about new opportunities: full, part-time, freelance, side hustle, whatever. Closed means you\u2019re not open for business: you\u2019re busy, retired, don\u2019t bother me. Simple, and unlikely to set off alarm bells with the boss."), " \u2014 David Molwear")), external_react_default.a.createElement("li", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("strong", {
        className: "jsx-1299366006"
      }, "5. Location:"), " Are you closeby? Is it physically possible to meet up for coffee?"))), external_react_default.a.createElement("hr", {
        className: "jsx-1299366006"
      }), external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, "I loved this idea. I\u2019m going to try and do the same, at least for the month of January. Here\u2019s my quick go at adding my ", external_react_default.a.createElement("a", {
        href: "/now",
        target: "_blank",
        className: "jsx-1299366006"
      }, "\u201Cprofile.\u201D")), external_react_default.a.createElement("p", {
        className: "jsx-1299366006"
      }, external_react_default.a.createElement("a", {
        href: "https://mavengame.com/2018/06/to-get-unstuck-on-your-next-project-start-with-a-frame/",
        target: "_blank",
        className: "jsx-1299366006"
      }, "Check out the original post here"))), external_react_default.a.createElement(style_default.a, {
        styleId: "1299366006",
        css: ["@import url('https://rsms.me/inter/inter-ui.css');", "*.jsx-1299366006{padding:0;margin:0;font-family:'Inter UI',sans-serif;}", "div.jsx-1299366006{width:100%;background:#fff;border-radius:4px;}", "h2.jsx-1299366006{font-size:40px;font-weight:800;color:#111112;padding-bottom:8px;}", "p.jsx-1299366006{font-size:20px;font-weight:normal;color:#111112;line-height:1.5;padding-bottom:16px;}", "ol.jsx-1299366006{list-style:none;}", "li.jsx-1299366006{font-size:20px;font-weight:normal;color:black;line-height:32px;}", "span.jsx-1299366006{font-size:16px;color:#595959;text-transform:uppercase;}", "a.jsx-1299366006{font-size:20px;-webkit-text-decoration:none;text-decoration:none;font-weight:600;color:#2455c3;}", "a.jsx-1299366006:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}", "h2.jsx-1299366006 a.jsx-1299366006{font-size:40px;font-weight:800;color:black;}", "h2.jsx-1299366006 a.jsx-1299366006:hover{color:#2455c3;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;border-bottom:none;}", ".container.jsx-1299366006{padding:32px;padding-bottom:56px;max-width:720px;margin:0 auto;}", "header.jsx-1299366006{padding-bottom:32px;}", "hr.jsx-1299366006{border:1px solid #111112;margin-top:8px;margin-bottom:24px;}", "blockquote.jsx-1299366006{font-size:18px;width:100%;font-style:italic;padding-left:24px;margin-bottom:16px;border-left:2px solid #111112;}", "blockquote.jsx-1299366006 p.jsx-1299366006{font-size:18px;}", ".post-details.jsx-1299366006{font-size:18px;color:#595959;padding-bottom:0;}", ".post-details.jsx-1299366006 a.jsx-1299366006{font-size:18px;color:#2455c3;}", ".post-details.jsx-1299366006 a.jsx-1299366006:hover{padding-bottom:4px;border-bottom:2px solid #2455c3;cursor:pointer;}"]
      }));
    }
  }]);

  return NewSocialNetwork;
}(external_react_default.a.Component);

/* harmony default export */ var components_NewSocialNetwork = (NewSocialNetwork_NewSocialNetwork);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/new-social-network.js



/* harmony default export */ var new_social_network = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_NewSocialNetwork, null), external_react_default.a.createElement(Footer["a" /* default */], null));
});

/***/ })

/******/ });