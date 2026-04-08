
export class FormRegister extends HTMLElement{
    
    constructor() {
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
            <form class="form-register">
                <h2 class="form-register__title">Registrate</h2>
                <input class="form-register__input" type="email" placeholder="Correo electrónico">
                <input class="form-register__input" type="text" placeholder="Login">
                <input class="form-register__input" type="text" placeholder="Nombre">
                <input class="form-register__input" type="text" placeholder="Apellido">
                <input class="form-register__input" type="number" placeholder="Teléfono">
                <input class="form-register__input" type="password" placeholder="Password">
                <input class="form-register__input" type="password" placeholder="Password (Nuevamente)">
                <input class="form-register__input_submit" type="submit" value="Registrate">
                <a href="/login"  class="form-register__link">¿Iniciar sesión?</a>
            
            </form>
        
        
        `;
    }
}

customElements.define("app-register-form",FormRegister);