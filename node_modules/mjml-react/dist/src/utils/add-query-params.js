"use strict";

exports.__esModule = true;
exports.addQueryParams = addQueryParams;

function addQueryParams(url, params) {
  var query = Object.keys(params).reduce(function (acc, curr) {
    return acc.concat(curr + "=" + encodeURIComponent(params[curr]));
  }, []).join('&');

  if (url.indexOf('?') !== -1) {
    return url + "&" + query;
  }

  return url + "?" + query;
}