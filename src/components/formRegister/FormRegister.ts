
export class FormRegister extends HTMLElement{
    
    constructor() {
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
            <form class="form-register">
                <h2 class="form_title-register">Registrate</h2>
                <input class="form_input-register" type="email" placeholder="Correo electrónico">
                <input class="form_input-register" type="text" placeholder="Login">
                <input class="form_input-register" type="text" placeholder="Nombre">
                <input class="form_input-register" type="text" placeholder="Apellido">
                <input class="form_input-register" type="number" placeholder="Teléfono">
                <input class="form_input-register" type="password" placeholder="Password">
                <input class="form_input-register" type="password" placeholder="Password (Nuevamente)">
                <input class="form_input_submit-register" type="submit" value="Registrate">
                <a href="/login"  class="form_link-register">¿Iniciar sesión?</a>
            
            </form>
        
        
        `;
    }
}

customElements.define("app-register-form",FormRegister);