var _excluded = ["children", "condition"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { MjmlComment } from './mjml-comment';
export var MjmlConditionalComment = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlConditionalComment, _Component);

  function MjmlConditionalComment() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlConditionalComment.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        condition = _this$props.condition,
        rest = _objectWithoutPropertiesLoose(_this$props, _excluded);

    if (children && children.trim().length) {
      return /*#__PURE__*/React.createElement(MjmlComment, rest, "[" + condition + "]>" + children + "<![endif]");
    }

    return null;
  };

  return MjmlConditionalComment;
}(Component);

_defineProperty(MjmlConditionalComment, "defaultProps", {
  condition: 'if gte mso 9'
});