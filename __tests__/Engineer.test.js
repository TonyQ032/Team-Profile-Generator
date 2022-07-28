const Engineer = require('../lib/Engineer.js');

//Creating new object
const employeeOne = new Engineer('Tony', 88321, 'anthonyq032@gmail.com', 'TonyQ032');

//Testing object properties
describe('Testing basic object properties', () => {
  const {role, github} = employeeOne;

  it('Checks role value', () => {expect(role).toBe('Engineer')});

  it('Checks GitHub value', () => {expect(github).toBe('TonyQ032')});
})

//Testing object methods
describe('Testing basic object properties', () => {
  it('Runs getGithub() function', () => {expect(employeeOne.getGithub()).toBe('TonyQ032')});

  it('Runs getRole() function', () => {expect(employeeOne.getRole()).toBe('Engineer')});
})