import { router } from "./services/router";
import "../index.css";
import "./components/formLogin/FormLogin";
import "./components/formRegister/FormRegister";
import "./pages/404";
import { registerComponent } from "./components/block/RegisterComponent";
import { Chatbox } from "./components/chat-box/ChatBox";
import { ChatSidebar } from "./components/chat-sidebar/ChatSidebar";
import { FormLogin } from "./components/formLogin/FormLogin";
import { FormRegister } from "./components/formRegister/FormRegister";

registerComponent(FormRegister);
registerComponent(FormLogin);
registerComponent(Chatbox);
registerComponent(ChatSidebar);

document.addEventListener("DOMContentLoaded",router.init)
