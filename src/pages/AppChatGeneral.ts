import { Block } from "../components/block/Block";
import union from "/src/images/Union.png";


export class AppChatGeneral extends Block<{}> {
    static componentName = "AppChatGeneral";
    protected template = `
            <div class="chat-general">
                {{{ ChatSidebar }}}
                <div class="chat-general__select-chat">
                    <img class="chat-general__imagen" src="${union}">
                    <p class="chat-general__texto">Elige un chat para enviar el mensaje</p>
                </div>
            </div>
        
        
        `
}

