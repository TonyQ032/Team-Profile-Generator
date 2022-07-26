const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = 'Engineer';
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

const userOne = new Employee('Bob', 42134, 'Bob@bobmail.bob');
const engineerOne = new Engineer('Robert', 11111, 'Robert@Robmail.rob', 'TonyQ032');

console.log(userOne);
console.log(engineerOne);