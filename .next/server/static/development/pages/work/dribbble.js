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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dribbble.js":
/*!********************************!*\
  !*** ./components/Dribbble.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DribbbleNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DribbbleNav */ "./components/DribbbleNav.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Dribbble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Dribbble extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.dribbble.com/v2/user/shots?access_token=f8fa262dc136f778c2e367544ab8ce46a0843c9b6560a52cd88d08ca83397818").then(function (response) {
      if (response.data.length > 0) {
        console.log(response);
        let fragment = "";
        response.data.forEach(function (val, i) {
          fragment += '<a style="width: 100%;" target="_blank" href="' + val.html_url + '" title="' + val.title + '"><img style="width: 100%; height: 100%; object-fit: cover; border-radius: 2px; box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);" src="' + val.images.hidpi + '"/></a>';
        });
        document.querySelector("#shots").innerHTML = fragment;
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-3873347274" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("header", {
      className: "jsx-3873347274",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_components_DribbbleNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx("section", {
      className: "jsx-3873347274" + " " + "grid-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("section", {
      className: "jsx-3873347274" + " " + "dribbble-profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("img", {
      src: "../static/@victorkernes.png",
      className: "jsx-3873347274" + " " + "dribbble-profile-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("a", {
      href: "https://dribbble.com/victorkernes",
      target: "_blank",
      className: "jsx-3873347274" + " " + "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "@victorkernes"), __jsx("p", {
      className: "jsx-3873347274",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "I design and code at Virta Health, where we reverse type 2 diabetes.")), __jsx("section", {
      className: "jsx-3873347274",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      id: "shots",
      className: "jsx-3873347274" + " " + "shots",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3873347274",
      __self: this
    }, "div.jsx-3873347274{width:100%;}.container.jsx-3873347274{max-width:1440px;padding:64px 16px;margin:0 auto;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:20% auto;grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}section.jsx-3873347274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}header.jsx-3873347274{max-width:640px;margin:0 auto;}h2.jsx-3873347274{font-size:28px;font-weight:600;text-align:left;line-height:50px;padding-bottom:8px;color:rgb(255,255,255);-webkit-text-decoration:none;text-decoration:none;}p.jsx-3873347274{font-size:16px;font-weight:400;line-height:1.5;padding-bottom:16px;}h4.jsx-3873347274{font-weight:500;font-size:16px;padding-bottom:8px;text-transform:uppercase;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:rgba(255,255,255,0.2);}h3.jsx-3873347274{font-weight:500;font-size:22px;padding-bottom:8px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:rgba(255,255,255,1);}ul.jsx-3873347274{list-style:none;}.shots.jsx-3873347274{display:grid;width:100%;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:2rem;}.dribbble-profile.jsx-3873347274{width:100%;border-bottom:1px solid rgba(0,0,0,0.07);text-align:center;}.dribbble-profile.jsx-3873347274 p.jsx-3873347274{max-width:280px;}.dribbble-profile-image.jsx-3873347274{width:80px;height:80px;margin-bottom:2rem;}.username.jsx-3873347274{padding-bottom:1rem;font-weight:500;color:#8c7df7;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}@media (max-width:720px){.shots.jsx-3873347274{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeate(2,1fr);grid-gap:2rem;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}}@media (max-width:375px){.shots.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(1,1fr);grid-gap:2rem;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHd0IsQUFHTSxBQUtKLEFBTUEsQUFNRyxBQUlELEFBU0EsQUFNQyxBQVFBLEFBT0EsQUFHSCxBQU9GLEFBS0ssQUFHTCxBQUtTLEFBUUwsQUFNQSxBQVFBLEFBTUEsV0F4R2pCLEFBZ0U4QyxBQVFoQyxFQWhFbUIsQUFpRHBCLEFBNEI0QixBQU1BLEFBUUEsQUFNQSxFQWpGdkIsQUFTQSxDQWJGLEFBbUJDLEFBUUEsQUFPakIsQUFlQSxDQWxFb0IsR0EwRUYsR0FKRyxDQWZrQixNQXJDdkMsQ0FJa0IsQUFTQSxBQU1HLEFBUUEsSUE1Q0wsQ0EwRUEsTUFKaEIsRUFqRWdCLEdBaUJHLEFBU0csRUE5QnRCLEFBaUZ1QyxBQU1yQixBQVFvQixBQU1wQixDQWpFUyxBQVFILEFBOEJQLEVBZEcsTUF2REEsRUFpRGdCLEdBa0NkLEFBY0EsQ0FoRkQsQ0FxREUsRUE1Q3ZCLEdBOEJBLElBcERxQixDQTRCRyxPQTJETixDQXpFUyxBQTJEVCxVQTNCRixHQTBDZCxDQWRBLFNBM0RxQixDQWdDdkIsUUFvQkEsZ0NBdEVBLEtBbUZFLEFBY0EsR0ExRDZCLENBcEIvQixXQWZ3QixhQTRCUyxDQVFqQywyQkFQQSxxQ0E1QmdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IERyaWJiYmxlTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0RyaWJiYmxlTmF2XCI7XG5cbmNsYXNzIERyaWJiYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuZHJpYmJibGUuY29tL3YyL3VzZXIvc2hvdHM/YWNjZXNzX3Rva2VuPWY4ZmEyNjJkYzEzNmY3NzhjMmUzNjc1NDRhYjhjZTQ2YTA4NDNjOWI2NTYwYTUyY2Q4OGQwOGNhODMzOTc4MThcIlxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICBsZXQgZnJhZ21lbnQgPSBcIlwiO1xuXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaSkge1xuICAgICAgICAgICAgZnJhZ21lbnQgKz1cbiAgICAgICAgICAgICAgJzxhIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgK1xuICAgICAgICAgICAgICB2YWwuaHRtbF91cmwgK1xuICAgICAgICAgICAgICAnXCIgdGl0bGU9XCInICtcbiAgICAgICAgICAgICAgdmFsLnRpdGxlICtcbiAgICAgICAgICAgICAgJ1wiPjxpbWcgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgYm9yZGVyLXJhZGl1czogMnB4OyBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1wiIHNyYz1cIicgK1xuICAgICAgICAgICAgICB2YWwuaW1hZ2VzLmhpZHBpICtcbiAgICAgICAgICAgICAgJ1wiLz48L2E+JztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdHNcIikuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8RHJpYmJibGVOYXYgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHJpYmJibGUtcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmliYmJsZS1wcm9maWxlLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL0B2aWN0b3JrZXJuZXMucG5nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS92aWN0b3JrZXJuZXNcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBAdmljdG9ya2VybmVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSBkZXNpZ24gYW5kIGNvZGUgYXQgVmlydGEgSGVhbHRoLCB3aGVyZSB3ZSByZXZlcnNlIHR5cGUgMlxuICAgICAgICAgICAgICBkaWFiZXRlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3RzXCIgaWQ9XCJzaG90c1wiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2NHB4IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaG90cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJpYmJibGUtcHJvZmlsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJpYmJibGUtcHJvZmlsZSBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcmliYmJsZS1wcm9maWxlLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjOGM3ZGY3O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIC5zaG90cyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0ZSgyLCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgLnNob3RzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmliYmJsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Dribbble.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dribbble);

/***/ }),

/***/ "./components/DribbbleFooter.js":
/*!**************************************!*\
  !*** ./components/DribbbleFooter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleFooter.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const DribbbleFooter = () => __jsx("footer", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  href: "/blog",
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Blog")), __jsx("li", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  href: "/work",
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Work")), __jsx("li", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/victorkernes",
  target: "_blank",
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "GitHub")), __jsx("li", {
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "mailto:victorkernes@gmail.com",
  target: "_blank",
  className: "jsx-618174700",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Contact")))), __jsx("p", {
  className: "jsx-618174700" + " " + "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Copyright \xA9 2019 Victor Kernes"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "618174700",
  __self: undefined
}, "footer.jsx-618174700{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}ul.jsx-618174700{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:0;margin:0;-webkit-text-decoration:none;text-decoration:none;}li.jsx-618174700{list-style:none;padding-right:1rem;}li.jsx-618174700:nth-child(4){padding-right:0;}p.jsx-618174700,a.jsx-618174700{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;font-size:1.125rem;color:#9a9a9a;line-height:1.5;padding-bottom:18px;font-style:normal;font-weight:400;margin:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.copyright.jsx-618174700{font-size:16px;color:#9a9a9a;}.copyright.jsx-618174700:hover,a.jsx-618174700:hover{color:#9a9a9a;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFHMkIsQUFPRSxBQU1KLEFBSUEsQUFJSSxBQVlMLEFBS0QsY0FDa0IsQ0FMbEIsQ0FwQkssQUFJckIsRUFqQmUsV0FrQ2YsTUFwQkEsbURBeUJBLE1BdEN3QixVQU1aLEFBY1csVUFiWixTQUNZLCtCQWFGLGtCQXBCQSxDQVFyQixBQWFnQixjQUNFLGdCQUNJLG9CQUNGLGtCQUNGLGdCQUNQLFFBekJLLENBMEJrQixhQXpCbEMsMkRBMEJBIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHJpYmJibGVGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPG5hdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL3dvcmtcIj5Xb3JrPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92aWN0b3JrZXJuZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86dmljdG9ya2VybmVzQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIDIwMTkgVmljdG9yIEtlcm5lczwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmb290ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICBsaTpudGgtY2hpbGQoNCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgcCxcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgfVxuICAgICAgLmNvcHlyaWdodDpob3ZlcixcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyaWJiYmxlRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleFooter.js */"));

/* harmony default export */ __webpack_exports__["default"] = (DribbbleFooter);

/***/ }),

/***/ "./components/DribbbleLayout.js":
/*!**************************************!*\
  !*** ./components/DribbbleLayout.js ***!
  \**************************************/
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
/* harmony import */ var _DribbbleFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DribbbleFooter */ "./components/DribbbleFooter.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-3344028266",
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
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cloud.typography.com/6931734/6253212/css/fonts.css",
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/x-icon",
  href: "../static/favicon/favicon.ico",
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "../static/favicon/apple-touch-icon.png",
  className: "jsx-3344028266",
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
  className: "jsx-3344028266",
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
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("link", {
  rel: "manifest",
  href: "../static/favicon/site.webmanifest",
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("title", {
  className: "jsx-3344028266",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "@victorkernes")), props.children, __jsx(_DribbbleFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3344028266",
  __self: undefined
}, "*{padding:0;margin:0;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html{font-family:\"Ideal Sans A\",\"Ideal Sans B\",-apple-system, BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue, sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%;text-rendering:optimizeLegibility;}button,input,optgroup,select,textarea{font-family:inherit;}body{background-color:#f4f4f4;color:#9a9a9a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDdUIsQUFHbUIsQUFTRSxBQVNRLEFBR0ssVUFwQmhCLFNBQ2EsQ0FpQnhCLEtBR2dCLGNBQ2hCLEVBcEJxQyxtQ0FDRCxrQ0FDcEMsdUJBS3dCLG9EQUNZLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9EcmliYmJsZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBEcmliYmJsZUZvb3RlciBmcm9tIFwiLi9EcmliYmJsZUZvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2xvdWQudHlwb2dyYXBoeS5jb20vNjkzMTczNC82MjUzMjEyL2Nzcy9mb250cy5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2Zhdmljb24uaWNvXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8dGl0bGU+QHZpY3Rvcmtlcm5lczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8RHJpYmJibGVGb290ZXIgLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG4gICAgICBodG1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSWRlYWwgU2FucyBBXCIsIFwiSWRlYWwgU2FucyBCXCIsIC1hcHBsZS1zeXN0ZW0sXG4gICAgICAgICAgQmxpbmtNYWNTeXN0ZW1Gb250LCBTYW4gRnJhbmNpc2NvLCBSb2JvdG8sIFNlZ29lIFVJLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgfVxuICAgICAgYnV0dG9uLFxuICAgICAgaW5wdXQsXG4gICAgICBvcHRncm91cCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/DribbbleNav.js":
/*!***********************************!*\
  !*** ./components/DribbbleNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLink */ "./components/NavLink.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleNav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const DribbbleNav = () => __jsx("div", {
  className: "jsx-1266126796" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-1266126796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1266126796" + " " + "logo-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  alt: "home",
  className: "jsx-1266126796" + " " + "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/@.png",
  className: "jsx-1266126796" + " " + "nav-logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-1266126796" + " " + "nav-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "victorkernes"))), __jsx("div", {
  className: "jsx-1266126796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-1266126796" + " " + "nav-items",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-1266126796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/work",
  alt: "work",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1266126796" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Work"))), __jsx("li", {
  className: "jsx-1266126796",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/blog",
  alt: "blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-1266126796" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Blog")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1266126796",
  __self: undefined
}, "nav.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding-left:24px;padding-right:24px;padding-bottom:56px;}.logo.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:24px;padding:8px 8px;margin:8px -8px;border-radius:8px;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;}.logo.jsx-1266126796:hover{background:rgba(255,255,255,0.1);-webkit-text-decoration:none;text-decoration:none;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.logo.jsx-1266126796:active{outline:0;box-shadow:0 0 0 3px rgba(255,255,255,0.4);-webkit-text-decoration:none;text-decoration:none;}.nav-logo.jsx-1266126796{height:24px;width:24px;}.nav-name.jsx-1266126796{font-size:16px;font-weight:600;padding-left:8px;color:#9a9a9a;-webkit-text-decoration:none;text-decoration:none;}.nav-items.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}li.jsx-1266126796{padding-left:24px;}.nav-item.jsx-1266126796{font-size:16px;font-weight:600;padding-bottom:8px;color:#9a9a9a;-webkit-text-decoration:none;text-decoration:none;}.nav-item.jsx-1266126796:hover{color:#8c7df7;border-bottom:2px solid #8c7df7;}a.jsx-1266126796{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFHNkIsQUFTQSxBQVNnQixBQU0xQixBQUtFLEFBSUcsQUFPSyxBQUlGLEFBR0gsQUFPRCxBQUlPLFVBakN5QixFQUtuQyxFQXlCcUIsQ0FyQmhCLEFBY0EsR0FIbEIsS0FkQSxRQUltQixBQWNFLEVBOUJFLGFBcUN2QixFQXBCZ0IsRUFjQSxBQVNDLEdBakNNLFNBV0EsRUFjQSxDQVN2QixrQkF4Q1ksVUFDc0IsU0FwQmIsQUFTQSxBQStCSCxDQWRsQixTQVdBLEVBY0EsSUFWQSwrQ0FwQkEsOEJBcEJnQyxBQVNiLGlCQUNELGdCQUNBLGdCQUNFLGtCQUNjLGdEQVpyQixXQUNPLGFBWXBCLEtBWHFCLG1CQUNDLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9EcmliYmJsZU5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gXCIuL05hdkxpbmtcIjtcblxuY29uc3QgRHJpYmJibGVOYXYgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCIgYWx0PVwiaG9tZVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2LWxvZ29cIiBzcmM9XCIvc3RhdGljL0AucG5nXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbmFtZVwiPnZpY3Rvcmtlcm5lczwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3dvcmtcIiBhbHQ9XCJ3b3JrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5Xb3JrPC9zcGFuPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYmxvZ1wiIGFsdD1cImJsb2dcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkJsb2c8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgICAgbWFyZ2luOiA4cHggLThweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5sb2dvOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgICAgLmxvZ286YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdi1sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5uYXYtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAubmF2LWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5uYXYtaXRlbTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjOGM3ZGY3O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzhjN2RmNztcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJpYmJibGVOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleNav.js */"));

/* harmony default export */ __webpack_exports__["default"] = (DribbbleNav);

/***/ }),

/***/ "./components/NavLink.js":
/*!*******************************!*\
  !*** ./components/NavLink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/NavLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ActiveLink({
  children,
  router,
  href
}) {
  const style = {
    borderBottom: router.pathname === href ? "2px solid #8c7df7" : "none",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fff",
    paddingBottom: "8px"
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./pages/work/dribbble.js":
/*!********************************!*\
  !*** ./pages/work/dribbble.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dribbble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dribbble */ "./components/Dribbble.js");
/* harmony import */ var _components_DribbbleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DribbbleLayout */ "./components/DribbbleLayout.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/work/dribbble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components_DribbbleLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_Dribbble__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}))));

/***/ }),

/***/ 8:
/*!**************************************!*\
  !*** multi ./pages/work/dribbble.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victor/Projects/victorkernes.com/pages/work/dribbble.js */"./pages/work/dribbble.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=dribbble.js.map