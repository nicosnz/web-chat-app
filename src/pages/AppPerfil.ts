

export class AppPerfil extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
            <p>Hola</p>
        
        
        `;
    }
}

customElements.define("app-perfil",AppPerfil);