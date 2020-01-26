const inquirer=require("inquirer");

class Employee{
    constructor (name,id,title,email){
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