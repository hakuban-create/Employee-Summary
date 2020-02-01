const Employee=require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with a name and age if provided valid arguments", () => {
        const employee1 = new Employee("John",1,"Manager","johnManager1@gmail.com");
  
        expect(employee1.getName()).toEqual("John");
        expect(employee1.getId()).toEqual(1);
        expect(employee1.getTitle()).toEqual("Manager");
        expect(employee1.getEmail()).toEqual("johnManager1@gmail.com");
       
      });
  
      it("should throw an error if provided no arguments", () => {
        const employee2 = () => new Employee();
        expect(employee2).toThrow();
      });
  
      it("should throw an error if not provided an name", () => {
        const employee3 = () => new Employee("",1,"Manager","johnManager1@gmail.com");
        const err = new Error("NAME should be a non-empty string");
  
        expect(employee3).toThrowError(err);
      });
  
      it("should throw an error if 'ID' field is empty", () => {
        const employee4 = () => new Employee("John","","Manager","johnManager1@gmail.com");
        const err = new Error("ID should be a non-empty");
  
        expect(employee4).toThrowError(err);
      });

      it("should throw an error if 'Email' field is empty", () => {
        const employee5 = () => new Employee("John",1,"Manager","");
        const err = new Error("EMAIL should be non-empty string contains @ sign");
  
        expect(employee5).toThrowError(err);
      });

      it("should throw an error if 'Email' does not have @ sign", () => {
        const employee6 = () => new Employee("John",1,"Manager","johnManager1gmail.com");
        const err = new Error("EMAIL should be non-empty string contains @ sign");
  
        expect(employee6).toThrowError(err);
      });
  
    });
  });
  