# DateSelectionManager

Author: Okwufulueze Emeka Daniel

Date: 13/02/2016

This manager takes care of date entries via select elements. It prevents the entry of invalid dates like February 30, June 31, or February 29 on a non-leap year.

# How to use:

Entry Point: loadInitialDate()

Supply parameters to loadInitialDate(daysObject, monthsObject, yearsObject)

where:

```
    daysObject = {
      selectElement: [object HTMLSelectElement],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }

    monthsObject = {
      selectElement: [object HTMLSelectElement],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }

    yearsObject = {
      selectElement: [object HTMLSelectElement],
      initialOptionElementText: Text,
      initialOptionElementValue: Value,
      startDigit: startDigit,
      endDigit: endDigit
    }
```

startDigit and endDigit are 1 and 31 respectively for daysObject.

startDigit and endDigit are 1 and 12 respectively for monthsObject.

startDigit and endDigit are 1940 and 2010 respectively for yearsObject.

# Don't worry if you supplied wrong ranges, they're handled efficiently.
