function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Color = require('color');

var handlers = {
  inline: boolToString,
  'full-width': boolToString,
  width: numberToPx,
  height: numberToPx,
  'border-radius': numberToPx,
  'border-width': numberToPx,
  'background-size': numberToPx,
  padding: numberToPx,
  'padding-top': numberToPx,
  'padding-right': numberToPx,
  'padding-bottom': numberToPx,
  'padding-left': numberToPx,
  'font-size': numberToPx,
  'letter-spacing': numberToPx,
  'line-height': numberToPx,
  'icon-padding': numberToPx,
  'text-padding': numberToPx,
  color: handleColor,
  'border-color': handleColor,
  'background-color': handleColor,
  'container-background-color': handleColor,
  'inner-background-color': handleColor
};
export function handleMjmlProps(props) {
  return Object.keys(props).reduce(function (acc, curr) {
    var _objectSpread2;

    var mjmlProp = kebabCase(curr);
    return _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, _objectSpread2[mjmlProp] = handleMjmlProp(mjmlProp, props[curr]), _objectSpread2));
  }, {});
}

function handleMjmlProp(name, value) {
  if (typeof value === 'undefined' || value === null) {
    return undefined;
  }

  var handler = handlers[name] || function (_name, value_) {
    return value_;
  };

  return handler(name, value);
}

function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function boolToString(name, value) {
  return value ? name : undefined;
}

function numberToPx(name, value) {
  if (typeof value === 'number') {
    return value + "px";
  }

  return value;
}

function handleColor(name, value) {
  var color = parseColor(value);

  if (color) {
    if (value[0] === '#' && value.length === 9) {
      var alpha = color.alpha().toFixed(2);
      return color.rgb().alpha(alpha).toString();
    }

    return value;
  }

  return '';
}

function parseColor(value) {
  try {
    return new Color(value);
  } catch (e) {}

  return null;
}