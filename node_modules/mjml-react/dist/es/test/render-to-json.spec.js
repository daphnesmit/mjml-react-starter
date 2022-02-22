import React from 'react';
import { expect } from 'chai';
import mjml2json from 'mjml2json';
import { renderToJSON, renderToJSON2, Mjml, MjmlStyle, MjmlBody, MjmlSection, MjmlColumn, MjmlImage, MjmlText, MjmlDivider, MjmlRaw, MjmlHead, MjmlButton, renderToMjml } from '../src';
import { MjmlComment, MjmlConditionalComment, MjmlTrackingPixel, MjmlYahooStyle } from '../extensions';
var useCases = [/*#__PURE__*/React.createElement(Mjml, null), /*#__PURE__*/React.createElement(Mjml, null, "content"), /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlRaw, null, "content")), /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("div", null, "content"))), /*#__PURE__*/React.createElement(Mjml, null, '<b />'), /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlHead, null, /*#__PURE__*/React.createElement(MjmlStyle, null, '.class {color: red;}'))), /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("div", null, '<b/>'), /*#__PURE__*/React.createElement("p", null, "hello ' & world ")))), /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: '<div>Hello World!</div>'
  }
})), /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlSection, null, /*#__PURE__*/React.createElement(MjmlColumn, null, /*#__PURE__*/React.createElement(MjmlImage, {
  width: "100px",
  src: "/assets/img/logo-small.png"
}), /*#__PURE__*/React.createElement(MjmlDivider, {
  borderColor: "#F45E43"
}), /*#__PURE__*/React.createElement(MjmlText, {
  fontSize: "20px",
  color: "#F45E43",
  fontFamily: "helvetica"
}, "Hello World"))))), /*#__PURE__*/React.createElement(MjmlComment, null, "content"), /*#__PURE__*/React.createElement(MjmlConditionalComment, null, "content"), /*#__PURE__*/React.createElement(MjmlComment, null, '<div />'), /*#__PURE__*/React.createElement(MjmlTrackingPixel, {
  src: "https://somedomain.com/somepic.png"
}), /*#__PURE__*/React.createElement(MjmlYahooStyle, null, "content"), /*#__PURE__*/React.createElement(MjmlImage, {
  alt: "content"
}), /*#__PURE__*/React.createElement(MjmlImage, {
  alt: "<div>content</div>"
}), /*#__PURE__*/React.createElement(MjmlImage, {
  alt: "<div>&content</div>"
}), /*#__PURE__*/React.createElement(MjmlButton, null, /*#__PURE__*/React.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: '<div>Hello World!</div>'
  }
})), /*#__PURE__*/React.createElement(MjmlComment, null, '<b /> & $ " '), /*#__PURE__*/React.createElement(MjmlText, null, "10$ & Free Delivery"), /*#__PURE__*/React.createElement(MjmlButton, {
  spacesFromBothEnds: "  both  ",
  spaceFromLeft: "  left",
  spaceFromRight: "right  ",
  spaceInBetween: "  in  between  "
}, '  ', "Hello World ! ", /*#__PURE__*/React.createElement("span", null, " Hello World ! "), ' '), /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Nested Element")))];
useCases.forEach(function (tree, i) {
  it("should render usecase " + i, function () {
    var mjml = renderToMjml(tree);
    var base = mjml2json(mjml);
    expect(base).to.eql(renderToJSON(tree));
    expect(base).to.eql(renderToJSON2(tree));
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