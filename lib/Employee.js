const inquirer=require("inquirer");

class Employee{
    constructor (name,id,title,email){
         if (name.length==0) {
            throw new Error("NAME should be a non-empty string");
          }
         if (id.length==0) {
            throw new Error("ID should be a non-empty");
          }
          if (email.length==0 || !email.includes("@")) {
            throw new Error("EMAIL should be non-empty string contains @ sign");
          }

        this.name=name;
        this.id=id;
        this.title=title;
        this.email=email;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getTitle(){
        return this.title;
    }

    getEmail(){
        return this.email;
    }
}  



module.exports=Employee;