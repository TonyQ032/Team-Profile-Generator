const Intern = require('../lib/Intern.js');

//Creating new object
const employeeOne = new Intern('Tony', 88321, 'anthonyq032@gmail.com', 'UCR');

//Testing object properties
describe('Testing basic object properties', () => {
  const {role, school} = employeeOne;

  it('Checks role value', () => {expect(role).toBe('Intern')});

  it('Checks school value', () => {expect(school).toBe('UCR')});
})

//Testing object methods
describe('Testing basic object properties', () => {
  it('Runs getSchool() function', () => {expect(employeeOne.getSchool()).toBe('UCR')});

  it('Runs getRole() function', () => {expect(employeeOne.getRole()).toBe('Intern')});
})