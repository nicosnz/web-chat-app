
export class Register extends HTMLElement{
    
    constructor() {
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
            <app-register-form></app-register-form>
        
        
        `;
    }
}

customElements.define("app-register",Register);