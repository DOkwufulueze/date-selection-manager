/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _DateManager = __webpack_require__(1);

var _DateManager2 = _interopRequireDefault(_DateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  dayConfigObject: function dayConfigObject(configObject) {
    return {
      id: configObject.dayId || 'day',
      text: configObject.dayText || 'Day',
      value: configObject.dayValue || '',
      startDigit: configObject.dayStartDigit || 1,
      endDigit: configObject.dayEndDigit || 31,
      defaultValue: configObject.dayDefaultValue || 1,
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
      defaultValue: configObject.monthDefaultValue || 1,
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
      defaultValue: configObject.yearDefaultValue || 1940,
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
    var dateManager = new _DateManager2.default();
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

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

var DateManager = function () {
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
      this.addChangeListenerForMonthsElement();
      this.addChangeListenerForYearsElement();
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
    key: 'addChangeListenerForMonthsElement',
    value: function addChangeListenerForMonthsElement() {
      var _this2 = this;

      if (this.monthsObject.selectElement) {
        this.monthsObject.selectElement.addEventListener('change', function (changeEvent) {
          if (_this2.yearsObject.selectElement && _this2.yearsObject.selectElement.value === '') _this2.processForYearType(_this2.monthsObject.selectElement.selectedIndex, _this2.numberOfDaysInMonthsPerYearType().normalYear);else _this2.processAppropriately(_this2.monthsObject.selectElement.selectedIndex);
        });
      }
    }
  }, {
    key: 'addChangeListenerForYearsElement',
    value: function addChangeListenerForYearsElement() {
      var _this3 = this;

      if (this.yearsObject.selectElement) {
        this.yearsObject.selectElement.addEventListener('change', function (changeEvent) {
          if (_this3.yearsObject.selectElement.value === '' && _this3.monthsObject.selectElement) _this3.processForYearType(_this3.monthsObject.selectElement.selectedIndex, _this3.numberOfDaysInMonthsPerYearType().normalYear);else _this3.processAppropriately(_this3.monthsObject.selectElement.selectedIndex);
        });
      }
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

exports.default = DateManager;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var dateSelectionmanager = __webpack_require__(0);

dateSelectionmanager.loadDate();

/***/ }
/******/ ]);