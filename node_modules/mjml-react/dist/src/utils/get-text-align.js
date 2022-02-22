"use strict";

exports.__esModule = true;
exports.getTextAlign = getTextAlign;
var TEXT_ALIGN_VALUES = ['left', 'right', 'center', 'justify', 'inherit'];

function getTextAlign(value, fallback) {
  if (fallback === void 0) {
    fallback = 'center';
  }

  if (value && TEXT_ALIGN_VALUES.includes(value)) {
    return value;
  }

  return fallback;
}