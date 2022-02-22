"use strict";

var _chai = require("chai");

var _index = require("../src/utils/index");

describe('utils', function () {
  describe('namedEntityToHexCode', function () {
    it('should not replace incomplete entity', function () {
      (0, _chai.expect)((0, _index.namedEntityToHexCode)('&amp')).to.equal('&amp');
    });
    it('should not replace unknown entity', function () {
      (0, _chai.expect)((0, _index.namedEntityToHexCode)('&rambo;')).to.equal('&rambo;');
    });
    it('should not replace entity in hex code', function () {
      (0, _chai.expect)((0, _index.namedEntityToHexCode)('&#38;')).to.equal('&#38;');
    });
    it('should replace known entity to hex code', function () {
      (0, _chai.expect)((0, _index.namedEntityToHexCode)('&amp;')).to.equal('&#38;');
      (0, _chai.expect)((0, _index.namedEntityToHexCode)('&apos;')).to.equal('&#39;');
    });
  });
  describe('fixConditionalComment', function () {
    it('should not replace if there is no MSO conditionals', function () {
      (0, _chai.expect)((0, _index.fixConditionalComment)('<!--no changes-->', 'what ever', 'if IE')).to.equal('<!--no changes-->');
    });
    it('should replace condition matching the content', function () {
      (0, _chai.expect)((0, _index.fixConditionalComment)('<!--[if mso]>...<![endif]-->', '...', 'if IE')).to.equal('<!--[if IE]>...<![endif]-->');
    });
  });
  describe('useHttps', function () {
    it('should not alter falsy url', function () {
      (0, _chai.expect)((0, _index.useHttps)('')).to.equal('');
    });
    it('should not alter valid url', function () {
      (0, _chai.expect)((0, _index.useHttps)('https://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace http://', function () {
      (0, _chai.expect)((0, _index.useHttps)('http://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace //', function () {
      (0, _chai.expect)((0, _index.useHttps)('//www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should not add missing schema', function () {
      (0, _chai.expect)((0, _index.useHttps)('www.wix.com')).to.equal('www.wix.com');
    });
  });
  describe('toMobileFontSize', function () {
    it('minimum should be 12', function () {
      [].concat(Array(12).keys()).forEach(function (value) {
        (0, _chai.expect)((0, _index.toMobileFontSize)(value)).to.equal(12);
        (0, _chai.expect)((0, _index.toMobileFontSize)(value + "px")).to.equal(12);
      });
    });
    it('not modified from 12 to 26', function () {
      Array.from(Array(14).keys()).forEach(function (value) {
        (0, _chai.expect)((0, _index.toMobileFontSize)(value + 12)).to.equal(value + 12);
        (0, _chai.expect)((0, _index.toMobileFontSize)(value + 12 + "px")).to.equal(value + 12);
      });
    });
    it('max should be 50', function () {
      (0, _chai.expect)((0, _index.toMobileFontSize)(200)).to.equal(50);
    });
  });
  describe('getTextAlign', function () {
    it('should return default alignment', function () {
      (0, _chai.expect)((0, _index.getTextAlign)()).to.equal('center');
      (0, _chai.expect)((0, _index.getTextAlign)(null, 'left')).to.equal('left');
    });
    it('should return default alignment if value is unrecognized', function () {
      (0, _chai.expect)((0, _index.getTextAlign)('blah')).to.equal('center');
    });
    it('should return a valid text align', function () {
      (0, _chai.expect)((0, _index.getTextAlign)('left')).to.equal('left');
      (0, _chai.expect)((0, _index.getTextAlign)('right')).to.equal('right');
      (0, _chai.expect)((0, _index.getTextAlign)('center')).to.equal('center');
      (0, _chai.expect)((0, _index.getTextAlign)('inherit')).to.equal('inherit');
      (0, _chai.expect)((0, _index.getTextAlign)('justify')).to.equal('justify');
    });
  });
  describe('addQueryParams', function () {
    it('should add a single query param', function () {
      (0, _chai.expect)((0, _index.addQueryParams)('url', {
        one: 'two'
      })).to.equal('url?one=two');
    });
    it('should add multiple query params', function () {
      (0, _chai.expect)((0, _index.addQueryParams)('url', {
        one: 'two',
        three: 'four'
      })).to.equal('url?one=two&three=four');
    });
    it('should escape param value', function () {
      (0, _chai.expect)((0, _index.addQueryParams)('url', {
        one: '?two'
      })).to.equal('url?one=%3Ftwo');
    });
  });
});