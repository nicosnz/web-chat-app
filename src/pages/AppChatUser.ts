

export class AppChatUser extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="chat-user">
            <app-chat-sidebar></app-chat-sidebar>

            <div class="chat-user__container">
                <div class = "chat-user__header">
                    <div class="chat-user__chatbox">
                        <div class="chat-user__perfil"></div>
                        <p class="chat-user__nombre">Andrey</p>
                    </div>
                    <button class = "chat-user__menu">
                        <svg width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="1.5" r="1.5" fill="#1E1E1E"/>
                            <circle cx="1.5" cy="7.5" r="1.5" fill="#1E1E1E"/>
                            <circle cx="1.5" cy="13.5" r="1.5" fill="#1E1E1E"/>
                        </svg>
                    
                    </button>
                
                </div>
                    
                <div class="chat-user__mensajes">
                    
                    
                    <div class ="chat-user__container">
                        <p class="chat-user__fecha">19 de Junio</p>
                        <div class="chat-user__mensaje--remitente">
                            <p class="chat-user__text">¡Hola! Mira, aquí salió una parte interesante de la historia lunar espacial: en algún momento, la NASA le pidió a Hasselblad que adaptara el modelo SWC para los vuelos a la Luna. Ahora todos sabemos que los astronautas volaron con el modelo 500 EL, y por cierto, todos los cuerpos de esas cámaras aún están en la superficie de la Luna, ya que los astronautas solo se llevaron las cintas con la película.

                            Al final, Hasselblad adaptó el SWC para el espacio, pero algo salió mal y nunca llegaron a la nave. En total, se produjeron 25 unidades, y una de ellas se vendió recientemente en una subasta por 45,000 euros.</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                        <div class="chat-user__mensaje--personal">
                            <p class="chat-user__text">holaaaaaaaaaa</p>
                            <p class = "chat-user__hora">11:29</p>
                        </div>
                    </div>
                    


                    
                    

                </div>
                <div class="chat-user__input">
                        <input type="file" class="chat-user__file-input" hidden>
                        <button class="chat-user__file">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70077 16.014L17.2769 8.43781L18.2197 9.38062L10.6436 16.9568L9.70077 16.014Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6194 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5575 23.8706L25.1336 16.2945L26.0764 17.2373L18.5003 24.8134L17.5575 23.8706Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70093 16.0144C7.95752 17.7578 7.95123 20.5782 9.6869 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41895 20.1518 9.42335 18.1776 10.6437 16.9572L9.70093 16.0144Z" fill="#999999"/>
                            </svg>
                        </button>
                        
                        <input class ="chat-user__input-text"type="text" placeholder="Mensaje">
                        <button class="chat-user__send">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20" height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
            
            </div>    
            
        </div>

        
        `;
        const container = this.querySelector('.chat-user__container')!  ;
        container.scrollTop = container.scrollHeight;
    }
}

customElements.define("app-chat-user",AppChatUser);