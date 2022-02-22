var _excluded = ["children", "dangerouslySetInnerHTML"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import ReactReconciler from 'react-reconciler';
import ReactDOMServer from 'react-dom/server';
import { noop, escapeTextForBrowser, trimContent } from './render-utils';
var reconciler = ReactReconciler({
  supportsMutation: true,
  isPrimaryRenderer: false,
  createTextInstance: function createTextInstance(text) {
    return escapeTextForBrowser(text);
  },
  createInstance: function createInstance(type, props) {
    if (!type.startsWith('mj')) {
      return {
        isReact: true,
        type: type,
        props: props
      };
    }

    var children = props.children,
        dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
        rest = _objectWithoutPropertiesLoose(props, _excluded);

    var res = {
      tagName: type,
      attributes: rest
    };
    Object.keys(res.attributes).forEach(function (key) {
      var attrKey = res.attributes[key];

      if (attrKey === undefined) {
        delete res.attributes[key];
      }

      if (typeof attrKey === 'string') {
        res.attributes[key] = escapeTextForBrowser(attrKey);
      }
    });

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      // using replace to prevent issue with $ sign in MJML
      // https://github.com/mjmlio/mjml2json#L145
      res.content = props.dangerouslySetInnerHTML.__html.replace('$', '&#36;');
    }

    return res;
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    trimContent(child);
    container.result = child;
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    if (typeof parent === 'string' || parent.isReact) {
      return;
    }

    if (typeof child === 'string') {
      parent.content = (parent.content || '') + child;
    } else if (child.isReact) {
      var content = ReactDOMServer.renderToStaticMarkup( /*#__PURE__*/React.createElement(child.type, child.props));
      parent.content = (parent.content || '') + content;
    } else {
      parent.children = (parent.children || []).concat(child);
    }
  },
  prepareForCommit: noop,
  resetAfterCommit: noop,
  clearContainer: noop,
  appendChild: noop,
  finalizeInitialChildren: noop,
  getChildHostContext: noop,
  getRootHostContext: noop,
  shouldSetTextContent: noop
});
export function renderToJSON2(whatToRender) {
  var container = reconciler.createContainer({}, false, false);
  reconciler.updateContainer(whatToRender, container, null, null);
  return container.containerInfo.result;
}