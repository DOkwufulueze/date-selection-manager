const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const documentObject = new JSDOM('<!doctype html><html><body></body></html>');
const windowObject = documentObject.window;

global.document = windowObject.document;
global.DOMParser = windowObject.DOMParser;
global.window = windowObject;

Object.keys(windowObject).forEach((key) => {
  if (!(key in global)) {
    global[key] = windowObject[key];
  }
});
