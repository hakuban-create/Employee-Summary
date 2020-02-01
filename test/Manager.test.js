const Manager=require("../lib/Manager");

describe("Manager",() =>{
    describe("Initialization",()=>{
        it("should create Manager object if provided valid arguments",()=>{
            const manager1=new Manager("John",1,"Manager","John1@yahoo.com",10);
            expect(manager1.getName()).toEqual("John");
            expect(manager1.getId()).toEqual(1);
            expect(manager1.getTitle()).toEqual("Manager");
            expect(manager1.getEmail()).toEqual("John1@yahoo.com");
            expect(manager1.getOfficeNumber()).toEqual(10);
        });

    });
    });