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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);




var NotesSVG = function NotesSVG(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            width: '48',
            height: '48',
            rx: '8',
            fill: '#FFF8B7'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            fill: '#EBE4A1',
            d: 'M0 32h48v2H0zM0 22h48v2H0z'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M1.17 44c-.286-.589-.503-1.25-.666-2h46.992c-.163.75-.38 1.411-.666 2H1.17z',
            fill: '#EBE4A1'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            d: 'M0 14C0 8.382 0 5.573 1.348 3.555a8 8 0 0 1 2.207-2.207C5.573 0 8.382 0 14 0h20c5.618 0 8.427 0 10.445 1.348a8 8 0 0 1 2.207 2.207C48 5.573 48 8.382 48 14H0z',
            fill: 'url(#a)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            d: 'M8 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z',
            fill: 'url(#c)',
            filter: 'url(#b)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            d: 'M30 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1z',
            fill: 'url(#e)',
            filter: 'url(#d)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'b',
                    x: '6',
                    y: '5',
                    width: '14',
                    height: '6',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'd',
                    x: '28',
                    y: '5',
                    width: '14',
                    height: '6',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'a',
                    x1: '24',
                    x2: '24',
                    y2: '14',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#69490C'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#543A08'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'c',
                    x1: '13',
                    y1: '6',
                    x2: '13',
                    y2: '8',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#E0E0E0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#C4C4C4'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'e',
                    x1: '35',
                    y1: '6',
                    x2: '35',
                    y2: '8',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#E0E0E0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#C4C4C4'
                })
            )
        )
    );
};

NotesSVG.defaultProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
};

var ReadSVG = function ReadSVG(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            width: '48',
            height: '48',
            rx: '8',
            fill: 'url(#a)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M8.07 24a7.002 7.002 0 1 0 13.758-2.547A11.18 11.18 0 0 1 24 21.25c.776 0 1.523.072 2.172.203A7 7 0 0 0 39.93 24H43a1 1 0 0 0 0-2h-3.07a7.002 7.002 0 0 0-13.03-2.435c-.914-.216-1.926-.315-2.9-.315s-1.986.099-2.9.315A7.002 7.002 0 0 0 8.07 22H5a1 1 0 0 0 0 2h3.07zM15 28a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm18 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
            fill: 'url(#c)',
            filter: 'url(#b)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'b',
                    x: '2',
                    y: '15',
                    width: '44',
                    height: '18',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'a',
                    x1: '24',
                    x2: '24',
                    y2: '48',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#252626'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#14161A'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'c',
                    x1: '24',
                    y1: '16',
                    x2: '24',
                    y2: '30',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#D8E4F2'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#A7AFB8'
                })
            )
        )
    );
};

ReadSVG.defaultProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
};

var EmailSVG = function EmailSVG(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            width: '48',
            height: '48',
            rx: '8',
            fill: '#254DB3'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            x: '8',
            y: '12',
            width: '32',
            height: '24',
            rx: '2',
            fill: '#fff',
            filter: 'url(#a)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            fill: '#62646B',
            d: 'M32 16h4v4h-4zM16 24h16v2H16zM16 28h16v2H16z'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'a',
                    x: '4',
                    y: '10',
                    width: '40',
                    height: '32',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '2'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '2'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            )
        )
    );
};

EmailSVG.defaultProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
};

var FigmaSVG = function FigmaSVG(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            width: '48',
            height: '48',
            rx: '8',
            fill: 'url(#a)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'g',
            {
                filter: 'url(#b)'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
                d: 'M14 14a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z',
                fill: '#E05A32'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
                d: 'M14 24a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z',
                fill: '#9761F6'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
                d: 'M24 9h5a5 5 0 0 1 0 10h-5V9z',
                fill: '#EE7A69'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
                d: 'M24 34a5 5 0 1 1-5-5h5v5z',
                fill: '#5ECB89'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('circle', {
                cx: '29',
                cy: '24',
                r: '5',
                fill: '#55BAF8'
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'b',
                    x: '12',
                    y: '9',
                    width: '24',
                    height: '34',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '2'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'a',
                    x1: '24',
                    x2: '24',
                    y2: '48',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#2C2D34'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#101215'
                })
            )
        )
    );
};

FigmaSVG.defaultProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
};

var VenmoSVG = function VenmoSVG(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        props,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', {
            width: '48',
            height: '48',
            rx: '8',
            fill: 'url(#a)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M28.452 37.555l-.002.002L27.14 39H15.494l-.54-3.784-.087-.612-.237-1.68c-.2-1.429-.476-3.425-.783-5.698-.612-4.535-1.352-10.21-1.848-14.67l8.758-.974c.483 4.353 1.212 9.941 1.823 14.464.202 1.502.392 2.882.554 4.055a30.957 30.957 0 0 0 2.643-4.334c1.851-3.704 3.099-8.198 1.991-12.63L36.318 11c1.83 7.32-.35 14.089-2.66 18.709a39.768 39.768 0 0 1-3.427 5.617 34.29 34.29 0 0 1-1.228 1.586 23.617 23.617 0 0 1-.492.578l-.038.042-.013.015-.008.008z',
            fill: '#fff',
            filter: 'url(#b)'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'filter',
                {
                    id: 'b',
                    x: '10',
                    y: '10',
                    width: '29',
                    height: '32',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feFlood', {
                    floodOpacity: '0',
                    result: 'BackgroundImageFix'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    'in': 'SourceAlpha',
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feOffset', {
                    dy: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feGaussianBlur', {
                    stdDeviation: '1'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feColorMatrix', {
                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    in2: 'BackgroundImageFix',
                    result: 'effect1_dropShadow'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('feBlend', {
                    'in': 'SourceGraphic',
                    in2: 'effect1_dropShadow',
                    result: 'shape'
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'linearGradient',
                {
                    id: 'a',
                    x1: '24',
                    x2: '24',
                    y2: '48',
                    gradientUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    stopColor: '#5DC3F3'
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('stop', {
                    offset: '1',
                    stopColor: '#3A96CD'
                })
            )
        )
    );
};

VenmoSVG.defaultProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
};


var Nav = function Nav() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-2815535456'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'section',
            {
                className: 'jsx-2815535456'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'nav',
                {
                    className: 'jsx-2815535456'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NotesSVG, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReadSVG, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(EmailSVG, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FigmaSVG, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VenmoSVG, null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: '', className: 'jsx-2815535456' + ' ' + 'text'
                    },
                    'Blog'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: '', className: 'jsx-2815535456' + ' ' + 'text'
                    },
                    'Books'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: '', className: 'jsx-2815535456' + ' ' + 'text'
                    },
                    'Email'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: '', className: 'jsx-2815535456' + ' ' + 'text'
                    },
                    'Projects'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { href: '', className: 'jsx-2815535456' + ' ' + 'text'
                    },
                    'Donate'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2815535456',
            css: ['section.jsx-2815535456{position:fixed;bottom:0;z-index:100;width:100%;margin-bottom:32px;}', 'nav.jsx-2815535456{max-width:464px;margin:0 auto;text-align:center;display:grid;grid-template-columns:repeat(5,auto);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;background-color:#1d1f21;padding:16px 0;box-shadow:inset 0px 2px 16px rgba(255,255,255,0.1);border-radius:8px;}', '.text.jsx-2815535456{padding-top:8px;}', '@media (max-width:720px){nav.jsx-2815535456{max-width:400px;}h2.jsx-2815535456{font-size:32px;}p.jsx-2815535456{font-size:18px;line-height:28px;}}']
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Blog.js


var Blog_Blog = function Blog() {
  return external__react__default.a.createElement(
    "div",
    {
      className: "jsx-1824567663"
    },
    external__react__default.a.createElement(
      "section",
      {
        className: "jsx-1824567663"
      },
      external__react__default.a.createElement(
        "header",
        {
          className: "jsx-1824567663"
        },
        external__react__default.a.createElement(
          "h2",
          {
            className: "jsx-1824567663"
          },
          "Blog"
        )
      ),
      external__react__default.a.createElement(
        "p",
        {
          className: "jsx-1824567663"
        },
        "I enjoy writing about my experiences with technology, thinking about the future, and putting my thoughts into words."
      ),
      external__react__default.a.createElement(
        "p",
        {
          className: "jsx-1824567663"
        },
        "Hopefully you\u2019ll enjoy reading. If you do, you can subscribe to my monthly newsletter to read more."
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: "1824567663",
      css: ["*.jsx-1824567663{padding:0;}", "section.jsx-1824567663{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "h2.jsx-1824567663{font-size:40px;font-weight:800;color:#fff;}", "p.jsx-1824567663{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}", "@media (max-width:720px){h2.jsx-1824567663{font-size:32px;}p.jsx-1824567663{font-size:18px;line-height:28px;}}"]
    })
  );
};

/* harmony default export */ var components_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./components/About.js





var About_Map = function Map(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement(
      'g',
      {
        filter: 'url(#a)'
      },
      external__react__default.a.createElement(
        'mask',
        {
          id: 'b',
          maskUnits: 'userSpaceOnUse',
          x: '16',
          y: '10',
          width: '310',
          height: '228'
        },
        external__react__default.a.createElement('rect', {
          x: '16',
          y: '10',
          width: '310',
          height: '228',
          rx: '4',
          fill: '#C4C4C4'
        })
      ),
      external__react__default.a.createElement(
        'g',
        {
          mask: 'url(#b)'
        },
        external__react__default.a.createElement('rect', {
          x: '-37',
          y: '-14',
          width: '400',
          height: '276',
          rx: '4',
          fill: 'url(#d)',
          filter: 'url(#c)'
        })
      )
    ),
    external__react__default.a.createElement(
      'g',
      {
        filter: 'url(#e)'
      },
      external__react__default.a.createElement('circle', {
        cx: '163',
        cy: '124',
        r: '24',
        fill: '#fff',
        fillOpacity: '.1'
      }),
      external__react__default.a.createElement('circle', {
        cx: '163',
        cy: '124',
        r: '23.5',
        stroke: '#fff'
      })
    ),
    external__react__default.a.createElement(
      'g',
      {
        filter: 'url(#f)'
      },
      external__react__default.a.createElement('circle', {
        cx: '163',
        cy: '124',
        r: '24',
        fill: 'url(#g)'
      }),
      external__react__default.a.createElement('circle', {
        cx: '163',
        cy: '124',
        r: '23.5',
        stroke: 'url(#h)',
        strokeOpacity: '.2'
      })
    ),
    external__react__default.a.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M163 136s9-9.489 9-14.652c0-5.163-3.858-9.348-9-9.348-5.142 0-9 4.185-9 9.348 0 5.163 9 14.652 9 14.652zm0-11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
      fill: 'url(#j)',
      filter: 'url(#i)'
    }),
    external__react__default.a.createElement(
      'defs',
      null,
      external__react__default.a.createElement(
        'filter',
        {
          id: 'a',
          x: '0',
          y: '0',
          width: '342',
          height: '260',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB'
        },
        external__react__default.a.createElement('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          'in': 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        }),
        external__react__default.a.createElement('feOffset', {
          dy: '6'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          stdDeviation: '8'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        }),
        external__react__default.a.createElement('feBlend', {
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow'
        }),
        external__react__default.a.createElement('feBlend', {
          'in': 'SourceGraphic',
          in2: 'effect1_dropShadow',
          result: 'shape'
        })
      ),
      external__react__default.a.createElement(
        'filter',
        {
          id: 'c',
          x: '-53',
          y: '-24',
          width: '432',
          height: '308',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB'
        },
        external__react__default.a.createElement('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          'in': 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        }),
        external__react__default.a.createElement('feOffset', {
          dy: '6'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          stdDeviation: '8'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        }),
        external__react__default.a.createElement('feBlend', {
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow'
        }),
        external__react__default.a.createElement('feBlend', {
          'in': 'SourceGraphic',
          in2: 'effect1_dropShadow',
          result: 'shape'
        })
      ),
      external__react__default.a.createElement(
        'pattern',
        {
          id: 'd',
          patternContentUnits: 'objectBoundingBox',
          width: '1',
          height: '1'
        },
        external__react__default.a.createElement('use', {
          xlinkHref: '#k',
          transform: 'matrix(.0005 0 0 .00071 -.034 -.014)'
        })
      ),
      external__react__default.a.createElement(
        'filter',
        {
          id: 'e',
          x: '135',
          y: '98',
          width: '56',
          height: '56',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB'
        },
        external__react__default.a.createElement('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          'in': 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        }),
        external__react__default.a.createElement('feOffset', {
          dy: '2'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          stdDeviation: '2'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
        }),
        external__react__default.a.createElement('feBlend', {
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow'
        }),
        external__react__default.a.createElement('feBlend', {
          'in': 'SourceGraphic',
          in2: 'effect1_dropShadow',
          result: 'shape'
        })
      ),
      external__react__default.a.createElement(
        'filter',
        {
          id: 'f',
          x: '135',
          y: '96',
          width: '56',
          height: '56',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB'
        },
        external__react__default.a.createElement('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          'in': 'BackgroundImage',
          stdDeviation: '2'
        }),
        external__react__default.a.createElement('feComposite', {
          in2: 'SourceAlpha',
          operator: 'in',
          result: 'effect1_backgroundBlur'
        }),
        external__react__default.a.createElement('feBlend', {
          'in': 'SourceGraphic',
          in2: 'effect1_backgroundBlur',
          result: 'shape'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          'in': 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }),
        external__react__default.a.createElement('feOffset', {
          dy: '4'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          stdDeviation: '5'
        }),
        external__react__default.a.createElement('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'
        }),
        external__react__default.a.createElement('feBlend', {
          in2: 'shape',
          result: 'effect2_innerShadow'
        })
      ),
      external__react__default.a.createElement(
        'filter',
        {
          id: 'i',
          x: '150',
          y: '110',
          width: '26',
          height: '32',
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB'
        },
        external__react__default.a.createElement('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          'in': 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        }),
        external__react__default.a.createElement('feOffset', {
          dy: '2'
        }),
        external__react__default.a.createElement('feGaussianBlur', {
          stdDeviation: '2'
        }),
        external__react__default.a.createElement('feColorMatrix', {
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
        }),
        external__react__default.a.createElement('feBlend', {
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow'
        }),
        external__react__default.a.createElement('feBlend', {
          'in': 'SourceGraphic',
          in2: 'effect1_dropShadow',
          result: 'shape'
        })
      ),
      external__react__default.a.createElement(
        'linearGradient',
        {
          id: 'g',
          x1: '163',
          y1: '100',
          x2: '163',
          y2: '148',
          gradientUnits: 'userSpaceOnUse'
        },
        external__react__default.a.createElement('stop', {
          stopColor: '#fff',
          stopOpacity: '.4'
        }),
        external__react__default.a.createElement('stop', {
          offset: '1',
          stopColor: '#fff',
          stopOpacity: '.15'
        })
      ),
      external__react__default.a.createElement(
        'linearGradient',
        {
          id: 'h',
          x1: '163',
          y1: '100',
          x2: '163',
          y2: '148',
          gradientUnits: 'userSpaceOnUse'
        },
        external__react__default.a.createElement('stop', {
          stopColor: '#fff'
        }),
        external__react__default.a.createElement('stop', {
          offset: '1',
          stopColor: '#fff',
          stopOpacity: '0'
        })
      ),
      external__react__default.a.createElement(
        'linearGradient',
        {
          id: 'j',
          x1: '163',
          y1: '112',
          x2: '163',
          y2: '136',
          gradientUnits: 'userSpaceOnUse'
        },
        external__react__default.a.createElement('stop', {
          stopColor: '#fff'
        }),
        external__react__default.a.createElement('stop', {
          offset: '1',
          stopColor: '#fff'
        })
      ),
      external__react__default.a.createElement('image', {
        id: 'k',
        width: '2164',
        height: '1468',
      })
    )
  );
};

About_Map.defaultProps = {
  width: '342',
  height: '260',
  viewBox: '0 0 342 260',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
};


var About_About = function About() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1392681719'
    },
    external__react__default.a.createElement(
      'section',
      {
        className: 'jsx-1392681719'
      },
      external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1392681719' + ' ' + 'mobile-map'
        },
        external__react__default.a.createElement(About_Map, null)
      ),
      external__react__default.a.createElement(
        'header',
        {
          className: 'jsx-1392681719'
        },
        external__react__default.a.createElement(
          'h2',
          {
            className: 'jsx-1392681719'
          },
          'About'
        )
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1392681719'
        },
        'You can find me in San Francisco, where I\u2019m always available to grab a coffee or go on a walk.'
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1392681719'
        },
        'When I\u2019m not working, I tend to play lots of basketball indoors. Got to protect those joints.'
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1392681719'
        },
        'Sometimes I\u2019ll play video games but I\u2019m horrible. Let me know if you want to carry me to the end in a game of Fortnite.'
      ),
      external__react__default.a.createElement(components_Blog, null)
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1392681719',
      css: ['*.jsx-1392681719{padding:0;}', 'section.jsx-1392681719{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', 'h2.jsx-1392681719{font-size:40px;font-weight:800;color:#fff;}', 'p.jsx-1392681719{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}', '@media (min-width:720px){.mobile-map.jsx-1392681719{display:none;}}', '@media (max-width:720px){h2.jsx-1392681719{font-size:32px;}p.jsx-1392681719{font-size:18px;line-height:28px;}}']
    })
  );
};

/* harmony default export */ var components_About = (About_About);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Videos.js




var Videos_Videos = function Videos() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1824567663'
    },
    external__react__default.a.createElement(
      'section',
      {
        className: 'jsx-1824567663'
      },
      external__react__default.a.createElement(
        'header',
        {
          className: 'jsx-1824567663'
        },
        external__react__default.a.createElement(
          'h2',
          {
            className: 'jsx-1824567663'
          },
          'Videos'
        )
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1824567663'
        },
        'I make videos on YouTube where I talk about the design decisions made for my favorite iOS and macOS apps.'
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1824567663',
      css: ['*.jsx-1824567663{padding:0;}', 'section.jsx-1824567663{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', 'h2.jsx-1824567663{font-size:40px;font-weight:800;color:#fff;}', 'p.jsx-1824567663{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}', '@media (max-width:720px){h2.jsx-1824567663{font-size:32px;}p.jsx-1824567663{font-size:18px;line-height:28px;}}']
    })
  );
};

/* harmony default export */ var components_Videos = (Videos_Videos);
// CONCATENATED MODULE: ./components/Interests.js




var Interests_Interests = function Interests() {
  return external__react__default.a.createElement(
    "div",
    {
      className: "jsx-1136044632"
    },
    external__react__default.a.createElement(
      "section",
      {
        className: "jsx-1136044632"
      },
      external__react__default.a.createElement(
        "header",
        {
          className: "jsx-1136044632"
        },
        external__react__default.a.createElement(
          "h2",
          {
            className: "jsx-1136044632"
          },
          "Interests"
        )
      ),
      external__react__default.a.createElement(
        "p",
        {
          className: "jsx-1136044632"
        },
        "I enjoy writing about my experiences with technology, thinking about the future, and putting my thoughts into words."
      ),
      external__react__default.a.createElement(
        "div",
        {
          className: "jsx-1136044632" + " " + "interests"
        },
        external__react__default.a.createElement(
          "div",
          {
            className: "jsx-1136044632"
          },
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Basketball"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Illustrations"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Mobile Apps"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Menswear"
          )
        ),
        external__react__default.a.createElement(
          "div",
          {
            className: "jsx-1136044632"
          },
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Programming"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Web Design"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Skeuomorphism"
          ),
          external__react__default.a.createElement(
            "p",
            {
              className: "jsx-1136044632"
            },
            "Sneakers"
          )
        )
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: "1136044632",
      css: ["*.jsx-1136044632{padding:0;}", "section.jsx-1136044632{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "h2.jsx-1136044632{font-size:40px;font-weight:800;color:#fff;}", "p.jsx-1136044632{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}", ".interests.jsx-1136044632{display:grid;grid-template-columns:repeat(2,auto);}", ".interests.jsx-1136044632 p.jsx-1136044632{line-height:28px;}", "@media (max-width:720px){h2.jsx-1136044632{font-size:32px;}p.jsx-1136044632{font-size:18px;line-height:28px;}}"]
    })
  );
};

/* harmony default export */ var components_Interests = (Interests_Interests);
// CONCATENATED MODULE: ./components/Podcasts.js





var Podcasts_Podcasts = function Podcasts() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1824567663'
    },
    external__react__default.a.createElement(
      'section',
      {
        className: 'jsx-1824567663'
      },
      external__react__default.a.createElement(
        'header',
        {
          className: 'jsx-1824567663'
        },
        external__react__default.a.createElement(
          'h2',
          {
            className: 'jsx-1824567663'
          },
          'Podcasts'
        )
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1824567663'
        },
        'One of my favorite things to do is talk about design and basketball. I\u2019m co-host for two podcasts where I\u2019m lucky to chat about my passions.'
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1824567663'
        },
        'I\u2019m looking to join a third one if you are looking for a co-host to talk about menswear.'
      ),
      external__react__default.a.createElement(components_Videos, null),
      external__react__default.a.createElement(components_Interests, null)
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1824567663',
      css: ['*.jsx-1824567663{padding:0;}', 'section.jsx-1824567663{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', 'h2.jsx-1824567663{font-size:40px;font-weight:800;color:#fff;}', 'p.jsx-1824567663{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}', '@media (max-width:720px){h2.jsx-1824567663{font-size:32px;}p.jsx-1824567663{font-size:18px;line-height:28px;}}']
    })
  );
};

/* harmony default export */ var components_Podcasts = (Podcasts_Podcasts);
// CONCATENATED MODULE: ./components/Social.js




var Social_Social = function Social() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1824567663'
    },
    external__react__default.a.createElement(
      'section',
      {
        className: 'jsx-1824567663'
      },
      external__react__default.a.createElement(
        'header',
        {
          className: 'jsx-1824567663'
        },
        external__react__default.a.createElement(
          'h2',
          {
            className: 'jsx-1824567663'
          },
          'Social'
        )
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-1824567663'
        },
        'If you\u2019d like to connect elsewhere on the internet, you can find me everywhere @victorkernes.'
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1824567663',
      css: ['*.jsx-1824567663{padding:0;}', 'section.jsx-1824567663{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', 'h2.jsx-1824567663{font-size:40px;font-weight:800;color:#fff;}', 'p.jsx-1824567663{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}', '@media (max-width:720px){h2.jsx-1824567663{font-size:32px;}p.jsx-1824567663{font-size:18px;line-height:28px;}}']
    })
  );
};

/* harmony default export */ var components_Social = (Social_Social);
// CONCATENATED MODULE: ./components/People.js





var People_People = function People() {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-3313035244'
    },
    external__react__default.a.createElement(
      'section',
      {
        className: 'jsx-3313035244'
      },
      external__react__default.a.createElement(
        'header',
        {
          className: 'jsx-3313035244'
        },
        external__react__default.a.createElement(
          'h2',
          {
            className: 'jsx-3313035244'
          },
          'People'
        )
      ),
      external__react__default.a.createElement(
        'p',
        {
          className: 'jsx-3313035244'
        },
        'These are the folks who have helped me get started in design. Most I\u2019ve met on Twitter but would love the chance to meet in person.'
      ),
      external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-3313035244' + ' ' + 'people'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-3313035244' + ' ' + 'left'
          },
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@vernalkick'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@bdc'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@frank_chimero'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@bjango'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@pasql'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@zachacole'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@gabrielvaldivia'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@krispuckett'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@gruber'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@viticci'
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-3313035244'
          },
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@3dfordesigners'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@jessicahische'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@drewwilson'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@sdw'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@charliedeets'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@taramann'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@wilsonminer'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@keeg'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@rsms'
          ),
          external__react__default.a.createElement(
            'p',
            {
              className: 'jsx-3313035244'
            },
            '@tatsvc'
          )
        )
      ),
      external__react__default.a.createElement(components_Social, null)
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '3313035244',
      css: ['*.jsx-3313035244{padding:0;}', 'section.jsx-3313035244{max-width:308px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', 'h2.jsx-3313035244{font-size:40px;font-weight:800;color:#fff;}', 'p.jsx-3313035244{font-size:22px;font-weight:300;color:#c3c3c3;line-height:34px;}', '.people.jsx-3313035244{display:grid;grid-template-columns:repeat(2,auto);}', '.people.jsx-3313035244 p.jsx-3313035244{line-height:28px;}', '.left.jsx-3313035244{padding-right:20px;}', '@media (max-width:720px){h2.jsx-3313035244{font-size:32px;}p.jsx-3313035244{font-size:18px;line-height:28px;}}']
    })
  );
};

/* harmony default export */ var components_People = (People_People);
// EXTERNAL MODULE: ./components/Nav.js
var Nav = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.js


var Footer_Footer = function Footer() {
  return external__react__default.a.createElement(
    "div",
    {
      className: "jsx-4034177288"
    },
    external__react__default.a.createElement(
      "footer",
      {
        className: "jsx-4034177288"
      },
      external__react__default.a.createElement(
        "p",
        {
          className: "jsx-4034177288"
        },
        "\xA9 Copyright 2018"
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: "4034177288",
      css: ["footer.jsx-4034177288{font-size:18px;color:#fff;margin:0 auto;width:100%;text-align:center;padding-top:180px;padding-bottom:32px;}", "@media (max-width:720px){footer.jsx-4034177288{padding-top:90px;}}"]
    })
  );
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.js









var Layout_Layout = function Layout(props) {
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-3112424787'
    },
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        'title',
        {
          className: 'jsx-3112424787'
        },
        'Victor Kernes'
      )
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-3112424787' + ' ' + 'container'
      },
      props.children
    ),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-3112424787' + ' ' + 'content'
      },
      external__react__default.a.createElement(components_About, null),
      external__react__default.a.createElement(components_Podcasts, null),
      external__react__default.a.createElement(components_People, null)
    ),
    external__react__default.a.createElement(components_Footer, null),
    external__react__default.a.createElement(style__default.a, {
      styleId: '3112424787',
      css: ['*.jsx-3112424787{margin:0;padding:0;}', '.content.jsx-3112424787{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(3,auto);-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;justify-items:center;}', '@media (max-width:1024px){.content.jsx-3112424787{grid-template-columns:repeat(2,auto);}}', '@media (max-width:720px){.content.jsx-3112424787{grid-template-columns:repeat(1,auto);}}']
    })
  );
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_markdown__);




// import fetch from 'isomorphic-unfetch'

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-3181354158'
      },
      props.url.query.title
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3181354158' + ' ' + 'markdown'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_markdown___default.a, { source: '\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here\u2019s the content.\n        ' })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3181354158',
      css: ['.markdown{font-family:"Arial";}', '.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}', '.markdown a:hover{opacity:0.6;}', '.markdown h3{margin:0;padding:0;text-transform:uppercase;}']
    })
  );
});

// const Post =  (props) => (
//     <Layout>
//        <h1>{props.show.name}</h1>
//        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//        <img src={props.show.image.medium}/>
//     </Layout>
// )
//
// Post.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }
//
// export default Post

// const Content = (props) => (
//   <div>
//     <h1>{props.url.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// );
//
// export default (props) => (
//   <Layout>
//     <Content url={props.url} />
//   </Layout>
// );

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })
/******/ ]);