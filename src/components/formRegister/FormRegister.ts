import { Block } from "../block/Block";

export class FormRegister extends Block<{}>{
    static componentName = "FormRegister";    
    
    protected template: string = `
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


