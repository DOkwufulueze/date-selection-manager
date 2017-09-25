/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

require('../css/demo');

import dateSelectionManager from '../../src/date-selection-manager';

const dateDOM = new DOMParser().parseFromString(`
  <div id='wrapper'>
    <h1 class='title'>date-selection-manager Demo</h1>
    <p>Visit <a href='https://www.github.com/DOkwufulueze/date-selection-manager' target='_blank'>The Containing Repo</a> to clone</p>
    <div class='date-holder'>
      <select id='day'><option value=''>Day</option></select>
      <select id='month'><option value=''>Month</option></select>
      <select id='year'><option value=''>Year</option></select>
    </div>
  </div>
`, 'text/html').body.firstChild;

document.body.appendChild(dateDOM);

dateSelectionManager.loadDate({
  dayContainer: document.querySelector('div.date-holder'),
  monthContainer: document.querySelector('div.date-holder'),
  yearContainer: document.querySelector('div.date-holder'),
  dayChangeEventCallback: (changeEvent) => {
    // Do something with the change in value
  },
  monthChangeEventCallback: (changeEvent) => {
    // Do something with the change in value
  },
  yearChangeEventCallback: (changeEvent) => {
    // Do something with the change in value
  },
});
