const Manager = require('../lib/Manager.js');

//Creating new object
const employeeOne = new Manager('Tony', 88321, 'anthonyq032@gmail.com', 'F11');

//Testing object properties
describe('Testing basic object properties', () => {
  const {role, officeNumber} = employeeOne;

  it('Checks role value', () => {expect(role).toBe('Manager')});

  it('Checks officeNumber value', () => {expect(officeNumber).toBe('F11')});
})

//Testing object methods
describe('Testing basic object properties', () => {
  it('Runs getRole() function', () => {expect(employeeOne.getRole()).toBe('Manager')});
})