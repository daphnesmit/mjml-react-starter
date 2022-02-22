var entities = require('./html-entities.json');

export function namedEntityToHexCode(html) {
  return html.replace(/&([a-z0-9]{2,8});/gi, function (match, p1) {
    if (entities[p1]) {
      return "&#" + entities[p1] + ";";
    }

    return match;
  });
}