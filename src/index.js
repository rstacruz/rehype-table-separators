"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULTS = void 0;

var _unistUtilMap = _interopRequireDefault(require("unist-util-map"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Default options
 */
var DEFAULTS = {
  separatorClass: 'separator'
  /**
   * Fixes table separators in an HAST node.
   * @name apply
   * @returns {Node} a copy of the root node, but with tables fixed.
   *
   * @param {Node} root The root node
   * @param {Options} [options] The options
   */

};
exports.DEFAULTS = DEFAULTS;

function apply(root, options) {
  var opts = _objectSpread({}, DEFAULTS, options);

  return (0, _unistUtilMap.default)(root, function (node, _, parent) {
    if ((0, _helpers.isSeparatorRow)(node)) {
      return (0, _helpers.addClassNames)(node, [opts.separatorClass]);
    }

    if ((0, _helpers.isSeparatorTD)(parent)) {
      return _objectSpread({}, node, {
        value: ''
      });
    }

    return node;
  });
}
/**
 * Export
 */


var _default = apply;
exports.default = _default;