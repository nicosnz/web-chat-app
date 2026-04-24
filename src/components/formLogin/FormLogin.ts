import { Block } from "../block/Block";

export class FormLogin extends Block<{}>{
    static componentName = "FormLogin";
    

    protected template = `
            <form class="form">
                <h2 class="form_title">Login</h2>
                <input class="form_input" type="text" placeholder="Login">
                <input class="form_input" type="password" placeholder="Password">
                <input class="form_input_submit" type="submit" value="Iniciar sesión">
                <a href="/register" class="form_link">¿No tienes una cuenta?</a>
            
            </form>
        
        
    `;
}

