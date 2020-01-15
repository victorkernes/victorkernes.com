webpackHotUpdate("styles",{

/***/ "./components/Nav/styles.css":
/*!***********************************!*\
  !*** ./components/Nav/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"NavContainer":"_3FvGqJGqu-rfpnGmeV5dKt","LogoLink":"_167ruo453D1FUiAdFD84Yl","Logo":"_1jB1WekFXyUgcK8zv1g5dF","Name":"_2hPLer1QXgkUaX0Q99Gxjz","Job":"_3Cg5tBlgM8qhCUY5B_Veyt","NavContainerRight":"_3slxvaFgzCeE7qpTZw4SG7","NavLinksRight":"Jz0yh9mWMgHheqJGrtQwL","NavLinksLeft":"_1GCui28VPl76aICmLjnYli","NavLink":"_2ncogciuIS7HFS3nkdSthy"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578876496824");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5721915acced88b8e012.hot-update.js.map