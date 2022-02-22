'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shorthandRegex = /^#\w{3}$/;
var replaceInputRegex = /^#(\w)(\w)(\w)$/;
var replaceOutput = '#$1$1$2$2$3$3';

exports.default = function (attrs) {
  return (0, _lodash.reduce)(attrs, function (acc, val, attr) {
    var value = val;
    if (attr.includes('color') && val.match(shorthandRegex)) {
      value = val.replace(replaceInputRegex, replaceOutput);
    }
    return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, attr, value));
  }, {});
};

module.exports = exports['default'];