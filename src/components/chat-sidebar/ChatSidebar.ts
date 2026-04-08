
export class ChatSidebar extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <div class="chat-sidebar">
                <div class="chat-sidebar__links">
                    <a href="#" class="chat-sidebar__perfil">Perfil ></a>
                    <input class="chat-sidebar__buscador" type="text" placeholder="Search">
                </div>
                
                
                <div class="chat-sidebar__chats">
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    <app-chat-box></app-chat-box>
                    
                
                </div>
            </div>
        
        
        `;
    }
}

customElements.define("app-chat-sidebar",ChatSidebar);