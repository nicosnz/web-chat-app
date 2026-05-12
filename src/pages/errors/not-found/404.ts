

export class NotFoundPage extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <div class="not-found">
                <p class="not-found__text-title">404</p>
                <p class="not-found__text-content">Nos equivocamos de lugar</p>
                <a href="/" class="not-found__link">Volver a los chats</a>
            
            </div> 
        
        
        `;
    }
}

customElements.define("app-not-found",NotFoundPage);