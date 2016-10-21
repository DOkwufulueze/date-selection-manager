/***
  Author: Okwufulueze Emeka Daniel
  Date: 13/02/2016
  Entry Point: loadInitialDate()

  Supply parameters to loadInitialDate(daysObject, monthsObject, yearsObject) 
  where:
    daysObject = {
      selectElement: [Select Element],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }

    monthsObject = {
      selectElement: [Select Element],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }

    yearsObject = {
      selectElement: [Select Element],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }

    startDigit and endDigit are 1 and 12 respectively for monthsObject

*/

class DateSelectionManager {
  loadInitialDate(daysObject, monthsObject, yearsObject) {
    this.daysObject = daysObject;
    this.monthsObject = monthsObject;
    this.yearsObject = yearsObject;
    this.loadOptionElements(daysObject, daysObject.startDigit, daysObject.endDigit, true);
    this.loadOptionElements(monthsObject, monthsObject.startDigit, monthsObject.endDigit), false;
    this.loadOptionElements(yearsObject, yearsObject.startDigit, yearsObject.endDigit, true);
    this.addChangeListenerForMonthsElement();
    this.addChangeListenerForYearsElement();
  }

  monthNames() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  numberOfDaysInMonthsPerYearType() {
    return {
      normalYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
  }

  loadOptionElements(selectObject, startDigit, endDigit, useNumberRangeDirectly, clearPreviousOptionElements = true) {
    this.selectObject = selectObject;
    this.createOptionElements(this.iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly), clearPreviousOptionElements);
  }

  iterateThroughRange(startDigit, endDigit, useNumberRangeDirectly) {
    let arrayForOptions = [];
    startDigit = (startDigit < 1 || startDigit > 12) && !useNumberRangeDirectly ? 1 : startDigit;
    endDigit = (endDigit < 1 || endDigit > 12) && !useNumberRangeDirectly ? 1 : endDigit;
    for (var i = startDigit; i <= endDigit; i++) {
      arrayForOptions[i] = useNumberRangeDirectly ? i : this.monthNames()[i - 1];
    }

    return arrayForOptions;
  }

  createOptionElements(arrayForOptions, clearPreviousOptionElements) {
    if (clearPreviousOptionElements)
      this.arrangeInitialOption();
    arrayForOptions.forEach((option) => {
      let optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.innerHTML = option;
      this.selectObject.selectElement.appendChild(optionElement);
    });
  }

  arrangeInitialOption() {
    this.selectObject.selectElement.innerHTML = '';
    let initialOption = document.createElement('option');
    initialOption.value = this.selectObject.initialOptionElementValue;
    initialOption.innerHTML = this.selectObject.initialOptionElementText;
    this.selectObject.selectElement.appendChild(initialOption);
  }

  addChangeListenerForMonthsElement() {
    this.monthsObject.selectElement.addEventListener('change', (changeEvent) => {
      this.yearsObject.selectElement.value === '' ? this.processForYearType(this.monthsObject.selectElement.selectedIndex, this.numberOfDaysInMonthsPerYearType().normalYear) : this.processAppropriately(this.monthsObject.selectElement.selectedIndex);
    });
  }

  addChangeListenerForYearsElement() {
    this.yearsObject.selectElement.addEventListener('change', (changeEvent) => {
      this.yearsObject.selectElement.value === '' ? this.processForYearType(this.monthsObject.selectElement.selectedIndex, this.numberOfDaysInMonthsPerYearType().normalYear) : this.processAppropriately(this.monthsObject.selectElement.selectedIndex);
    });
  }

  processAppropriately(monthIndex) {
    eval(this.yearsObject.selectElement.value) % 4 === 0 ? this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().leapYear) : this.processForYearType(monthIndex, this.numberOfDaysInMonthsPerYearType().normalYear)
  }

  processForYearType(monthIndex, yearType) {
    if (monthIndex > 0) {
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

  removeExcessOption(selectElement, limit) {
    for (var i = selectElement.options.length - 1; i > limit; i--) {
      selectElement.removeChild(selectElement.options[i]);
    }
  }

  fireChangeEvent(element) {
    let eventObject = document.createEvent('HTMLEvents');
    eventObject.initEvent('change', true, true);
    element.dispatchEvent(eventObject);
  }
}
