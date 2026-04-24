import union from "/src/images/Union.png";


export class AppChatGeneral extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <app-chat-sidebar></app-chat-sidebar>
            <div class="chat-general">
                <app-chat-sidebar></app-chat-sidebar>
                <div class="chat-general__select-chat">
                    <img class="chat-general__imagen" src="${union}">
                    <p class="chat-general__texto">Elige un chat para enviar el mensaje</p>
                </div>
            </div>
        
        
        `;
    }
}

customElements.define("app-chat-general",AppChatGeneral);