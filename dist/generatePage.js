const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

//Generates HTML Page writing
function generatePage(data) {
  //Assigns all incoming data into easier variable names
  const {managerName, managerId, managerEmail, managerNum, engineerName, engineerId, engineerEmail, engineerGithub, internName, internId, internEmail, internSchool} = data;

  //Creates manager object using collected data
  const newManager = new Manager(managerName, managerId, managerEmail, managerNum);
  
  //Creates engineer object using collected data
  const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

  //Creates intern object using collected data
  const newIntern = new Intern(internName, internId, internEmail, internSchool)

  //Returns completed text for index.html using the newly generated objects
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My team!</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <link href="./style.css" rel="stylesheet">
</head>

<body>
  <h1>My Team</h1>
  
  <section class="card-container">

    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h2 class="person-name">${newManager.getName()}</h2>
        <h3 class="person-role">${newManager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item person-email">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
          <li class="list-group-item person-id">ID: ${newManager.getId()}</li>
          <li class="list-group-item">Office #: ${newManager.officeNumber}</li>
        </ul>
      </div>
    </div>

    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h2 class="person-name">${newEngineer.getName()}</h2>
        <h3 class="person-role">${newEngineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item person-email">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
          <li class="list-group-item person-id">ID: ${newEngineer.getId()}</li>
          <li class="list-group-item">Github: ${newEngineer.getGithub()}</li>
        </ul>
      </div>
    </div>

    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h2 class="person-name">${newIntern.getName()}</h2>
        <h3 class="person-role">${newIntern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item person-email">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
          <li class="list-group-item person-id">ID: ${newIntern.getId()}</li>
          <li class="list-group-item">Github: ${newIntern.getSchool()}</li>
        </ul>
      </div>
    </div>
    
  </section>
</body>

</html>
`
}

module.exports = generatePage;