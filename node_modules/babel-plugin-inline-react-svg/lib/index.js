"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = require("path");

var _fs = require("fs");

var _parser = require("@babel/parser");

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _resolve = _interopRequireDefault(require("resolve"));

var _optimize = _interopRequireDefault(require("./optimize"));

var _escapeBraces = _interopRequireDefault(require("./escapeBraces"));

var _transformSvg = _interopRequireDefault(require("./transformSvg"));

var _fileExistsWithCaseSync = _interopRequireDefault(require("./fileExistsWithCaseSync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ignoreRegex;

var _default = (0, _helperPluginUtils.declare)(function (_ref) {
  var assertVersion = _ref.assertVersion,
      template = _ref.template,
      traverse = _ref.traverse,
      t = _ref.types;
  assertVersion(7);
  var buildSvg = template("\n  var SVG_NAME = function SVG_NAME(props) { return SVG_CODE; };\n");
  var buildSvgWithDefaults = template("\n  var SVG_NAME = function SVG_NAME(props) { return SVG_CODE; };\n  SVG_NAME.defaultProps = SVG_DEFAULT_PROPS_CODE;\n");

  function applyPlugin(importIdentifier, importPath, path, state) {
    if (typeof importPath !== 'string') {
      throw new TypeError('`applyPlugin` `importPath` must be a string');
    }

    var _state$opts = state.opts,
        ignorePattern = _state$opts.ignorePattern,
        caseSensitive = _state$opts.caseSensitive,
        providedFilename = _state$opts.filename;
    var file = state.file,
        filename = state.filename;

    if (ignorePattern) {
      // Only set the ignoreRegex once:
      ignoreRegex = ignoreRegex || new RegExp(ignorePattern); // Test if we should ignore this:

      if (ignoreRegex.test(importPath)) {
        return;
      }
    } // This plugin only applies for SVGs:


    if ((0, _path.extname)(importPath) === '.svg') {
      var iconPath = filename || providedFilename;

      var svgPath = _resolve["default"].sync(importPath, {
        basedir: (0, _path.dirname)(iconPath)
      });

      if (caseSensitive && !(0, _fileExistsWithCaseSync["default"])(svgPath)) {
        throw new Error("File path didn't match case of file on disk: ".concat(svgPath));
      }

      if (!svgPath) {
        throw new Error("File path does not exist: ".concat(importPath));
      }

      var rawSource = (0, _fs.readFileSync)(svgPath, 'utf8');
      var optimizedSource = state.opts.svgo === false ? rawSource : (0, _optimize["default"])(rawSource, state.opts.svgo);
      var escapeSvgSource = (0, _escapeBraces["default"])(optimizedSource);
      var parsedSvgAst = (0, _parser.parse)(escapeSvgSource, {
        sourceType: 'module',
        plugins: ['jsx']
      });
      traverse(parsedSvgAst, (0, _transformSvg["default"])(t));
      var svgCode = traverse.removeProperties(parsedSvgAst.program.body[0].expression);
      var opts = {
        SVG_NAME: importIdentifier,
        SVG_CODE: svgCode
      }; // Move props off of element and into defaultProps

      if (svgCode.openingElement.attributes.length > 1) {
        var keepProps = [];
        var defaultProps = [];
        svgCode.openingElement.attributes.forEach(function (prop) {
          if (prop.type === 'JSXSpreadAttribute') {
            keepProps.push(prop);
          } else {
            defaultProps.push(t.objectProperty(t.identifier(prop.name.name), prop.value));
          }
        });
        svgCode.openingElement.attributes = keepProps;
        opts.SVG_DEFAULT_PROPS_CODE = t.objectExpression(defaultProps);
      }

      if (opts.SVG_DEFAULT_PROPS_CODE) {
        var svgReplacement = buildSvgWithDefaults(opts);
        path.replaceWithMultiple(svgReplacement);
      } else {
        var _svgReplacement = buildSvg(opts);

        path.replaceWith(_svgReplacement);
      }

      file.get('ensureReact')();
      file.set('ensureReact', function () {});
    }
  }

  return {
    visitor: {
      Program: {
        enter: function () {
          function enter(_ref2, _ref3) {
            var scope = _ref2.scope,
                node = _ref2.node;
            var file = _ref3.file,
                opts = _ref3.opts,
                filename = _ref3.filename;

            if (typeof filename === 'string' && typeof opts.filename !== 'undefined') {
              throw new TypeError('the "filename" option may only be provided when transforming code');
            }

            if (typeof filename === 'undefined' && typeof opts.filename !== 'string') {
              throw new TypeError('the "filename" option is required when transforming code');
            }

            if (!scope.hasBinding('React')) {
              var reactImportDeclaration = t.importDeclaration([t.importDefaultSpecifier(t.identifier('React'))], t.stringLiteral('react'));
              file.set('ensureReact', function () {
                node.body.unshift(reactImportDeclaration);
              });
            } else {
              file.set('ensureReact', function () {});
            }
          }

          return enter;
        }()
      },
      CallExpression: function () {
        function CallExpression(path, state) {
          var node = path.node;
          var requireArg = node.arguments.length > 0 ? node.arguments[0] : null;
          var filePath = t.isStringLiteral(requireArg) ? requireArg.value : null;

          if (node.callee.name === 'require' && t.isVariableDeclarator(path.parent) && filePath) {
            applyPlugin(path.parent.id, filePath, path.parentPath.parentPath, state);
          }
        }

        return CallExpression;
      }(),
      ImportDeclaration: function () {
        function ImportDeclaration(path, state) {
          var node = path.node;

          if (node.specifiers.length > 0) {
            applyPlugin(node.specifiers[0].local, node.source.value, path, state);
          }
        }

        return ImportDeclaration;
      }()
    }
  };
});

exports["default"] = _default;