/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

module.exports = {
  loadInitialDate : function (daysObject, monthsObject, yearsObject) {
    module.exports.daysObject = daysObject;
    module.exports.monthsObject = monthsObject;
    module.exports.yearsObject = yearsObject;
    module.exports.loadOptionElements(daysObject, daysObject.startDigit, daysObject.endDigit, true);
    module.exports.loadOptionElements(monthsObject, monthsObject.startDigit, monthsObject.endDigit, false);
    module.exports.loadOptionElements(yearsObject, yearsObject.startDigit, yearsObject.endDigit, true);
    module.exports.addChangeListenerForDaysElement();
    module.exports.addChangeListenerForMonthsElement();
    module.exports.addChangeListenerForYearsElement();
    module.exports.selectDefualtValues();
  },
  monthNames: function () {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  },
  numberOfDaysInMonthsPerYearType: function () {
    return {
      normalYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
  },
  loadOptionElements: function (selectObject, startDigit, endDigit, useNumberRangeDirectly, clearPreviousOptionElements) {
    clearPreviousOptionElements = clearPreviousOptionElements === undefined ? true : clearPreviousOptionElements;
    module.exports.selectObject = selectObject;
    module.exports.createOptionElements(module.exports.iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly), clearPreviousOptionElements);
  },
  iterateThroughRange: function (startDigit, endDigit, useNumberRangeDirectly) {
    let arrayForOptions = [];
    startDigit = (startDigit < 1 || startDigit > 12) && !useNumberRangeDirectly ? 1 : startDigit;
    endDigit = (endDigit < 1 || endDigit > 12) && !useNumberRangeDirectly ? 1 : endDigit;
    for (let i = startDigit; i <= endDigit; i++) {
      arrayForOptions[i] = useNumberRangeDirectly ? i : module.exports.monthNames()[i - 1];
    }

    return arrayForOptions;
  },
  createOptionElements: function (arrayForOptions, clearPreviousOptionElements) {
    if (clearPreviousOptionElements)
      module.exports.arrangeInitialOption();
    arrayForOptions.forEach(function (option) {
      let optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.innerHTML = option;
      if (module.exports.selectObject.selectElement) module.exports.selectObject.selectElement.appendChild(optionElement);
    });
  },
  arrangeInitialOption: function () {
    if (module.exports.selectObject.selectElement) {
      module.exports.selectObject.selectElement.innerHTML = '';
      let initialOption = document.createElement('option');
      initialOption.value = module.exports.selectObject.initialOptionElementValue;
      initialOption.innerHTML = module.exports.selectObject.initialOptionElementText;
      module.exports.selectObject.selectElement.appendChild(initialOption);
    }
  },
  addChangeListenerForDaysElement: function () {
    if (module.exports.daysObject.selectElement) {
      module.exports.daysObject.selectElement.addEventListener('change', function (changeEvent) {
        if (module.exports.daysObject.onChange) module.exports.daysObject.onChange(changeEvent);
      });
    }
  },
  addChangeListenerForMonthsElement: function () {
    if (module.exports.monthsObject.selectElement) {
      module.exports.monthsObject.selectElement.addEventListener('change', function (changeEvent) {
        if (module.exports.yearsObject.selectElement && module.exports.yearsObject.selectElement.value === '') module.exports.processForYearType(module.exports.monthsObject.selectElement.selectedIndex, module.exports.numberOfDaysInMonthsPerYearType().normalYear); else module.exports.processAppropriately(module.exports.monthsObject.selectElement.selectedIndex);
        if (module.exports.monthsObject.onChange) module.exports.monthsObject.onChange(changeEvent);
      });
    }
  },
  addChangeListenerForYearsElement: function () {
    if (module.exports.yearsObject.selectElement) {
      module.exports.yearsObject.selectElement.addEventListener('change', function (changeEvent) {
        if (module.exports.yearsObject.selectElement.value === '' && module.exports.monthsObject.selectElement) module.exports.processForYearType(module.exports.monthsObject.selectElement.selectedIndex, module.exports.numberOfDaysInMonthsPerYearType().normalYear); else module.exports.processAppropriately(module.exports.monthsObject.selectElement.selectedIndex);
        if (module.exports.yearsObject.onChange) module.exports.yearsObject.onChange(changeEvent);
      });
    }
  },
  selectDefualtValues: function () {
    if (module.exports.daysObject.selectElement) module.exports.daysObject.selectElement.value = module.exports.daysObject.defaultValue;
    if (module.exports.monthsObject.selectElement) module.exports.monthsObject.selectElement.value = module.exports.monthsObject.defaultValue;
    if (module.exports.yearsObject.selectElement) module.exports.yearsObject.selectElement.value = module.exports.yearsObject.defaultValue;
  },
  processAppropriately: function (monthIndex) {
    // jshint evil: true

    if (module.exports.yearsObject.selectElement) {
      if (eval(module.exports.yearsObject.selectElement.value) % 4 === 0) module.exports.processForYearType(monthIndex, module.exports.numberOfDaysInMonthsPerYearType().leapYear); else module.exports.processForYearType(monthIndex, module.exports.numberOfDaysInMonthsPerYearType().normalYear);
    }
  },
  processForYearType: function (monthIndex, yearType) {
    // jshint evil: true

    if (monthIndex > 0 && module.exports.daysObject.selectElement) {
      if (eval(module.exports.daysObject.selectElement.value) > yearType[monthIndex - 1]) {
        module.exports.daysObject.selectElement.selectedIndex = 0;
        module.exports.fireChangeEvent(module.exports.daysObject.selectElement);
        module.exports.loadOptionElements(module.exports.daysObject, 1, yearType[monthIndex - 1], true);
      } else if (eval(module.exports.daysObject.selectElement.lastChild.value) > yearType[monthIndex - 1]) {
        module.exports.removeExcessOption(module.exports.daysObject.selectElement, yearType[monthIndex - 1]);
      } else if (eval(module.exports.daysObject.selectElement.lastChild.value) < yearType[monthIndex - 1]) {
        module.exports.loadOptionElements(module.exports.daysObject, eval(module.exports.daysObject.selectElement.lastChild.value) + 1, yearType[monthIndex - 1], true, false);
      }
    }
  },
  removeExcessOption: function (selectElement, limit) {
    for (let i = selectElement.options.length - 1; i > limit; i--) {
      selectElement.removeChild(selectElement.options[i]);
    }
  },
  fireChangeEvent: function (element) {
    let eventObject = document.createEvent('HTMLEvents');
    eventObject.initEvent('change', true, true);
    element.dispatchEvent(eventObject);
  }
};
