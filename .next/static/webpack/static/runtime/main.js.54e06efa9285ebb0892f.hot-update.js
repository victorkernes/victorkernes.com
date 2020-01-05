webpackHotUpdate("static/runtime/main.js",{

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.ErrorComponent = exports.router = exports.dataManager = exports.version = void 0;

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _router = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _dataManagerContext = __webpack_require__(/*! ../next-server/lib/data-manager-context */ "./node_modules/next/dist/next-server/lib/data-manager-context.js");

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _dataManager = __webpack_require__(/*! ../next-server/lib/data-manager */ "./node_modules/next/dist/next-server/lib/data-manager.js");

var _querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
/* global location */


if (!window.Promise) {
  window.Promise = _promise["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.1.7";
exports.version = version;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds;
var d = JSON.parse(window.__NEXT_DATA__.dataManager);
var dataManager = new _dataManager.DataManager(d);
exports.dataManager = dataManager;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = prefix + "/_next/"; //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref7 = _slicedToArray(_ref, 2),
      r = _ref7[0],
      f = _ref7[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = new _headManager["default"]();
var appElement = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var router;
exports.router = router;
var ErrorComponent;
exports.ErrorComponent = ErrorComponent;
var Component;
var App, onPerfEntry;

var Container =
/*#__PURE__*/
function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();

      if (false) {} // If page was exported and has a querystring
      // If it's a dynamic route or has a querystring


      if (data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || Component.__NEXT_SPR && location.search) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2["default"])({}, router.query, {}, (0, _querystring.parse)(location.search.substr(1)))), asPath, {
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_temp) {
    var _ref8, passedWebpackHMR, _ref9, app, mod, initialErr, _require, isValidElementType, renderCtx;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref8 = _temp === void 0 ? {} : _temp, passedWebpackHMR = _ref8.webpackHMR; // This makes sure this specific lines are removed in production

            if (true) {
              webpackHMR = passedWebpackHMR;
            }

            _context.next = 4;
            return pageLoader.loadPageScript('/_app');

          case 4:
            _ref9 = _context.sent;
            app = _ref9.page;
            mod = _ref9.mod;
            App = app;

            if (mod && mod.unstable_onPerformanceData) {
              onPerfEntry = function onPerfEntry(_ref3) {
                var name = _ref3.name,
                    startTime = _ref3.startTime,
                    value = _ref3.value,
                    duration = _ref3.duration;
                mod.unstable_onPerformanceData({
                  name: name,
                  startTime: startTime,
                  value: value,
                  duration: duration
                });
              };
            }

            initialErr = err;
            _context.prev = 10;
            _context.next = 13;
            return pageLoader.loadPage(page);

          case 13:
            Component = _context.sent;

            if (false) {}

            _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

            if (isValidElementType(Component)) {
              _context.next = 18;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"" + page + "\"");

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](10);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t0;

          case 23:
            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 26;
              break;
            }

            _context.next = 26;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 26:
            exports.router = router = (0, _router.createRouter)(page, query, asPath, {
              initialProps: props,
              pageLoader: pageLoader,
              App: App,
              Component: Component,
              wrapApp: wrapApp,
              err: initialErr,
              subscription: function subscription(_ref4, App) {
                var Component = _ref4.Component,
                    props = _ref4.props,
                    err = _ref4.err;
                render({
                  App: App,
                  Component: Component,
                  props: props,
                  err: err,
                  emitter: emitter
                });
              }
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: App,
              Component: Component,
              props: props,
              err: initialErr,
              emitter: emitter
            };
            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 20]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x2) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2(props) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!props.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(props);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(props);

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);
            _context2.next = 13;
            return renderError((0, _extends2["default"])({}, props, {
              err: _context2.t0
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(_x3) {
  return _renderError.apply(this, arguments);
} // If hydrate does not exist, eg in preact.


function _renderError() {
  _renderError = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3(props) {
    var App, err, AppTree, appCtx, initProps;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            App = props.App, err = props.err; // In development runtime errors are caught by react-error-overlay
            // In production we catch runtime errors using componentDidCatch which will trigger renderError

            if (false) {}

            return _context3.abrupt("return", webpackHMR.reportRuntimeError(webpackHMR.prepareError(err)));

          case 3:
            if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


            console.error(err);
            _context3.next = 7;
            return pageLoader.loadPage('/_error');

          case 7:
            exports.ErrorComponent = ErrorComponent = _context3.sent;
            // In production we do a normal render with the `ErrorComponent` as component.
            // If we've gotten here upon initial render, we can use the props from the server.
            // Otherwise, we need to call `getInitialProps` on `App` before mounting.
            AppTree = wrapApp(App);
            appCtx = {
              Component: ErrorComponent,
              AppTree: AppTree,
              router: router,
              ctx: {
                err: err,
                pathname: page,
                query: query,
                asPath: asPath,
                AppTree: AppTree
              }
            };

            if (!props.props) {
              _context3.next = 14;
              break;
            }

            _context3.t0 = props.props;
            _context3.next = 17;
            break;

          case 14:
            _context3.next = 16;
            return (0, _utils.loadGetInitialProps)(App, appCtx);

          case 16:
            _context3.t0 = _context3.sent;

          case 17:
            initProps = _context3.t0;
            _context3.next = 20;
            return doRender((0, _extends2["default"])({}, props, {
              err: err,
              Component: ErrorComponent,
              props: initProps
            }));

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _renderError.apply(this, arguments);
}

var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  // mark start of hydrate/render
  if (_utils.SUPPORTS_PERFORMANCE_USER_TIMING) {
    performance.mark('beforeRender');
  }

  if (false) { var opts, callback; } else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }

  if (onPerfEntry && _utils.SUPPORTS_PERFORMANCE_USER_TIMING) {
    if (!(PerformanceObserver in window)) {
      window.addEventListener('load', function () {
        performance.getEntriesByType('paint').forEach(onPerfEntry);
      });
    } else {
      var observer = new PerformanceObserver(function (list) {
        list.getEntries().forEach(onPerfEntry);
      });
      observer.observe({
        entryTypes: ['paint']
      });
    }
  }
}

function markHydrateComplete() {
  if (!_utils.SUPPORTS_PERFORMANCE_USER_TIMING) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
    performance.getEntriesByName('beforeRender').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.SUPPORTS_PERFORMANCE_USER_TIMING) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
  ['Next.js-before-hydration', 'Next.js-hydration', 'Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function AppContainer(_ref5) {
  var children = _ref5.children;
  return _react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: App,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, _react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, _react["default"].createElement(_dataManagerContext.DataManagerContext.Provider, {
    value: dataManager
  }, _react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager.updateHead
  }, children))));
}

var wrapApp = function wrapApp(App) {
  return function (props) {
    var appProps = (0, _extends2["default"])({}, props, {
      Component: Component,
      err: err,
      router: router
    });
    return _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps));
  };
};

function doRender(_x4) {
  return _doRender.apply(this, arguments);
}

function _doRender() {
  _doRender = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee4(_ref6) {
    var App, Component, props, err, _router2, pathname, _query, _asPath, AppTree, appCtx, appProps, elem;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            App = _ref6.App, Component = _ref6.Component, props = _ref6.props, err = _ref6.err; // Usual getInitialProps fetching is handled in next/router
            // this is for when ErrorComponent gets replaced by Component by HMR

            if (!(!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent)) {
              _context4.next = 8;
              break;
            }

            _router2 = router, pathname = _router2.pathname, _query = _router2.query, _asPath = _router2.asPath;
            AppTree = wrapApp(App);
            appCtx = {
              router: router,
              AppTree: AppTree,
              Component: ErrorComponent,
              ctx: {
                err: err,
                pathname: pathname,
                query: _query,
                asPath: _asPath,
                AppTree: AppTree
              }
            };
            _context4.next = 7;
            return (0, _utils.loadGetInitialProps)(App, appCtx);

          case 7:
            props = _context4.sent;

          case 8:
            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;
            appProps = (0, _extends2["default"])({}, props, {
              Component: Component,
              err: err,
              router: router
            }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

            lastAppProps = appProps;
            emitter.emit('before-reactdom-render', {
              Component: Component,
              ErrorComponent: ErrorComponent,
              appProps: appProps
            });
            elem = _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps)); // We catch runtime errors using componentDidCatch which will trigger renderError

            renderReactElement( false ? undefined : elem, appElement);
            emitter.emit('after-reactdom-render', {
              Component: Component,
              ErrorComponent: ErrorComponent,
              appProps: appProps
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _doRender.apply(this, arguments);
}

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

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

/***/ "./node_modules/next/dist/next-server/lib/data-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/data-manager-context.js ***!
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

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.DataManagerContext = React.createContext(null);

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

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

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

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1d49248b1ae4b0ff3f2c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1d49248b1ae4b0ff3f2c */ "dll-reference dll_1d49248b1ae4b0ff3f2c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/react/index.js?f7b8":
false

})
//# sourceMappingURL=main.js.54e06efa9285ebb0892f.hot-update.js.map