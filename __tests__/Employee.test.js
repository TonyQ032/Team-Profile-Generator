const Employee = require('../lib/Employee.js');

//Creating new object
const employeeOne = new Employee('Tony', 88321, 'anthonyq032@gmail.com');

//Testing object properties
describe('Testing basic object properties', () => {
  const {name, id, email} = employeeOne;

  it('Checks name value', () => {expect(name).toBe('Tony')});

  it('Checks id value', () => {expect(id).toBe(88321)});

  it('Checks email value', () => {expect(email).toBe('anthonyq032@gmail.com')});
})

//Testing object methods
describe('Testing basic object properties', () => {
  it('Runs getName() function', () => {expect(employeeOne.getName()).toBe('Tony')});

  it('Runs getId() function', () => {expect(employeeOne.getId()).toBe(88321)});

  it('Runs getEmail() function', () => {expect(employeeOne.getEmail()).toBe('anthonyq032@gmail.com')});

  it('Runs getRole() function', () => {expect(employeeOne.getRole()).toBe('Employee')});
})