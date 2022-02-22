function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
export var MjmlHtml = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlHtml, _Component);

  function MjmlHtml() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlHtml.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        tag = _this$props.tag,
        html = _this$props.html;
    return /*#__PURE__*/React.createElement(tag || 'mj-raw', {
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  };

  return MjmlHtml;
}(Component);