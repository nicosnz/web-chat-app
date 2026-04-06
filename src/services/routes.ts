type Routes = Record<string,string>;

export const routes:Routes = {
    "/":"app-chat-general",
    "/chat/:id":"app-chat-user",
    "/login":"app-login",
    "/register":"app-register"
}