const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = 'Manager';
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role;
  }
}

const userOne = new Employee('Bob', 42134, 'Bob@bobmail.bob');
const managerOne = new Manager('Robert', 11111, 'Robert@Robmail.rob', 45);

console.log(userOne);
console.log(managerOne);