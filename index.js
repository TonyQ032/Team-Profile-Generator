const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generatePage = require('./src/generatePage.js');

//List of manager questions the user is asked
const managerQuestions = [
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
  }

]

//List of engineer questions the user is asked
const engineerQuestions = [
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
  }
]

//List of intern questions the user is asked
const internQuestions = [
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
]

//Question asked at the end of every group of questions
const continueQuestion = [
  {
    type: 'list',
    message: "Would you like to add another member to your team?",
    choices: ["Engineer", "Intern", "Finish team"],
    name: 'goOrStop',
  }
]

//Writes all retrieved data to 'index.html'
function writeToFile(html) {
  fs.writeFile('./dist/index.html', html, err => {
    err ? console.log("Error writing HTML to file") : console.log("index.html successfully generated!");
  })
}

//Will be used to generate HTML for cards
let completeTeamData = '';

//askQuestions() is called then executes a chain of events
async function askQuestions() {
  //Manager info
  const managerInfo = await inquirer.prompt(managerQuestions);
  const newManager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerNum);

  //Creates a card with the manager's info and adds it to the 'completeTeamData' variable
  completeTeamData += newManager.createCard();

  //While loop that continually runs until user clicks 'finish'
  let keepRunning = true;
  while (keepRunning) {
    const newWorker = await inquirer.prompt(continueQuestion);
    const workerPosition = newWorker.goOrStop;

    //Will prompt user with engineer questions
    if (workerPosition === "Engineer") {
      //Creates a new Engineer based on the answers provided by the user
      const engineerInfo = await inquirer.prompt(engineerQuestions);
      const newEngineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGithub)

      //Creates a card with the engineers's info and adds it to the 'completeTeamData' variable
      completeTeamData += newEngineer.createCard();

    // Will prompt user with intern questions  
    } else if (workerPosition === "Intern") {
      //Creates a new Intern based on the answers provided by the user
      const internInfo = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool)

      //Creates a card with the intern's info and adds it to the 'completeTeamData' variable
      completeTeamData += newIntern.createCard();
    } else {
      //When user selects 'Finish team', while loop ends
      keepRunning = false;
    }
  }

  //Runs generatePage function with the completed Team data
  const indexHtml = generatePage(completeTeamData)

  //Creates index.html with completed team data
  writeToFile(indexHtml);
}

askQuestions();