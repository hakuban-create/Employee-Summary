const fs=require("fs");

function teamHtml(data){
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<style>
    .jumbotron{
        background-color: #f74949;
    }
    .display-4{
        color: white;
        font-weight: 500;
        text-align: center;
        font-size: 45px;
    }
    .container{
        margin-top: 80px;
    }

    .employee{
        background-color:#ececec;
        height: 330px;
        margin-right: 30px;
        padding: 0px !important;
        border: 2px solid #e4e4e4;
    }
    .row{
        margin-bottom: 30px; 
    }
    .header{
        background-color: #0579f1;
        height: 110px;
        color: white;
        font-size: 30px;
        padding: 5px 25px;
    }
    .row-cols-1{
        background: #f1f1f1;
        margin-top: 50px;

    }
    .col{
        border: 0.5px solid #e0e0e0;
        color: black;
        font-size: 16px;
        line-height: 3;
        padding-left: 20px;
    }
    a{
        font-size: 16px;
    }
    
</style>
<body>
    <div class="jumbotron jumbotron-fluid">
          <div class="display-4">My Team</div>
      </div>
      <div class="container">
      ${data}
      </div>
      <script src="https://use.fontawesome.com/releases/v5.12.0/js/all.js" data-auto-replace-svg="nest"></script> 
</body>
</html>`;
}



function createEngineerhtml(Engineer){
    return `<div class="col-md-3 employee rounded shadow-lg">
        <div class="header">
            <div>${Engineer.getName()}</div>
            <i class="fas fa-glasses"></i>
            <span>Engineer</span>
                    <div class="row row-cols-1">
                      <div class="col rounded">ID: ${Engineer.getId()}</div>
                      <div class="col">Email: <a href="#">${Engineer.getEmail()}</a></div>
                      <div class="col rounded">Github: <a href="https://github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a></div>           
                    </div>
        </div>
      </div>`;
    
}

function createManagerhtml(Manager){ 
    return `
    <div class="col-md-3 employee rounded shadow-lg">
    <div class="header">
        <div>${Manager.getName()}</div>
        <i class="fas fa-mug-hot"></i>
        <span>Manager</span>
                <div class="row row-cols-1">
                  <div class="col rounded">ID: ${Manager.getId()}</div>
                  <div class="col">Email: <a href="#">${Manager.getEmail()}</a></div>
                  <div class="col rounded">Office number: ${Manager.getOfficeNumber()}</div>           
                </div>
    </div>
  </div>`;
}


function createInternhtml(Intern){
    return `
    <div class="col-md-3 employee rounded shadow-lg">
    <div class="header">
        <div>${Intern.getName()}</div>
        <i class="fas fa-user-graduate"></i>
        <span>Intern</span>
                <div class="row row-cols-1">
                  <div class="col rounded">ID: ${Intern.getId()}</div>
                  <div class="col">Email: <a href="#">${Intern.getEmail()}</a></div>
                  <div class="col rounded">School: ${Intern.getSchool()}</div>           
                </div>
    </div>
  </div>`;
}


module.exports.teamHtml=teamHtml;
module.exports.createEngineerhtml=createEngineerhtml;
module.exports.createManagerhtml=createManagerhtml;
module.exports.createInternhtml=createInternhtml;
