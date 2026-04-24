import { router } from "./services/router";
import "../index.css";
import "./components/formLogin/FormLogin";
import "./pages/Login";
import "./components/formRegister/FormRegister";
import "./pages/Register";
import "./components/chat-sidebar/ChatSidebar";
import "./pages/AppChatGeneral";

import "./pages/AppChatUser";
import "./pages/404";
import { registerComponent } from "./components/block/RegisterComponent";
import { Button } from "./pages/AppPerfil";
registerComponent(Button);


router.init();
