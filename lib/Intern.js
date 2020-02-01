const Employee=require("./Employee");

class Intern extends Employee{
    constructor(name,id,title,email,school){
        if(school.length==0){
            throw new Error("SCHOOL NAME should be a non-empty string");
        }
        super (name,id,title,email);
        this.school=school;
    }

    getSchool(){
        return this.school;
    }

}

module.exports=Intern;