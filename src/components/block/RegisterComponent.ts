import Handlebars from 'handlebars';
import type {HelperOptions} from 'handlebars';
import type { Block, BlockProps } from './Block';

let id = 0;
type ComponentClass<Props extends object> = {
    new (props?:Props):Block<Props>;
    componentName:string;
}
export function registerComponent<T extends object>(Component:ComponentClass<T>){
    
    
    
    Handlebars.registerHelper(Component.componentName,({hash,data}:HelperOptions)=>{
        
        const dataAttribute = `data-component-hbs-id="${++id}"`;
        
        const component = new Component(hash as T);
                
        data.root.__children = data.root.__children || [];
        data.root.__children.push({
            component,
            embed(node:DocumentFragment){
                
                const divComponent = node.querySelector(`[${dataAttribute}]`);
                if(!divComponent){
                    throw new Error(`No se encontro el div para: ${Component.componentName}`);
                };
                
                const realElement = component.element();

                if(realElement){
                    divComponent.replaceWith(realElement);
                    
                }

            }
        })
        
        return `<div ${dataAttribute}></div>`;


    });
}