const Intern=require("../lib/Intern");

describe("Intern",() =>{
    describe("Initialization",()=>{
        it("should create Intern object if provided valid arguments",()=>{
            const intern1=new Intern("John",1,"Intern","John1@yahoo.com","GW");
            expect(intern1.getName()).toEqual("John");
            expect(intern1.getId()).toEqual(1);
            expect(intern1.getTitle()).toEqual("Intern");
            expect(intern1.getEmail()).toEqual("John1@yahoo.com");
            expect(intern1.getSchool()).toEqual("GW");
        });

    });
    });