"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var _src = require("../src");

var _extensions = require("../src/extensions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('extensions', function () {
  describe('simple comment', function () {
    it('should render', function () {
      var comment = /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, "First, solve the problem. Then, write the code.");

      var markup = (0, _src.renderToMjml)(comment);
      (0, _chai.expect)(markup).to.equal('<mj-raw><!--First, solve the problem. Then, write the code.--></mj-raw>');
    });
    it('should not render if comment is empty', function () {
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null))).to.equal('');
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, ''))).to.equal('');
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, " "))).to.equal('');
    });
  });
  describe('conditional comment', function () {
    it('should render', function () {
      var comment = /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, null, "First, solve the problem. Then, write the code.");

      var markup = (0, _src.renderToMjml)(comment);
      (0, _chai.expect)(markup).to.equal('<mj-raw><!--[if gte mso 9]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should allow changing condition', function () {
      var comment = /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, {
        condition: "if IE"
      }, "First, solve the problem. Then, write the code.");

      var markup = (0, _src.renderToMjml)(comment);
      (0, _chai.expect)(markup).to.equal('<mj-raw><!--[if IE]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should not render if comment is empty', function () {
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, null))).to.equal('');
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, null, ''))).to.equal('');
      (0, _chai.expect)((0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, null, " "))).to.equal('');
    });
  });
  describe('yahoo style', function () {
    it('should render', function () {
      var markup = (0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlYahooStyle, null, "a { color: blue; }"));
      (0, _chai.expect)(markup).to.equal('<mj-raw><style>@media screen yahoo {a { color: blue; }}</style></mj-raw>');
    });
  });
  describe('tracking pixel', function () {
    it('should render 1x1 raw image with provided src', function () {
      var markup = (0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlTrackingPixel, {
        src: 'tracking-pixel'
      }));
      (0, _chai.expect)(markup).to.equal('<mj-raw><img src="tracking-pixel" style="display:table;height:1px!important;width:1px!important;border:0!important;margin:0!important;padding:0!important" width="1" height="1" border="0"/></mj-raw>');
    });
  });
  describe('html', function () {
    it('should allow rendering given HTML using mj-raw tag by default', function () {
      var markup = (0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlHtml, {
        html: "<div>hello World</div>"
      }));
      (0, _chai.expect)(markup).to.equal('<mj-raw><div>hello World</div></mj-raw>');
    });
    it('should allow rendering given HTML using specified tag', function () {
      var markup = (0, _src.renderToMjml)( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlHtml, {
        tag: "span",
        html: "<div>hello World</div>"
      }));
      (0, _chai.expect)(markup).to.equal('<span><div>hello World</div></span>');
    });
  });
});