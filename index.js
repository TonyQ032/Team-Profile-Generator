const inquirer = require('inquirer');
const generatePage = require('./dist/generatePage.js');

const questions = () => {
  const userQuestions = inquirer.prompt([
    {
      type: 'input',
      message: '',
      name: '',
    },

    {
      type: 'input',
      message: '',
      name: '',
    },

    {
      type: 'input',
      message: '',
      name: '',
    },

    {
      type: 'input',
      message: '',
      name: '',
    },

    {
      type: 'input',
      message: '',
      name: '',
    }
  ])
  return userQuestions;
}

questions()
.then(data => {
  return generatePage(data)
})