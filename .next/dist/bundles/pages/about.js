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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = '/Users/victor/Projects/victorkernes.com/pages/about.js';



var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        'About me today'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'Learn more about me'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


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
//# sourceMappingURL=about.js.map