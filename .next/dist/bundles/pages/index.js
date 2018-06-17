module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Content.js";




var Content = function Content() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-98348013",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "main",
      {
        className: "jsx-98348013",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "ul",
        {
          className: "jsx-98348013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-98348013",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              {
                className: "jsx-98348013",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7
                }
              },
              "Home"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "li",
          {
            className: "jsx-98348013",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: "/about", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              {
                className: "jsx-98348013",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
                }
              },
              "About"
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "98348013",
      css: "main.jsx-98348013{background:#fff;color:#fff;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:240px;padding:5rem;border-radius:4px;margin:0 auto;margin-bottom:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHMkIsZ0JBQ0wsV0FDSyxnQkFDSCwwRUFDRCxZQUNDLGFBQ0ssa0JBQ0osY0FDSyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG1haW4+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXX0= */\n/*@ sourceURL=components/Content.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/Users/victor/Projects/victorkernes.com/components/Footer.js';




var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-484848843',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'footer',
      {
        className: 'jsx-484848843',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-484848843',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        '\xA9 Copyright 2018'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '484848843',
      css: 'footer.jsx-484848843{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-weight:400;font-size:16px;border-top:2px solid #4F5966;color:#4F5966;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUdxRSx3REFDMUMsZ0JBQ0QsZUFDYyw2QkFDZixjQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmljdG9yL1Byb2plY3RzL3ZpY3Rvcmtlcm5lcy5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxwPsKpIENvcHlyaWdodCAyMDE4PC9wPlxuICAgIDwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEY1OTY2O1xuICAgICAgICAgIGNvbG9yOiAjNEY1OTY2O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=components/Footer.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Content__ = __webpack_require__("./components/Content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = '/Users/victor/Projects/victorkernes.com/components/Layout.js';







var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2532317729',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'title',
        {
          className: 'jsx-2532317729',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Victor Kernes'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-2532317729' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Menu__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Content__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2532317729',
      css: '*.jsx-2532317729{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHa0IsU0FDQyxVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5WaWN0b3IgS2VybmVzPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8TWVudS8+XG4gICAgPENvbnRlbnQvPlxuICAgIDxGb290ZXIvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=components/Layout.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/victor/Projects/victorkernes.com/components/Menu.js";




var Menu = function Menu() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-2885009322",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "ul",
      {
        className: "jsx-2885009322",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "li",
        {
          className: "jsx-2885009322",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/", __source: {
              fileName: _jsxFileName,
              lineNumber: 6
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              className: "jsx-2885009322",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6
              }
            },
            "Notes"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "li",
        {
          className: "jsx-2885009322",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/about", __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              className: "jsx-2885009322",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              }
            },
            "Books"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "li",
        {
          className: "jsx-2885009322",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/about", __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              className: "jsx-2885009322",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            "Email"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "li",
        {
          className: "jsx-2885009322",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/about", __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              className: "jsx-2885009322",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            "Work"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "li",
        {
          className: "jsx-2885009322",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { href: "/about", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              className: "jsx-2885009322",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            "Donate"
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2885009322",
      css: "*.jsx-2885009322{text-align:center;}ul.jsx-2885009322{color:#fff;list-style:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}li.jsx-2885009322{font-size:16px;padding:2px 8px;margin-right:8px;background-color:#1B7BF4;border-radius:2px;text-transform:lowercase;}ul.jsx-2885009322 li.jsx-2885009322 a.jsx-2885009322{color:#fff;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHNkIsQUFHUCxBQU1JLEFBUUosV0FiSyxBQWNLLElBUkwsR0FUbEIsU0FJc0IsSUFNSCxDQVFuQixnQkFQMkIseUJBQ1Asa0JBQ08seUJBQzNCLGFBVCtCLDJIQUMvQiIsImZpbGUiOiJjb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZpY3Rvci9Qcm9qZWN0cy92aWN0b3JrZXJuZXMuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWVudSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT5Ob3RlczwvYT48L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+Qm9va3M8L2E+PC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkVtYWlsPC9hPjwvTGluaz48L2xpPlxuICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5Xb3JrPC9hPjwvTGluaz48L2xpPlxuICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5Eb25hdGU8L2E+PC9MaW5rPjwvbGk+XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCN0JGNDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdfQ== */\n/*@ sourceURL=components/Menu.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
var _jsxFileName = '/Users/victor/Projects/victorkernes.com/pages/index.js';






function getPosts() {
  return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'li',
    {
      className: 'jsx-2210596814',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
      { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2210596814',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        post.title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2210596814',
      css: 'li.jsx-2210596814{list-style:none;margin:5px 0;}a.jsx-2210596814{text-decoration:none;color:#fff;font-family:"Arial";}a.jsx-2210596814:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHeUIsQUFLSyxBQU1ULFlBQ2QsSUFYZSxLQUtGLFFBSmIsR0FLc0Isb0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiBnZXRQb3N0cyAoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcyd9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnfSxcbiAgXVxufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9saT5cbilcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlZpY3RvciBLZXJuZXM8L2gxPlxuICAgIDxoMj5VWCBEZXNpZ25lciwgU2FuIEZyYW5jaXNjbzwvaDI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMCcpO1xuICAgICAgKiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubyc7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkQzMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjODE4RUExO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDV4cCAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4vLyAgIDxMYXlvdXQ+XG4vLyAgICAgPGgxPkJhdG1hbiBTaG93czwvaDE+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG4vLyAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgPC9saT5cbi8vICAgICApKX1cbi8vICAgICA8L3VsPlxuLy8gICA8L0xheW91dD5cbi8vIClcbi8vXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd3M6IGRhdGFcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2Bwb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgPC9saT5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcbi8vICAgPExheW91dD5cbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxPldlbGNvbWUgdG8gbXkgYmxvZzwvaDE+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIi8+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiLz5cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvTGF5b3V0PlxuLy8gKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-649001425',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      },
      'Victor Kernes'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h2',
      {
        className: 'jsx-649001425',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      },
      'UX Designer, San Francisco'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '649001425',
      css: '@import url(\'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700\');*{text-align:center;font-family:\'Roboto Mono\';}body{background-color:#2A2D30;font-weight:400;}h1{color:#fff;font-weight:700;font-size:32px;-webkit-letter-spacing:-0.75px;-moz-letter-spacing:-0.75px;-ms-letter-spacing:-0.75px;letter-spacing:-0.75px;font-family:-apple-system,BlinkMacSystemFont;}h2{color:#818EA1;font-weight:400;font-size:18px;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;}ul{padding:0;}li{list-style:none;margin:5xp 0;}a{text-decoration:none;color:#fff;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDdUIsQUFFaUYsQUFFdEQsQUFJTyxBQUlkLEFBT0csQUFNSixBQUdNLEFBSUssQUFJVCxVQVZkLENBYmtCLENBd0JsQixFQWpCa0IsRUFTSCxFQXhCYSxHQTRCZixJQXhCSyxFQUtELEVBZ0JqQixDQVRpQixFQWFqQixTQXhCQSxDQUt5QixFQVR6QixDQWdCeUIsMEdBTnVCLEdBT2hELDBDQU5BIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92aWN0b3IvUHJvamVjdHMvdmljdG9ya2VybmVzLmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiBnZXRQb3N0cyAoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcyd9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnfSxcbiAgXVxufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9saT5cbilcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPlZpY3RvciBLZXJuZXM8L2gxPlxuICAgIDxoMj5VWCBEZXNpZ25lciwgU2FuIEZyYW5jaXNjbzwvaDI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMCcpO1xuICAgICAgKiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubyc7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkQzMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjODE4RUExO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDV4cCAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4vLyAgIDxMYXlvdXQ+XG4vLyAgICAgPGgxPkJhdG1hbiBTaG93czwvaDE+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG4vLyAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgPC9saT5cbi8vICAgICApKX1cbi8vICAgICA8L3VsPlxuLy8gICA8L0xheW91dD5cbi8vIClcbi8vXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd3M6IGRhdGFcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2Bwb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgPC9saT5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcbi8vICAgPExheW91dD5cbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxPldlbGNvbWUgdG8gbXkgYmxvZzwvaDE+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIi8+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiLz5cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvTGF5b3V0PlxuLy8gKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
    })
  );
});

// const Index = (props) => (
//   <Layout>
//     <h1>Batman Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//       <li key={show.id}>
//         <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//           <a>{show.name}</a>
//         </Link>
//       </li>
//     ))}
//     </ul>
//   </Layout>
// )
//
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }
//
// export default Index
// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout>
//     <div>
//       <h1>Welcome to my blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js"/>
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//       </ul>
//     </div>
//   </Layout>
// );

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map