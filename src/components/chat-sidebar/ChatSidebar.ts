import { Block } from '../block/Block';
interface SidebarProps{
    nombre:string;
    mensaje:string;
    hora:string;
}

export class ChatSidebar extends Block<{chats:SidebarProps[]}> {
        static componentName = "ChatSidebar";
        constructor(){
            super({
                chats:[
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
            
            })
        }
        protected template = `
            <div class="chat-sidebar">
                <div class="chat-sidebar__links">
                    <a href="/perfil" class="chat-sidebar__perfil">Perfil ></a>
                    <input class="chat-sidebar__buscador" type="text" placeholder="Search">
                </div>
                
                
                <div class="chat-sidebar__chats">
                    {{#each chats}}
                        {{{ Chatbox nombre=nombre mensaje=mensaje hora=hora}}}
                    {{/each}}
                </div>
            </div>
        
        
        `;
        
    
}


