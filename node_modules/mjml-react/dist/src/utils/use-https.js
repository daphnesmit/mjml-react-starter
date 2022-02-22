"use strict";

exports.__esModule = true;
exports.useHttps = useHttps;

function useHttps(url) {
  if (url) {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }

    if (url.startsWith('//')) {
      return "https:" + url;
    }
  }

  return url;
}