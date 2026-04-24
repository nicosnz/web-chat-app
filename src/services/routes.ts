import type { Block } from "../components/block/Block";
import { AppChatGeneral } from "../pages/AppChatGeneral";
import { AppChatUser } from "../pages/AppChatUser";
import { AppPerfil } from "../pages/AppPerfil";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

type Routes = Record<string,Block>;

export const routes:Routes = {
    "/":new AppChatGeneral({}),
    "/chat":new AppChatUser({}),
    "/login":new Login({}),
    "/register":new Register({}),
    "/perfil":new AppPerfil({})
}