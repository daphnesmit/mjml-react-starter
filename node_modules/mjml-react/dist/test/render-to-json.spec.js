"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var _mjml2json = _interopRequireDefault(require("mjml2json"));

var _src = require("../src");

var _extensions = require("../extensions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useCases = [/*#__PURE__*/_react["default"].createElement(_src.Mjml, null), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, "content"), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, "content")), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("div", null, "content"))), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, '<b />'), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlStyle, null, '.class {color: red;}'))), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("div", null, '<b/>'), /*#__PURE__*/_react["default"].createElement("p", null, "hello ' & world ")))), /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("div", {
  dangerouslySetInnerHTML: {
    __html: '<div>Hello World!</div>'
  }
})), /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlSection, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlColumn, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlImage, {
  width: "100px",
  src: "/assets/img/logo-small.png"
}), /*#__PURE__*/_react["default"].createElement(_src.MjmlDivider, {
  borderColor: "#F45E43"
}), /*#__PURE__*/_react["default"].createElement(_src.MjmlText, {
  fontSize: "20px",
  color: "#F45E43",
  fontFamily: "helvetica"
}, "Hello World"))))), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, "content"), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlConditionalComment, null, "content"), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, '<div />'), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlTrackingPixel, {
  src: "https://somedomain.com/somepic.png"
}), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlYahooStyle, null, "content"), /*#__PURE__*/_react["default"].createElement(_src.MjmlImage, {
  alt: "content"
}), /*#__PURE__*/_react["default"].createElement(_src.MjmlImage, {
  alt: "<div>content</div>"
}), /*#__PURE__*/_react["default"].createElement(_src.MjmlImage, {
  alt: "<div>&content</div>"
}), /*#__PURE__*/_react["default"].createElement(_src.MjmlButton, null, /*#__PURE__*/_react["default"].createElement("div", {
  dangerouslySetInnerHTML: {
    __html: '<div>Hello World!</div>'
  }
})), /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, '<b /> & $ " '), /*#__PURE__*/_react["default"].createElement(_src.MjmlText, null, "10$ & Free Delivery"), /*#__PURE__*/_react["default"].createElement(_src.MjmlButton, {
  spacesFromBothEnds: "  both  ",
  spaceFromLeft: "  left",
  spaceFromRight: "right  ",
  spaceInBetween: "  in  between  "
}, '  ', "Hello World ! ", /*#__PURE__*/_react["default"].createElement("span", null, " Hello World ! "), ' '), /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, "Nested Element")))];
useCases.forEach(function (tree, i) {
  it("should render usecase " + i, function () {
    var mjml = (0, _src.renderToMjml)(tree);
    var base = (0, _mjml2json["default"])(mjml);
    (0, _chai.expect)(base).to.eql((0, _src.renderToJSON)(tree));
    (0, _chai.expect)(base).to.eql((0, _src.renderToJSON2)(tree));
  });
}); // it('measure times', () => {
//   const n = 10000;
//   const durationMjml = time(
//     times(n, () => {
//       useCases.forEach((_) => {
//         renderToMjml(_);
//       });
//     }),
//   );
//   const durationJson = time(
//     times(n, () => {
//       useCases.forEach((_) => {
//         renderToJSON(_);
//       });
//     }),
//   );
//   console.log({ n, durationMjml, durationJson });
// });
// function time(fn) {
//   const start = Date.now();
//   fn();
//   return Date.now() - start;
// }
// function times(n, fn) {
//   return () => {
//     for (let i = 0; i < n; i++) {
//       fn();
//     }
//   };
// }