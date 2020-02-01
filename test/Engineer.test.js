const Engineer=require("../lib/Engineer");

describe("Engineer",() =>{
    describe("Initialization",()=>{
        it("should create Engineer object if provided valid arguments",()=>{
            const engineer1=new Engineer("John",1,"Engineer","John1@yahoo.com","John-Git");
            expect(engineer1.getName()).toEqual("John");
            expect(engineer1.getId()).toEqual(1);
            expect(engineer1.getTitle()).toEqual("Engineer");
            expect(engineer1.getEmail()).toEqual("John1@yahoo.com");
            expect(engineer1.getGithub()).toEqual("John-Git");
        });
    });
});
