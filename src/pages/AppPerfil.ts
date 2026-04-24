import { Block } from "../components/block/Block";



export class Button extends Block<{label:string}>{
    protected template: string = `<button>{{ label }}</button>`
    static componentName = "Button";
    protected events = {
        click:(e:Event) => {
            console.log("Hola desde handlebars");
            
        }
    }
}
export class AppPerfil extends Block<{}>{
    protected template: string = 
    `
    <div>
    <p>Hola</p>
    {{{ Button label="Haz Click aqui" }}}
    </div>
    `
    static componentName = "app-perfil";
    
}

