const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  target: "serverless",
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});