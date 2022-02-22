var _excluded = ["children", "dangerouslySetInnerHTML"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import ReactReconciler from 'react-reconciler';
import ReactDOMServer from 'react-dom/server';
import { noop, escapeTextForBrowser, trimContent } from './render-utils';
var reconciler = ReactReconciler({
  supportsMutation: true,
  isPrimaryRenderer: true,
  createTextInstance: function createTextInstance(text
  /* rootContainerInstance, hostContext, internalInstanceHandle,*/
  ) {
    return text;
  },
  createInstance: function createInstance(type, props
  /* rootContainerInstance, hostContext */
  ) {
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

    if (!type.startsWith('mj')) {
      return {
        type: type,
        props: props,
        children: [],
        isReact: true
      };
    }

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      // using replace to prevent issue with $ sign in MJML
      // https://github.com/mjmlio/mjml2json#L145
      res.content = props.dangerouslySetInnerHTML.__html.replace('$', '&#36;');
    }

    return res;
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    trimContent(child);
    container.resultObj = child;
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    if (child.isReact) {
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        var reactElement = toReactElement(child);

        if (!parent.content) {
          parent.content = '';
        }

        parent.content += ReactDOMServer.renderToStaticMarkup(reactElement);
      }
    } else if (typeof child === 'string') {
      if (!child) return;

      if (parent.isReact) {
        parent.children.push(child);
      } else {
        if (!parent.content) {
          parent.content = '';
        }

        parent.content += escapeTextForBrowser(child);
      }
    } else {
      if (!parent.children) parent.children = [];
      parent.children.push(child);
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
export function renderToJSON(whatToRender) {
  var container = reconciler.createContainer({}, false, false);
  reconciler.updateContainer(whatToRender, container, null, null);
  return container.containerInfo.resultObj;
}

function toReactElement(element) {
  if (element.children.length === 0) {
    return /*#__PURE__*/React.createElement(element.type, element.props);
  }

  return /*#__PURE__*/React.createElement(element.type, element.props, element.children.map(function (child) {
    return typeof child === 'string' ? child : toReactElement(child);
  }));
}