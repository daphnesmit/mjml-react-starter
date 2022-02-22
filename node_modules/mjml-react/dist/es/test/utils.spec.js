import { expect } from 'chai';
import { namedEntityToHexCode, fixConditionalComment, useHttps, toMobileFontSize, getTextAlign, addQueryParams } from '../src/utils/index';
describe('utils', function () {
  describe('namedEntityToHexCode', function () {
    it('should not replace incomplete entity', function () {
      expect(namedEntityToHexCode('&amp')).to.equal('&amp');
    });
    it('should not replace unknown entity', function () {
      expect(namedEntityToHexCode('&rambo;')).to.equal('&rambo;');
    });
    it('should not replace entity in hex code', function () {
      expect(namedEntityToHexCode('&#38;')).to.equal('&#38;');
    });
    it('should replace known entity to hex code', function () {
      expect(namedEntityToHexCode('&amp;')).to.equal('&#38;');
      expect(namedEntityToHexCode('&apos;')).to.equal('&#39;');
    });
  });
  describe('fixConditionalComment', function () {
    it('should not replace if there is no MSO conditionals', function () {
      expect(fixConditionalComment('<!--no changes-->', 'what ever', 'if IE')).to.equal('<!--no changes-->');
    });
    it('should replace condition matching the content', function () {
      expect(fixConditionalComment('<!--[if mso]>...<![endif]-->', '...', 'if IE')).to.equal('<!--[if IE]>...<![endif]-->');
    });
  });
  describe('useHttps', function () {
    it('should not alter falsy url', function () {
      expect(useHttps('')).to.equal('');
    });
    it('should not alter valid url', function () {
      expect(useHttps('https://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace http://', function () {
      expect(useHttps('http://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace //', function () {
      expect(useHttps('//www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should not add missing schema', function () {
      expect(useHttps('www.wix.com')).to.equal('www.wix.com');
    });
  });
  describe('toMobileFontSize', function () {
    it('minimum should be 12', function () {
      [].concat(Array(12).keys()).forEach(function (value) {
        expect(toMobileFontSize(value)).to.equal(12);
        expect(toMobileFontSize(value + "px")).to.equal(12);
      });
    });
    it('not modified from 12 to 26', function () {
      Array.from(Array(14).keys()).forEach(function (value) {
        expect(toMobileFontSize(value + 12)).to.equal(value + 12);
        expect(toMobileFontSize(value + 12 + "px")).to.equal(value + 12);
      });
    });
    it('max should be 50', function () {
      expect(toMobileFontSize(200)).to.equal(50);
    });
  });
  describe('getTextAlign', function () {
    it('should return default alignment', function () {
      expect(getTextAlign()).to.equal('center');
      expect(getTextAlign(null, 'left')).to.equal('left');
    });
    it('should return default alignment if value is unrecognized', function () {
      expect(getTextAlign('blah')).to.equal('center');
    });
    it('should return a valid text align', function () {
      expect(getTextAlign('left')).to.equal('left');
      expect(getTextAlign('right')).to.equal('right');
      expect(getTextAlign('center')).to.equal('center');
      expect(getTextAlign('inherit')).to.equal('inherit');
      expect(getTextAlign('justify')).to.equal('justify');
    });
  });
  describe('addQueryParams', function () {
    it('should add a single query param', function () {
      expect(addQueryParams('url', {
        one: 'two'
      })).to.equal('url?one=two');
    });
    it('should add multiple query params', function () {
      expect(addQueryParams('url', {
        one: 'two',
        three: 'four'
      })).to.equal('url?one=two&three=four');
    });
    it('should escape param value', function () {
      expect(addQueryParams('url', {
        one: '?two'
      })).to.equal('url?one=%3Ftwo');
    });
  });
});