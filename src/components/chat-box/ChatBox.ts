
export class ChatBox extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <a href="#" class="chatbox">
                <div class="chatbox__left">
                    <div class="chatbox__perfil"></div>
                    <div class="chatbox__contacto">
                        <p class="chatbox__nombre">Andrey</p>
                        <p class="chatbox__mensaje">Imagen</p>
                    </div>
                </div>
                
                <div class="chatbox__mensajes">
                    <p class="chatbox__hora">10:49</p>
                    <p class="chatbox__nro-mensajes">2</p>
                </div>
                
            </a>

        `;
    }
}

customElements.define("app-chat-box",ChatBox);