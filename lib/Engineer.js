const Employee=require("./Employee");
const inquirer=require("inquirer");

class Engineer extends Employee{
    constructor(name,id,title,email,github){
      if(github.length==0){
        throw new Error("GITHUB USERNAME should be a non-empty string");
      }
        super(name,id,title,email);
        this.github=github;
    }

    getGithub(){
        return this.github;
    }


    createEngineer(){
      inquirer
      .prompt([
        {
          type: "input",
          message: "Engineer name: ",
          name: "name"
        },
        {
          type: "input",
          message: "Engineer id: ",
          name: "id"
        },
        {
          type: "input",
          message: "Engineer email:",
          name: "email"
        },
        {
          type: "input",
          message: "Engineer github:",
          name: "github"
        }
      ])
      .then(function(answers) {
        

      });
    }


}

module.exports=Engineer;