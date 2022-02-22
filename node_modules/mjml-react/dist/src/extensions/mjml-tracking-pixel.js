"use strict";

exports.__esModule = true;
exports.MjmlTrackingPixel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mjmlRaw = require("../mjml-raw");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MjmlTrackingPixel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlTrackingPixel, _Component);

  function MjmlTrackingPixel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlTrackingPixel.prototype;

  _proto.render = function render() {
    var src = this.props.src;
    var trackingPixelStyle = {
      display: 'table',
      height: '1px!important',
      width: '1px!important',
      border: '0!important',
      margin: '0!important',
      padding: '0!important'
    };
    return /*#__PURE__*/_react["default"].createElement(_mjmlRaw.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("img", {
      src: src,
      style: trackingPixelStyle,
      width: 1,
      height: 1,
      border: 0
    }));
  };

  return MjmlTrackingPixel;
}(_react.Component);

exports.MjmlTrackingPixel = MjmlTrackingPixel;