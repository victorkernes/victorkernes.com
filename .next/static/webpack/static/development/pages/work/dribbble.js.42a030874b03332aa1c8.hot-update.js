webpackHotUpdate("static/development/pages/work/dribbble.js",{

/***/ "./components/Dribbble.js":
/*!********************************!*\
  !*** ./components/Dribbble.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_DribbbleNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DribbbleNav */ "./components/DribbbleNav.js");





var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Dribbble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Dribbble =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dribbble, _React$Component);

  function Dribbble() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dribbble);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dribbble).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dribbble, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://api.dribbble.com/v2/user/shots?access_token=f8fa262dc136f778c2e367544ab8ce46a0843c9b6560a52cd88d08ca83397818").then(function (response) {
        if (response.data.length > 0) {
          console.log(response);
          var fragment = "";
          response.data.forEach(function (val, i) {
            fragment += '<a style="width: 100%;" target="_blank" href="' + val.html_url + '" title="' + val.title + '"><img style="width: 100%; height: 100%; object-fit: cover; border-radius: 2px; box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);" src="' + val.images.hidpi + '"/></a>';
          });
          document.querySelector("#shots").innerHTML = fragment;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
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
      }, __jsx(_components_DribbbleNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3873347274",
        __self: this
      }, "div.jsx-3873347274{width:100%;}.container.jsx-3873347274{max-width:1440px;padding:64px 16px;margin:0 auto;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:20% auto;grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}section.jsx-3873347274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}header.jsx-3873347274{max-width:640px;margin:0 auto;}h2.jsx-3873347274{font-size:28px;font-weight:600;text-align:left;line-height:50px;padding-bottom:8px;color:rgb(255,255,255);-webkit-text-decoration:none;text-decoration:none;}p.jsx-3873347274{font-size:16px;font-weight:400;line-height:1.5;padding-bottom:16px;}h4.jsx-3873347274{font-weight:500;font-size:16px;padding-bottom:8px;text-transform:uppercase;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:rgba(255,255,255,0.2);}h3.jsx-3873347274{font-weight:500;font-size:22px;padding-bottom:8px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;color:rgba(255,255,255,1);}ul.jsx-3873347274{list-style:none;}.shots.jsx-3873347274{display:grid;width:100%;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:2rem;}.dribbble-profile.jsx-3873347274{width:100%;border-bottom:1px solid rgba(0,0,0,0.07);text-align:center;}.dribbble-profile.jsx-3873347274 p.jsx-3873347274{max-width:280px;}.dribbble-profile-image.jsx-3873347274{width:80px;height:80px;margin-bottom:2rem;}.username.jsx-3873347274{padding-bottom:1rem;font-weight:500;color:#8c7df7;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}@media (max-width:720px){.shots.jsx-3873347274{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeate(2,1fr);grid-gap:2rem;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}}@media (max-width:375px){.shots.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(1,1fr);grid-gap:2rem;}.grid-container.jsx-3873347274{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHd0IsQUFHTSxBQUtKLEFBTUEsQUFNRyxBQUlELEFBU0EsQUFNQyxBQVFBLEFBT0EsQUFHSCxBQU9GLEFBS0ssQUFHTCxBQUtTLEFBUUwsQUFNQSxBQVFBLEFBTUEsV0F4R2pCLEFBZ0U4QyxBQVFoQyxFQWhFbUIsQUFpRHBCLEFBNEI0QixBQU1BLEFBUUEsQUFNQSxFQWpGdkIsQUFTQSxDQWJGLEFBbUJDLEFBUUEsQUFPakIsQUFlQSxDQWxFb0IsR0EwRUYsR0FKRyxDQWZrQixNQXJDdkMsQ0FJa0IsQUFTQSxBQU1HLEFBUUEsSUE1Q0wsQ0EwRUEsTUFKaEIsRUFqRWdCLEdBaUJHLEFBU0csRUE5QnRCLEFBaUZ1QyxBQU1yQixBQVFvQixBQU1wQixDQWpFUyxBQVFILEFBOEJQLEVBZEcsTUF2REEsRUFpRGdCLEdBa0NkLEFBY0EsQ0FoRkQsQ0FxREUsRUE1Q3ZCLEdBOEJBLElBcERxQixDQTRCRyxPQTJETixDQXpFUyxBQTJEVCxVQTNCRixHQTBDZCxDQWRBLFNBM0RxQixDQWdDdkIsUUFvQkEsZ0NBdEVBLEtBbUZFLEFBY0EsR0ExRDZCLENBcEIvQixXQWZ3QixhQTRCUyxDQVFqQywyQkFQQSxxQ0E1QmdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IERyaWJiYmxlTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0RyaWJiYmxlTmF2XCI7XG5cbmNsYXNzIERyaWJiYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuZHJpYmJibGUuY29tL3YyL3VzZXIvc2hvdHM/YWNjZXNzX3Rva2VuPWY4ZmEyNjJkYzEzNmY3NzhjMmUzNjc1NDRhYjhjZTQ2YTA4NDNjOWI2NTYwYTUyY2Q4OGQwOGNhODMzOTc4MThcIlxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICBsZXQgZnJhZ21lbnQgPSBcIlwiO1xuXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaSkge1xuICAgICAgICAgICAgZnJhZ21lbnQgKz1cbiAgICAgICAgICAgICAgJzxhIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgK1xuICAgICAgICAgICAgICB2YWwuaHRtbF91cmwgK1xuICAgICAgICAgICAgICAnXCIgdGl0bGU9XCInICtcbiAgICAgICAgICAgICAgdmFsLnRpdGxlICtcbiAgICAgICAgICAgICAgJ1wiPjxpbWcgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgYm9yZGVyLXJhZGl1czogMnB4OyBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1wiIHNyYz1cIicgK1xuICAgICAgICAgICAgICB2YWwuaW1hZ2VzLmhpZHBpICtcbiAgICAgICAgICAgICAgJ1wiLz48L2E+JztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdHNcIikuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8RHJpYmJibGVOYXYgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHJpYmJibGUtcHJvZmlsZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmliYmJsZS1wcm9maWxlLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL0B2aWN0b3JrZXJuZXMucG5nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS92aWN0b3JrZXJuZXNcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBAdmljdG9ya2VybmVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSBkZXNpZ24gYW5kIGNvZGUgYXQgVmlydGEgSGVhbHRoLCB3aGVyZSB3ZSByZXZlcnNlIHR5cGUgMlxuICAgICAgICAgICAgICBkaWFiZXRlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3RzXCIgaWQ9XCJzaG90c1wiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2NHB4IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaG90cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJpYmJibGUtcHJvZmlsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJpYmJibGUtcHJvZmlsZSBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcmliYmJsZS1wcm9maWxlLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjOGM3ZGY3O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIC5zaG90cyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0ZSgyLCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgLnNob3RzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmliYmJsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/Dribbble.js */"));
    }
  }]);

  return Dribbble;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleFooter.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var DribbbleFooter = function DribbbleFooter() {
  return __jsx("footer", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("a", {
    href: "/blog",
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Blog")), __jsx("li", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: "/work",
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Work")), __jsx("li", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/victorkernes",
    target: "_blank",
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "GitHub")), __jsx("li", {
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:victorkernes@gmail.com",
    target: "_blank",
    className: "jsx-618174700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Contact")))), __jsx("p", {
    className: "jsx-618174700" + " " + "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Copyright \xA9 2019 Victor Kernes"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "618174700",
    __self: this
  }, "footer.jsx-618174700{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}ul.jsx-618174700{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:0;margin:0;-webkit-text-decoration:none;text-decoration:none;}li.jsx-618174700{list-style:none;padding-right:1rem;}li.jsx-618174700:nth-child(4){padding-right:0;}p.jsx-618174700,a.jsx-618174700{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;font-size:1.125rem;color:#9a9a9a;line-height:1.5;padding-bottom:18px;font-style:normal;font-weight:400;margin:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.copyright.jsx-618174700{font-size:16px;color:#9a9a9a;}.copyright.jsx-618174700:hover,a.jsx-618174700:hover{color:#9a9a9a;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFHMkIsQUFPRSxBQU1KLEFBSUEsQUFJSSxBQVlMLEFBS0QsY0FDa0IsQ0FMbEIsQ0FwQkssQUFJckIsRUFqQmUsV0FrQ2YsTUFwQkEsbURBeUJBLE1BdEN3QixVQU1aLEFBY1csVUFiWixTQUNZLCtCQWFGLGtCQXBCQSxDQVFyQixBQWFnQixjQUNFLGdCQUNJLG9CQUNGLGtCQUNGLGdCQUNQLFFBekJLLENBMEJrQixhQXpCbEMsMkRBMEJBIiwiZmlsZSI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHJpYmJibGVGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPG5hdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiL3dvcmtcIj5Xb3JrPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92aWN0b3JrZXJuZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86dmljdG9ya2VybmVzQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIDIwMTkgVmljdG9yIEtlcm5lczwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmb290ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICBsaTpudGgtY2hpbGQoNCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgcCxcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgfVxuICAgICAgLmNvcHlyaWdodDpob3ZlcixcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyaWJiYmxlRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleFooter.js */"));
};

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DribbbleFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DribbbleFooter */ "./components/DribbbleFooter.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Layout = function Layout(props) {
  return __jsx("div", {
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cloud.typography.com/6931734/6253212/css/fonts.css",
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "../static/favicon/favicon.ico",
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "../static/favicon/apple-touch-icon.png",
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
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
    __self: this
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
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "../static/favicon/site.webmanifest",
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3344028266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "@victorkernes")), props.children, __jsx(_DribbbleFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3344028266",
    __self: this
  }, "*{padding:0;margin:0;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html{font-family:\"Ideal Sans A\",\"Ideal Sans B\",-apple-system, BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue, sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%;text-rendering:optimizeLegibility;}button,input,optgroup,select,textarea{font-family:inherit;}body{background-color:#f4f4f4;color:#9a9a9a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDdUIsQUFHbUIsQUFTRSxBQVNRLEFBR0ssVUFwQmhCLFNBQ2EsQ0FpQnhCLEtBR2dCLGNBQ2hCLEVBcEJxQyxtQ0FDRCxrQ0FDcEMsdUJBS3dCLG9EQUNZLGtDQUNwQyIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9EcmliYmJsZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBEcmliYmJsZUZvb3RlciBmcm9tIFwiLi9EcmliYmJsZUZvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2xvdWQudHlwb2dyYXBoeS5jb20vNjkzMTczNC82MjUzMjEyL2Nzcy9mb250cy5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2Zhdmljb24uaWNvXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8dGl0bGU+QHZpY3Rvcmtlcm5lczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8RHJpYmJibGVGb290ZXIgLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG4gICAgICBodG1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSWRlYWwgU2FucyBBXCIsIFwiSWRlYWwgU2FucyBCXCIsIC1hcHBsZS1zeXN0ZW0sXG4gICAgICAgICAgQmxpbmtNYWNTeXN0ZW1Gb250LCBTYW4gRnJhbmNpc2NvLCBSb2JvdG8sIFNlZ29lIFVJLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgfVxuICAgICAgYnV0dG9uLFxuICAgICAgaW5wdXQsXG4gICAgICBvcHRncm91cCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleLayout.js */"));
};

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLink */ "./components/NavLink.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/DribbbleNav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var DribbbleNav = function DribbbleNav() {
  return __jsx("div", {
    className: "jsx-1266126796" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1266126796",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1266126796" + " " + "logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    alt: "home",
    className: "jsx-1266126796" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "/static/@.png",
    className: "jsx-1266126796" + " " + "nav-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1266126796" + " " + "nav-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "victorkernes"))), __jsx("div", {
    className: "jsx-1266126796",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1266126796" + " " + "nav-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1266126796",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/work",
    alt: "work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1266126796" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Work"))), __jsx("li", {
    className: "jsx-1266126796",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/blog",
    alt: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1266126796" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Blog")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1266126796",
    __self: this
  }, "nav.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding-left:24px;padding-right:24px;padding-bottom:56px;}.logo.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:24px;padding:8px 8px;margin:8px -8px;border-radius:8px;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out;}.logo.jsx-1266126796:hover{background:rgba(255,255,255,0.1);-webkit-text-decoration:none;text-decoration:none;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.logo.jsx-1266126796:active{outline:0;box-shadow:0 0 0 3px rgba(255,255,255,0.4);-webkit-text-decoration:none;text-decoration:none;}.nav-logo.jsx-1266126796{height:24px;width:24px;}.nav-name.jsx-1266126796{font-size:16px;font-weight:600;padding-left:8px;color:#9a9a9a;-webkit-text-decoration:none;text-decoration:none;}.nav-items.jsx-1266126796{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}li.jsx-1266126796{padding-left:24px;}.nav-item.jsx-1266126796{font-size:16px;font-weight:600;padding-bottom:8px;color:#9a9a9a;-webkit-text-decoration:none;text-decoration:none;}.nav-item.jsx-1266126796:hover{color:#8c7df7;border-bottom:2px solid #8c7df7;}a.jsx-1266126796{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbS9jb21wb25lbnRzL0RyaWJiYmxlTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFHNkIsQUFTQSxBQVNnQixBQU0xQixBQUtFLEFBSUcsQUFPSyxBQUlGLEFBR0gsQUFPRCxBQUlPLFVBakN5QixFQUtuQyxFQXlCcUIsQ0FyQmhCLEFBY0EsR0FIbEIsS0FkQSxRQUltQixBQWNFLEVBOUJFLGFBcUN2QixFQXBCZ0IsRUFjQSxBQVNDLEdBakNNLFNBV0EsRUFjQSxDQVN2QixrQkF4Q1ksVUFDc0IsU0FwQmIsQUFTQSxBQStCSCxDQWRsQixTQVdBLEVBY0EsSUFWQSwrQ0FwQkEsOEJBcEJnQyxBQVNiLGlCQUNELGdCQUNBLGdCQUNFLGtCQUNjLGdEQVpyQixXQUNPLGFBWXBCLEtBWHFCLG1CQUNDLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20vY29tcG9uZW50cy9EcmliYmJsZU5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gXCIuL05hdkxpbmtcIjtcblxuY29uc3QgRHJpYmJibGVOYXYgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCIgYWx0PVwiaG9tZVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2LWxvZ29cIiBzcmM9XCIvc3RhdGljL0AucG5nXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbmFtZVwiPnZpY3Rvcmtlcm5lczwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3dvcmtcIiBhbHQ9XCJ3b3JrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5Xb3JrPC9zcGFuPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYmxvZ1wiIGFsdD1cImJsb2dcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkJsb2c8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2cHg7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgICAgbWFyZ2luOiA4cHggLThweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5sb2dvOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgICAgLmxvZ286YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdi1sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5uYXYtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAubmF2LWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5uYXYtaXRlbTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjOGM3ZGY3O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzhjN2RmNztcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJpYmJibGVOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/victor/Projects/victorkernes.com/components/DribbbleNav.js */"));
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/NavLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var style = {
    borderBottom: router.pathname === href ? "2px solid #8c7df7" : "none",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fff",
    paddingBottom: "8px"
  };

  var handleClick = function handleClick(e) {
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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _construct = __webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(urlPropertyFields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _Set();
  var tags = new _Set();
  var metaTypes = new _Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");

var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new _Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/index.js?f7b8":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1d49248b1ae4b0ff3f2c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1d49248b1ae4b0ff3f2c */ "dll-reference dll_1d49248b1ae4b0ff3f2c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./pages/work/dribbble.js":
/*!********************************!*\
  !*** ./pages/work/dribbble.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f7b8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dribbble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dribbble */ "./components/Dribbble.js");
/* harmony import */ var _components_DribbbleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DribbbleLayout */ "./components/DribbbleLayout.js");
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/pages/work/dribbble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_DribbbleLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_Dribbble__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=dribbble.js.42a030874b03332aa1c8.hot-update.js.map