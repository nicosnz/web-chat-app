import union from "/src/images/Union.png";


export class AppChatGeneral extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <div class="chat-general">
                <img class="chat-general__imagen" src="${union}">
                <p class="chat-general__texto">Elige un chat para enviar el mensaje</p>
            </div>
        
        
        `;
    }
}

customElements.define("app-chat-general",AppChatGeneral);