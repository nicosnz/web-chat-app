import { Block } from "../../shared/model/block/Block"


export class Chatbox extends Block<{nombre:string,mensaje:string,hora:string}>{
    static componentName = "Chatbox";
    protected template = `
        <a href="/chat" class="chatbox">
            <div class="chatbox__left">
                <div class="chatbox__perfil"></div>
                    <div class="chatbox__contacto">
                        <p class="chatbox__nombre">{{nombre}}</p>
                        <p class="chatbox__mensaje">{{mensaje}}</p>
                    </div>
                </div>
                        
                
                <div class="chatbox__mensajes">
                    <p class="chatbox__hora">{{hora}}</p>
                    <p class="chatbox__nro-mensajes">2</p>
                </div>
                        
        </a>`;

}