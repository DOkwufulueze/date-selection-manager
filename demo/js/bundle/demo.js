/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

var DateManager = __webpack_require__(3);

module.exports = {
  dayConfigObject: function dayConfigObject(configObject) {
    return {
      id: configObject.dayId || 'day',
      text: configObject.dayText || 'Day',
      value: configObject.dayValue || '',
      startDigit: configObject.dayStartDigit || 1,
      endDigit: configObject.dayEndDigit || 31,
      defaultValue: configObject.dayDefaultValue || '',
      changeEventCallback: configObject.dayChangeEventCallback || null
    };
  },
  monthConfigObject: function monthConfigObject(configObject) {
    return {
      id: configObject.monthId || 'month',
      text: configObject.monthText || 'Month',
      value: configObject.monthValue || '',
      startDigit: configObject.monthStartDigit || 1,
      endDigit: configObject.monthEndDigit || 12,
      defaultValue: configObject.monthDefaultValue || '',
      changeEventCallback: configObject.monthChangeEventCallback || null
    };
  },
  yearConfigObject: function yearConfigObject(configObject) {
    return {
      id: configObject.yearId || 'year',
      text: configObject.yearText || 'Year',
      value: configObject.yearValue || '',
      startDigit: configObject.yearStartDigit || 1940,
      endDigit: configObject.yearEndDigit || 2060,
      defaultValue: configObject.yearDefaultValue || '',
      changeEventCallback: configObject.yearChangeEventCallback || null
    };
  },
  loadDate: function loadDate() {
    var configObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var daysObject = module.exports.createSelectObject({
      type: 'day',
      day: module.exports.dayConfigObject(configObject)
    });
    var monthsObject = module.exports.createSelectObject({
      type: 'month',
      month: module.exports.monthConfigObject(configObject)
    });
    var yearsObject = module.exports.createSelectObject({
      type: 'year',
      year: module.exports.yearConfigObject(configObject)
    });
    var dateManager = new DateManager();
    dateManager.loadInitialDate(daysObject, monthsObject, yearsObject);
  },
  createSelectObject: function createSelectObject() {
    var configObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return {
      selectElement: document.querySelector('select#' + configObject[configObject.type].id),
      initialOptionElementText: configObject[configObject.type].text,
      initialOptionElementValue: configObject[configObject.type].value,
      startDigit: configObject[configObject.type].startDigit,
      endDigit: configObject[configObject.type].endDigit,
      defaultValue: configObject[configObject.type].defaultValue,
      onChange: configObject[configObject.type].changeEventCallback
    };
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./demo.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./demo.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

__webpack_require__(1);

var dateSelectionmanager = __webpack_require__(0);

var dateDOM = new DOMParser().parseFromString('\n  <div id=\'wrapper\'>\n    <h1>date-selection-manager Demo</h1>\n    <p>Visit <a href=\'https://www.github.com/DOkwufulueze/date-selection-manager\' target=\'_blank\'>The Containing Repo</a> to clone</p>\n    <div class=\'date-holder\'>\n      <select id=\'day\'><option value=\'\'>Day</option></select>\n      <select id=\'month\'><option value=\'\'>Month</option></select>\n      <select id=\'year\'><option value=\'\'>Year</option></select>\n    </div>\n  </div>\n', 'text/html').body.firstChild;

document.body.appendChild(dateDOM);
dateSelectionmanager.loadDate();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

module.exports = function () {
  function DateManager() {
    _classCallCheck(this, DateManager);
  }

  _createClass(DateManager, [{
    key: 'loadInitialDate',
    value: function loadInitialDate(daysObject, monthsObject, yearsObject) {
      this.daysObject = daysObject;
      this.monthsObject = monthsObject;
      this.yearsObject = yearsObject;
      this.loadOptionElements(daysObject, daysObject.startDigit, daysObject.endDigit, true);
      this.loadOptionElements(monthsObject, monthsObject.startDigit, monthsObject.endDigit, false);
      this.loadOptionElements(yearsObject, yearsObject.startDigit, yearsObject.endDigit, true);
      this.addChangeListenerForDaysElement();
      this.addChangeListenerForMonthsElement();
      this.addChangeListenerForYearsElement();
      this.selectDefualtValues();
    }
  }, {
    key: 'monthNames',
    value: function monthNames() {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }, {
    key: 'numberOfDaysInMonthsPerYearType',
    value: function numberOfDaysInMonthsPerYearType() {
      return {
        normalYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      };
    }
  }, {
    key: 'loadOptionElements',
    value: function loadOptionElements(selectObject, startDigit, endDigit, useNumberRangeDirectly) {
      var clearPreviousOptionElements = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      this.selectObject = selectObject;
      this.createOptionElements(this.iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly), clearPreviousOptionElements);
    }
  }, {
    key: 'iterateThroughRange',
    value: function iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly) {
      var arrayForOptions = [];
      startDigit = (startDigit < 1 || startDigit > 12) && !useNumberRangeDirectly ? 1 : startDigit;
      endDigit = (endDigit < 1 || endDigit > 12) && !useNumberRangeDirectly ? 1 : endDigit;
      for (var i = startDigit; i <= endDigit; i++) {
        arrayForOptions[i] = useNumberRangeDirectly ? i : this.monthNames()[i - 1];
      }

      return arrayForOptions;
    }
  }, {
    key: 'createOptionElements',
    value: function createOptionElements(arrayForOptions, clearPreviousOptionElements) {
      var _this = this;

      if (clearPreviousOptionElements) this.arrangeInitialOption();
      arrayForOptions.forEach(function (option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.innerHTML = option;
        if (_this.selectObject.selectElement) _this.selectObject.selectElement.appendChild(optionElement);
      });
    }
  }, {
    key: 'arrangeInitialOption',
    value: function arrangeInitialOption() {
      if (this.selectObject.selectElement) {
        this.selectObject.selectElement.innerHTML = '';
        var initialOption = document.createElement('option');
        initialOption.value = this.selectObject.initialOptionElementValue;
        initialOption.innerHTML = this.selectObject.initialOptionElementText;
        this.selectObject.selectElement.appendChild(initialOption);
      }
    }
  }, {
    key: 'addChangeListenerForDaysElement',
    value: function addChangeListenerForDaysElement() {
      var _this2 = this;

      if (this.daysObject.selectElement) {
        this.daysObject.selectElement.addEventListener('change', function (changeEvent) {
          if (_this2.daysObject.onChange) _this2.daysObject.onChange();
        });
      }
    }
  }, {
    key: 'addChangeListenerForMonthsElement',
    value: function addChangeListenerForMonthsElement() {
      var _this3 = this;

      if (this.monthsObject.selectElement) {
        this.monthsObject.selectElement.addEventListener('change', function (changeEvent) {
          if (_this3.yearsObject.selectElement && _this3.yearsObject.selectElement.value === '') _this3.processForYearType(_this3.monthsObject.selectElement.selectedIndex, _this3.numberOfDaysInMonthsPerYearType().normalYear);else _this3.processAppropriately(_this3.monthsObject.selectElement.selectedIndex);
          if (_this3.monthsObject.onChange) _this3.monthsObject.onChange();
        });
      }
    }
  }, {
    key: 'addChangeListenerForYearsElement',
    value: function addChangeListenerForYearsElement() {
      var _this4 = this;

      if (this.yearsObject.selectElement) {
        this.yearsObject.selectElement.addEventListener('change', function (changeEvent) {
          if (_this4.yearsObject.selectElement.value === '' && _this4.monthsObject.selectElement) _this4.processForYearType(_this4.monthsObject.selectElement.selectedIndex, _this4.numberOfDaysInMonthsPerYearType().normalYear);else _this4.processAppropriately(_this4.monthsObject.selectElement.selectedIndex);
          if (_this4.yearsObject.onChange) _this4.yearsObject.onChange();
        });
      }
    }
  }, {
    key: 'selectDefualtValues',
    value: function selectDefualtValues() {
      if (this.daysObject.selectElement) this.daysObject.selectElement.value = this.daysObject.defaultValue;
      if (this.monthsObject.selectElement) this.monthsObject.selectElement.value = this.monthsObject.defaultValue;
      if (this.yearsObject.selectElement) this.yearsObject.selectElement.value = this.yearsObject.defaultValue;
    }
  }, {
    key: 'processAppropriately',
    value: function processAppropriately(monthIndex) {
      // jshint evil: true

      if (this.yearsObject.selectElement) {
        if (eval(this.yearsObject.selectElement.value) % 4 === 0) this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().leapYear);else this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().normalYear);
      }
    }
  }, {
    key: 'processForYearType',
    value: function processForYearType(monthIndex, yearType) {
      // jshint evil: true

      if (monthIndex > 0 && this.daysObject.selectElement) {
        if (eval(this.daysObject.selectElement.value) > yearType[monthIndex - 1]) {
          this.daysObject.selectElement.selectedIndex = 0;
          this.fireChangeEvent(this.daysObject.selectElement);
          this.loadOptionElements(this.daysObject, 1, yearType[monthIndex - 1], true);
        } else if (eval(this.daysObject.selectElement.lastChild.value) > yearType[monthIndex - 1]) {
          this.removeExcessOption(this.daysObject.selectElement, yearType[monthIndex - 1]);
        } else if (eval(this.daysObject.selectElement.lastChild.value) < yearType[monthIndex - 1]) {
          this.loadOptionElements(this.daysObject, eval(this.daysObject.selectElement.lastChild.value) + 1, yearType[monthIndex - 1], true, false);
        }
      }
    }
  }, {
    key: 'removeExcessOption',
    value: function removeExcessOption(selectElement, limit) {
      for (var i = selectElement.options.length - 1; i > limit; i--) {
        selectElement.removeChild(selectElement.options[i]);
      }
    }
  }, {
    key: 'fireChangeEvent',
    value: function fireChangeEvent(element) {
      var eventObject = document.createEvent('HTMLEvents');
      eventObject.initEvent('change', true, true);
      element.dispatchEvent(eventObject);
    }
  }]);

  return DateManager;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "html {\n  height: 100%; }\n  html body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #666; }\n    html body #wrapper {\n      width: 100%;\n      display: block;\n      margin: auto;\n      text-align: center; }\n      html body #wrapper h1 {\n        width: 100%; }\n      html body #wrapper p {\n        width: 100%; }\n      html body #wrapper div.date-holder {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        height: 100px;\n        width: 460px;\n        margin: auto;\n        text-align: center; }\n        html body #wrapper div.date-holder select {\n          background: #ffffff;\n          color: #666;\n          height: 40px;\n          line-height: 40px;\n          width: 150px;\n          margin-right: 2px;\n          display: inline-block; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);