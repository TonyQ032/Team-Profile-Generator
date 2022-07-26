const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//List of questions the user is asked
const questions = () => {
  const userQuestions = inquirer.prompt([
    {
      type: 'input',
      message: "MANAGER: What is your manager's name?",
      name: 'managerName',
    },

    {
      type: 'input',
      message: "MANAGER: What is your manager's ID number?",
      name: 'managerId',
    },

    {
      type: 'input',
      message: "MANAGER: What is your manager's email?",
      name: 'managerEmail',
    },

    {
      type: 'input',
      message: "MANAGER: What is your manager's office number?",
      name: 'managerNum',
    },

    {
      type: 'input',
      message: "ENGINEER: What is your engineer's Name?",
      name: 'engineerName',
    },

    {
      type: 'input',
      message: "ENGINEER: What is your engineer's ID number?",
      name: 'engineerId',
    },

    {
      type: 'input',
      message: "ENGINEER: What is your engineer's email?",
      name: 'engineerEmail',
    },

    {
      type: 'input',
      message: "ENGINEER: What is your engineer's GitHub?",
      name: 'engineerGithub',
    },

    {
      type: 'input',
      message: "INTERN: What is your intern's name?",
      name: 'internName',
    },

    {
      type: 'input',
      message: "INTERN: What is your intern's ID number?",
      name: 'internId',
    },

    {
      type: 'input',
      message: "INTERN: What is your intern's email?",
      name: 'internEmail',
    },

    {
      type: 'input',
      message: "INTERN: What is your intern's school?",
      name: 'internSchool',
    }
  ])
  return userQuestions;
}

//Generates HTML Page writing
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

//Writes info to new index.html files
function writeToFile(html) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', html, err => {
      if (err) {
        console.log("Error writing HTML to file");
        reject(err);
        return;
      }
      resolve();
    })
  })
}

//Questions is called then executes a chain of events
questions()
.then(data => {
  //Takes users input and runs the generatePage function with it
  return generatePage(data)
})
.then(html => {
  writeToFile(html);
  console.log("index.html successfully generated!")
})
.catch(err => {
  console.log(err)
})