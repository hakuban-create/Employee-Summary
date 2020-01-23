class Engineer extends Employee{
    constructor(name,id,title,email,github){
        super(name,id,title,email);
        this.github=github;
    }

    getGithub(){
        return this.github;
    }

    getHtml(){
        return `<div class="col-md-3 employee rounded shadow-lg">
        <div class="header">
            <div>${this.name}</div>
            <i class="fas fa-glasses"></i>
            <span>Engineer</span>
                    <div class="row row-cols-1">
                      <div class="col rounded">ID: ${this.id}</div>
                      <div class="col">Email: <a href="#">${this.email}</a></div>
                      <div class="col rounded">Github: <a href="#">${this.github}</a></div>           
                    </div>
        </div>
      </div>`;
    }
}