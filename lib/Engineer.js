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

  createCard() {
    let engineerHtml = `
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h2 class="person-name">${this.getName()}</h2>
        <h3 class="person-role">${this.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item person-email">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
          <li class="list-group-item person-id">ID: ${this.getId()}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${this.github}" target="_blank">${this.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `
    return engineerHtml;
  }
}

module.exports = Engineer;