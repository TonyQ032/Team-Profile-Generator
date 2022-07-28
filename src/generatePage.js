//Generates HTML Page writing
function generatePage(data) {
  //Returns completed text for index.html using the previously generated html for every
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
    ${data}
  </section>
</body>

</html>
`
}

module.exports = generatePage;