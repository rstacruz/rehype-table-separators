"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSeparatorRow = isSeparatorRow;
exports.isSeparatorTD = isSeparatorTD;
exports.addClassNames = addClassNames;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Checks if a given element is a `<tr>` with separator td's.
 */
function isSeparatorRow(tr) {
  var children = tr.children;
  if (!children) return false;
  if (!tr.tagName || tr.tagName !== 'tr') return false; // Can't be if you don't have any TD's

  if (children.length === 0) return false; // Ensure all TD's are separator TD's

  return tr.children.reduce(function (result, td) {
    return result && isSeparatorTD(td);
  }, true);
}
/**
 * Checks if a given node is a separator TD.
 */


function isSeparatorTD(td) {
  return td && td.type === 'element' && td.tagName === 'td' && td.children && td.children.length === 1 && td.children[0].type === 'text' && td.children[0].value.match(/^\s*-+\s*$/);
}
/**
 * Adds a className to a Hast node.
 */


function addClassNames(node, newClassNames) {
  var properties = node.properties || {};
  var className = properties.className || [];
  return _objectSpread({}, node, {
    properties: _objectSpread({}, properties, {
      className: _toConsumableArray(className).concat(_toConsumableArray(newClassNames))
    })
  });
}