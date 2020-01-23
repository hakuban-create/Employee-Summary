class Intern extends Employee{
    constructor(name,id,title,email,school){
        super (name,id,title,email);
        this.school=school;
    }

    getSchool(){
        return this.school;
    }

    getHtml(){
        return `
        <div class="col-md-3 employee rounded shadow-lg">
        <div class="header">
            <div>${this.name}</div>
            <i class="fas fa-user-graduate"></i>
            <span>Intern</span>
                    <div class="row row-cols-1">
                      <div class="col rounded">ID: ${this.id}</div>
                      <div class="col">Email: <a href="#">${this.email}</a></div>
                      <div class="col rounded">School: ${this.school}</div>           
                    </div>
        </div>
      </div>`;
    }
}