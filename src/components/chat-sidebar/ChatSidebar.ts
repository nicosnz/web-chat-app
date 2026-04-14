
export class ChatSidebar extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        
        this.innerHTML = `
            <div class="chat-sidebar">
                <div class="chat-sidebar__links">
                    <a href="/perfil" class="chat-sidebar__perfil">Perfil ></a>
                    <input class="chat-sidebar__buscador" type="text" placeholder="Search">
                </div>
                
                
                <div class="chat-sidebar__chats"></div>
            </div>
        
        
        `;
    }
}

customElements.define("app-chat-sidebar",ChatSidebar);