/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

module.exports = {
  loadInitialDate : function (daysObject, monthsObject, yearsObject) {
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
  },
  monthNames: () => {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  },
  numberOfDaysInMonthsPerYearType: () => {
    return {
      normalYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
  },
  loadOptionElements: function (selectObject, startDigit, endDigit, useNumberRangeDirectly, clearPreviousOptionElements = true) {
    this.selectObject = selectObject;
    this.createOptionElements(this.iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly), clearPreviousOptionElements);
  },
  iterateThroughRange: function (startDigit, endDigit, useNumberRangeDirectly) {
    let arrayForOptions = [];
    startDigit = (startDigit < 1 || startDigit > 12) && !useNumberRangeDirectly ? 1 : startDigit;
    endDigit = (endDigit < 1 || endDigit > 12) && !useNumberRangeDirectly ? 1 : endDigit;
    for (let i = startDigit; i <= endDigit; i++) {
      arrayForOptions[i] = useNumberRangeDirectly ? i : this.monthNames()[i - 1];
    }

    return arrayForOptions;
  },
  createOptionElements: function (arrayForOptions, clearPreviousOptionElements) {
    if (clearPreviousOptionElements)
      this.arrangeInitialOption();
    arrayForOptions.forEach((option) => {
      let optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.innerHTML = option;
      if (this.selectObject.selectElement) this.selectObject.selectElement.appendChild(optionElement);
    });
  },
  arrangeInitialOption: function () {
    if (this.selectObject.selectElement) {
      this.selectObject.selectElement.innerHTML = '';
      let initialOption = document.createElement('option');
      initialOption.value = this.selectObject.initialOptionElementValue;
      initialOption.innerHTML = this.selectObject.initialOptionElementText;
      this.selectObject.selectElement.appendChild(initialOption);
    }
  },
  addChangeListenerForDaysElement: function () {
    if (this.daysObject.selectElement) {
      this.daysObject.selectElement.addEventListener('change', (changeEvent) => {
        if (this.daysObject.onChange) this.daysObject.onChange(changeEvent);
      });
    }
  },
  addChangeListenerForMonthsElement: function () {
    if (this.monthsObject.selectElement) {
      this.monthsObject.selectElement.addEventListener('change', (changeEvent) => {
        if (this.yearsObject.selectElement && this.yearsObject.selectElement.value === '') this.processForYearType(this.monthsObject.selectElement.selectedIndex, this.numberOfDaysInMonthsPerYearType().normalYear); else this.processAppropriately(this.monthsObject.selectElement.selectedIndex);
        if (this.monthsObject.onChange) this.monthsObject.onChange(changeEvent);
      });
    }
  },
  addChangeListenerForYearsElement: function () {
    if (this.yearsObject.selectElement) {
      this.yearsObject.selectElement.addEventListener('change', (changeEvent) => {
        if (this.yearsObject.selectElement.value === '' && this.monthsObject.selectElement) this.processForYearType(this.monthsObject.selectElement.selectedIndex, this.numberOfDaysInMonthsPerYearType().normalYear); else this.processAppropriately(this.monthsObject.selectElement.selectedIndex);
        if (this.yearsObject.onChange) this.yearsObject.onChange(changeEvent);
      });
    }
  },
  selectDefualtValues: function () {
    if (this.daysObject.selectElement) this.daysObject.selectElement.value = this.daysObject.defaultValue;
    if (this.monthsObject.selectElement) this.monthsObject.selectElement.value = this.monthsObject.defaultValue;
    if (this.yearsObject.selectElement) this.yearsObject.selectElement.value = this.yearsObject.defaultValue;
  },
  processAppropriately: function (monthIndex) {
    // jshint evil: true

    if (this.yearsObject.selectElement) {
      if (eval(this.yearsObject.selectElement.value) % 4 === 0) this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().leapYear); else this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().normalYear);
    }
  },
  processForYearType: function (monthIndex, yearType) {
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
