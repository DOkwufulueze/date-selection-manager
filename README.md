# date-selection-manager

Author: Daniel Okwufulueze

Date: 13/02/2016

This package takes care of date entries via select elements. It prevents the entry of invalid dates like February 30, June 31, or February 29 on a non-leap year.

![date-selection-manager](/images/date-selection-manager.png)

```javascript
    let dateSelectionManager = require('date-selection-manager');
    dateSelectionManager.loadDate(configObject); // the configObject parameter can be absent
```
<br><br>
# How To Use
1. At the terminal do:
    `cd path/to/your/project/`
    
    ### if you want to use date-selection-manager in devDependencies
    `npm install --save-dev date-selection-manager`

    ### else if you want to have date-selection-manager globally installed
    `npm install date-selection-manager -g`

1. Setup your DOM elements for example:
    ```
      <div id='wrapper'>
        <div class='date-holder'>
          <select id='day'><option value=''>Day</option></select>
          <select id='month'><option value=''>Month</option></select>
          <select id='year'><option value=''>Year</option></select>
        </div>
      </div>
    ```

1. In your JS file which you may need to transpile using [babel](https://github.com/babel/babel) perhaps, do the following:
    * Require date-selection-manager
        ```
          let dateSelectionManager = require('date-selection-manager');
        ```

    * Invoke the manager to start managing your date DOM elements created in **step  2**
        ```
          dateSelectionManager.loadDate();
        ```

<br><br>
# Pass custom JS object to date-selection-manager
date-selection-manager `loadDate()` method can take a configuration object. This configuration object can be absent in the call to `loadDate` and defaults will be used instead. So to call `loadDate`, one can do:

```
  loadDate(configObject)
```
or
```
  loadDate()
```

Where `configObject` can be patterned thus:

```javascript
  let configObject = {
    dayContainer: [optionalValue], // defaults to document
    dayId: [optionalValue], // defaults to 'day'
    dayText: [optionalValue], // defaults to 'Day'
    dayValue: [optionalValue], // defaults to ''
    dayStartDigit: [optionalValue], // defaults to '1'
    dayEndDigit: [optionalValue], // defaults to '31'
    dayDefaultValue: [optionalValue], // defaults to ''
    dayChangeEventCallback: [optionalValue], // defaults to null
    monthContainer: [optionalValue], // defaults to document
    monthId: [optionalValue], // defaults to 'month'
    monthText: [optionalValue], // defaults to 'Month'
    monthValue: [optionalValue], // defaults to ''
    monthStartDigit: [optionalValue], // defaults to '1'
    monthEndDigit: [optionalValue], // defaults to '12'
    monthDefaultValue: [optionalValue], // defaults to ''
    monthChangeEventCallback: [optionalValue], // defaults to null
    yearContainer: [optionalValue], // defaults to document
    yearId: [optionalValue], // defaults to 'year'
    yearText: [optionalValue], // defaults to 'Year'
    yearValue: [optionalValue], // defaults to ''
    yearStartDigit: [optionalValue], // defaults to '1940'
    yearEndDigit: [optionalValue], // defaults to '2060'
    yearDefaultValue: [optionalValue], // defaults to ''
    yearChangeEventCallback: [optionalValue], // defaults to null
  }
```
<br><br>
Details on the names and default values of the configuration object properties are shown below:

Key | Default Value | Explanation
--- | ------------- | -----------
dayContainer | `document` | The DOM element you want to reference as holding the 'day' select element.
dayId | 'day' | The id of the select element representing "day".
dayText | 'Day' | The text of the first option element in the select element representing "day".
dayValue | '' | The value of the first option element in the select element representing "day".
dayStartDigit| '1' | Where the select element representing "day" starts counting from.
dayEndDigit | '31' | The number at which the select element representing "day" ends.
dayDefaultValue | '' | The value selected by default on the select element representing "day" once date-selection-manager is invoked.
dayChangeEventCallback | null | A callback function that is called when the select element representing "day" changes value.
monthContainer | `document` | The DOM element you want to reference as holding the 'month' select element.
monthId | 'month' | The id of the select element representing "month".
monthText | 'Month' | The text of the first option element in the select element representing "month".
monthValue | '' | The value of the first option element in the select element representing "month".
monthStartDigit| '1' | Where the select element representing "month" starts counting from.
monthEndDigit | '12' | The number at which the select element representing "month" ends.
monthDefaultValue | '' | The value selected by default on the select element representing "month" once date-selection-manager is invoked.
monthChangeEventCallback | null | A callback function that is called when the select element representing "month" changes value.
yearContainer | `document` | The DOM element you want to reference as holding the 'year' select element.
yearId | 'year' | The id of the select element representing "year".
yearText | 'Year' | The text of the first option element in the select element representing "year".
yearValue | '' | The value of the first option element in the select element representing "year".
yearStartDigit| '1940' | Where the select element representing "year" starts counting from.
yearEndDigit | '2060' | The number at which the select element representing "year" ends.
yearDefaultValue | '' | The value selected by default on the select element representing "year" once date-selection-manager is invoked.
yearChangeEventCallback | null | A callback function that is called when the select element representing "year" changes value.
<br><br>
# Change-Event Callbacks
If you want to do something whenever a select element changes value, invoke `dateSelectionManager` with a configObject having the appropriate ChangeEventCallback [dayChangeEventCallback, monthChangeEventCallback, yearChangeEventCallback]. You can pass a parameter to the corresponding callback function which will stand for the event object returned whenever a change occurs in the select element. For example:

```javascript
  dateSelectionManager.loadDate({
    // changeEvent is the event object returned upon a change in the select element.
    //
    dayChangeEventCallback: (changeEvent) => {
      // Do something after the change. You can work with the change event: changeEvent
    },
    monthChangeEventCallback: (changeEvent) => {
      // Do something after the change. You can work with the change event: changeEvent
    },
    yearChangeEventCallback: (changeEvent) => {
      // Do something after the change. You can work with the change event: changeEvent
    }
  });
```
<br><br>
## Acknowledgement
I wish to acknowledge the authors and contributors of the following packages which were used in the `devDependencies` of this work:
* autoprefixer
* babel [cli, core, loader, preset-es2015]
* chai
* css-loader
* jsdom
* jshint
* jshint-loader
* mocha
* node-sass
* postcss-loader
* sass-loader
* style-loader
* uglifyjs-webpack-plugin
* watch
* webpack
<br><br>
### Please send bug issues you may encounter to [Issues](https://www.github.com/DOkwufulueze/date-selection-manager/issues)
<br><br>
## Copyleft
![Copyleft](/images/copyleft.png) 2017 Daniel Okwufulueze
<br><br>
## Licence
This package is distributed under the [GNU GPL-3.0](https://github.com/DOkwufulueze/date-selection-manager/blob/master/LICENCE.md) licence
