class Manager extends Employee{
    constructor(name,id,title,email,officeNumber){
        super(name,id,title,email);
        this.officeNumber=officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    gethtml(){
        return `
        <div class="col-md-3 employee rounded shadow-lg">
        <div class="header">
            <div>${this.name}</div>
            <i class="fas fa-mug-hot"></i>
            <span>Manager</span>
                    <div class="row row-cols-1">
                      <div class="col rounded">ID: ${this.id}</div>
                      <div class="col">Email: <a href="#">${this.email}</a></div>
                      <div class="col rounded">Office number: ${this.officeNumber}</div>           
                    </div>
        </div>
      </div>`;
    }
}