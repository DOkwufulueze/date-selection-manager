/***
  Author: Daniel Okwufulueze
  Date: 13/02/2016
*/

let dateSelectionManager = require('../src/date-selection-manager');
require('./utilities/mockDOM.js');
let assert = require('assert');
let expect = require('chai').expect;

let dateDOMElement = new DOMParser().parseFromString(`
  <div class='data-holder'>
    <select id='day'><option value=''>Day</option></select>
    <select id='month'><option value=''>Month</option></select>
    <select id='year'><option value=''>Year</option></select>
  </div>
`, 'text/html').body.firstChild;

describe('DateSelectionManager', () => {
  describe('loadDate', () => {
    it('should have no argument', () => {
      expect(dateSelectionManager.loadDate.length).to.equal(0);
    });
  });
});
