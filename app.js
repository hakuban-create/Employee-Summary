const fs=require("fs");
const inquirer=require("inquirer");
const Manager=require("./lib/Manager");
const Engineer=require("./lib/Engineer");
const Intern=require("./lib/Intern");
const generateHtml=require("./templates/generateHtml");

var tempTeamHtml="";
var memberCount=0;

function createRole(){
inquirer
.prompt([
    {
    type: "list",
    name: "role",
    message: "What role do you want to add?",
    choices: ["Manager", "Engineer", "Intern", "finish"],
    },

]).then(answer=>{
    var selected=answer.role;
    console.log("role: "+selected);
    if(selected=="finish"){
        fs.writeFile("output.html",generateHtml.teamHtml(tempTeamHtml),function(err){
            if(err){
                 console.log(err);
            }else{
                console.log("Wrote to file.");
            }
        });
    }else{
    getEmployeeInfo(selected);
    }
});

}

function getEmployeeInfo(role){
inquirer
.prompt([
  {
    type: "input",
    message: "Name: ",
    name: "name"
  },
  {
    type: "input",
    message: "Id: ",
    name: "id"
  },
  {
    type: "input",
    message: "Email:",
    name: "email"
  }
])
.then(function(answers) {

      switch(role){

        case "Manager": 
        inquirer.prompt([
        {   type: "input",
            message: "OfficeNumber:",
            name: "officeNumber"  }
        ]).then(function(answer){
            var managerObj=new Manager(answers.name, answers.id,"Manager", answers.email, answer.officeNumber);
            addMember(generateHtml.createManagerhtml(managerObj));
                createRole();
         });
        break;

        case "Engineer": 
        inquirer.prompt([
            {   type: "input",
                message: "Github username:",
                name: "github"  }
            ]).then(function(answer){
                var engineerObj=new Engineer(answers.name, answers.id,"Engineer", answers.email, answer.github);
                addMember(generateHtml.createEngineerhtml(engineerObj));
                    createRole();
                
             });
         break;

        case "Intern": 
        inquirer.prompt([
            {   type: "input",
                message: "School name:",
                name: "school"  }
            ]).then(function(answer){
                var internObj=new Intern(answers.name, answers.id,"Intern", answers.email, answer.school);
                addMember(generateHtml.createInternhtml(internObj));
                    createRole();
             });
         break;
         
    }



});

}


function addMember(newMemberHtml){
if(memberCount==0){
    tempTeamHtml+="\n<div class=\"row\">"+newMemberHtml;
}else if(memberCount==2){
     tempTeamHtml+=newMemberHtml+"\n</div>";
     memberCount=-1;
}else{
    tempTeamHtml+="\n"+newMemberHtml;
}
memberCount++;
    console.log("count: "+memberCount);
    console.log(tempTeamHtml);
}

createRole();

