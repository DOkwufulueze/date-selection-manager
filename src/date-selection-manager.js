/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

let DateManager = require('./DateManager');
let dateManager = new DateManager();
    
module.exports = {
  dayConfigObject: (configObject) => {
    return {
      id: configObject.dayId || 'day',
      text: configObject.dayText || 'Day',
      value: configObject.dayValue || '',
      startDigit: configObject.dayStartDigit || 1,
      endDigit: configObject.dayEndDigit || 31,
      defaultValue: configObject.dayDefaultValue || '',
      changeEventCallback: configObject.dayChangeEventCallback || null,
    };
  },
  monthConfigObject: (configObject) => {
    return {
      id: configObject.monthId || 'month',
      text: configObject.monthText || 'Month',
      value: configObject.monthValue || '',
      startDigit: configObject.monthStartDigit || 1,
      endDigit: configObject.monthEndDigit || 12,
      defaultValue: configObject.monthDefaultValue || '',
      changeEventCallback: configObject.monthChangeEventCallback || null,
    };
  },
  yearConfigObject: (configObject) => {
    return {
      id: configObject.yearId || 'year',
      text: configObject.yearText || 'Year',
      value: configObject.yearValue || '',
      startDigit: configObject.yearStartDigit || 1940,
      endDigit: configObject.yearEndDigit || 2060,
      defaultValue: configObject.yearDefaultValue || '',
      changeEventCallback: configObject.yearChangeEventCallback || null,
    };
  },
  loadDate: (configObject = {}) => {
    let daysObject = module.exports.createSelectObject({
      type: 'day',
      day: module.exports.dayConfigObject(configObject),
    });
    let monthsObject = module.exports.createSelectObject({
      type: 'month',
      month: module.exports.monthConfigObject(configObject),
    });
    let yearsObject = module.exports.createSelectObject({
      type: 'year',
      year: module.exports.yearConfigObject(configObject),
    });
    dateManager.loadInitialDate(daysObject, monthsObject, yearsObject);
  },
  createSelectObject: (configObject = {}) => {
    return {
      selectElement: document.querySelector(`select#${configObject[configObject.type].id}`),
      initialOptionElementText: configObject[configObject.type].text,
      initialOptionElementValue: configObject[configObject.type].value,
      startDigit: configObject[configObject.type].startDigit,
      endDigit: configObject[configObject.type].endDigit,
      defaultValue: configObject[configObject.type].defaultValue,
      onChange: configObject[configObject.type].changeEventCallback,
    };
  },
  getMonthNames: () => {
    return dateManager.monthNames();
  }
};
