'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tagName, attrs) {
  var stringAttrs = (0, _keys2.default)(attrs).map(function (attr) {
    return attr + '="' + attrs[attr] + '"';
  }).join(' ');

  stringAttrs = stringAttrs === '' ? '' : ' ' + stringAttrs;

  return '<' + tagName + stringAttrs + '>';
};

module.exports = exports['default'];