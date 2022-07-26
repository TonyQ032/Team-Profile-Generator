const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name,id,email, school) {
    super(name, id, email);
    this.role = 'Intern';
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

const userOne = new Employee('Bob', 42134, 'Bob@bobmail.bob');
const internOne = new Intern('Robert', 11111, 'Robert@Robmail.rob', 'CSUSB');

console.log(userOne);
console.log(internOne);

module.exports = Intern;