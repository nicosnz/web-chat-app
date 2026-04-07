
export class Login extends HTMLElement{
    
    constructor() {
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
            <app-login-form></app-login-form>
        
        
        `;
    }
}

customElements.define("app-login",Login);