function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlImage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlImage, _Component);

  function MjmlImage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlImage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-image', handleMjmlProps(this.props), null);
  };

  return MjmlImage;
}(Component);