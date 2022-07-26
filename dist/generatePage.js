const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');

function generatePage(data) {
  console.log(data)

  //Assigns all incoming data into easier variable names
  const {managerName, managerId, managerEmail, managerNum, engineerName, engineerId, engineerEmail, engineerGithub, internName, internId, internEmail, internSchool} = data;

  console.log("-----------------------")

  //Creates engineer object using collected data
  const engineerOne = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

  //Creates maanger object using collected data
  const managerOne = new Manager(managerName, managerId, managerEmail, managerNum);

  //Creates intern object using collected data
  const internOne = new Intern(internName, internId, internEmail, internSchool)

  console.log(engineerOne, managerOne, internOne)
}

module.exports = generatePage;