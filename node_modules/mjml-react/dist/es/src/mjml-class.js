function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlClass = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlClass, _Component);

  function MjmlClass() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlClass.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-class', handleMjmlProps(this.props), null);
  };

  return MjmlClass;
}(Component);