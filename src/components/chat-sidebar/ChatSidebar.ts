import Handlebars from 'handlebars';
import chatBox from '../../partials/chat-box.hbs?raw'; 
export class ChatSidebar extends HTMLElement {
    
    constructor() {
        super();
        
    }
    connectedCallback(){
   

        Handlebars.registerPartial("chatBox",chatBox);
        const chatList = Handlebars.compile(`
            {{#each chats}}
                {{> chatBox}}
            {{/each}}    

        `
        )

        const chats = [
            {
                nombre:"Emanuel",
                mensaje:"Hola como tas",
                hora:"12:00"
            },
            {
                nombre:"Gustav",
                mensaje:"Hola como tas",
                hora:"11:00"
            },
            {
                nombre:"Nicosan",
                mensaje:"Hola como tas",
                hora:"10:43"
            },
            {
                nombre:"Ema",
                mensaje:"Hola como tas",
                hora:"10:42"
            },
            {
                nombre:"XD",
                mensaje:"Hola como tas",
                hora:"10:40"

            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
            {
                nombre:"Bro 2",
                mensaje:"Hola como tas",
                hora:"7:00"
            },
        ]
        
        this.innerHTML = `
            <div class="chat-sidebar">
                <div class="chat-sidebar__links">
                    <a href="/perfil" class="chat-sidebar__perfil">Perfil ></a>
                    <input class="chat-sidebar__buscador" type="text" placeholder="Search">
                </div>
                
                
                <div class="chat-sidebar__chats"></div>
            </div>
        
        
        `;
        const $chatSidebar = document.querySelector<HTMLDivElement>(".chat-sidebar__chats");
        if($chatSidebar){
            const html = chatList({
                chats
            });
            $chatSidebar.innerHTML=html;
            
        }

        else{
            console.log("burro");
            
        }
    }
}

customElements.define("app-chat-sidebar",ChatSidebar);