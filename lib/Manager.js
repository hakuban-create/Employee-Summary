const Employee=require("./Employee");

class Manager extends Employee{
    constructor(name,id,title,email,officeNumber){
        if(officeNumber.length==0){
            throw new Error("OFFICE NUMBER should be a non-empty string");
        }
        super(name,id,title,email);
        this.officeNumber=officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports=Manager;