/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

require('../css/demo');

let dateSelectionmanager = require('../../src/date-selection-manager');

const dateDOM = new DOMParser().parseFromString(`
  <div id='wrapper'>
    <h1>date-selection-manager Demo</h1>
    <p>Visit <a href='https://www.github.com/DOkwufulueze/date-selection-manager' target='_blank'>The Containing Repo</a> to clone</p>
    <div class='date-holder'>
      <select id='day'><option value=''>Day</option></select>
      <select id='month'><option value=''>Month</option></select>
      <select id='year'><option value=''>Year</option></select>
    </div>
  </div>
`, 'text/html').body.firstChild;

document.body.appendChild(dateDOM);
dateSelectionmanager.loadDate();
