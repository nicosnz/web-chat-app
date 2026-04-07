
export class FormLogin extends HTMLElement{
    
    constructor() {
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
            <form class="form">
                <h2 class="form_title">Login</h2>
                <input class="form_input" type="text" placeholder="Login">
                <input class="form_input" type="password" placeholder="Password">
                <input class="form_input_submit" type="submit" value="Iniciar sesión">
                <a href="/register" class="form_link">¿No tienes una cuenta?</a>
            
            </form>
        
        
        `;
    }
}

customElements.define("app-login-form",FormLogin);