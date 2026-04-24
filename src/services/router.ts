import { AppPerfil} from '../pages/AppPerfil';
import { routes } from './routes';
type Route= keyof typeof routes;


export const router = {
    init():void{
        document.addEventListener("click",(e) => {
            const link = (e.target as HTMLElement).closest("a");
            if(!link) return;

            e.preventDefault();

            const href = link.getAttribute("href") as Route;
            router.go(href);
        });
        window.addEventListener("popstate", (e) => {
            router.go(e.state?.route || "/", false);
        });
        router.go(location.pathname as Route || "/", false);
    },
    go(route:Route,addHistory = true):void{
        
        if(addHistory){
            history.pushState({route}, "", route);
        }
        

        const app = document.querySelector("#app") as HTMLDivElement

        app.innerHTML = ""; 

        const component = routes[route];

        let page;

        // if(component){
        //     if(component === "app-perfil"){
                
        //         const appPerfil = new AppPerfil({});
                
        //         page = appPerfil.element();
        //         return;
        //     }
        //     console.log(page);
            
        //     page = document.createElement(component);
        // }
        // else{
            
        //     page = document.createElement("app-not-found");
        // }

        const appPerfil = new AppPerfil({});
                
        page = appPerfil.element();
        if(page){
            app.appendChild(page);

        }

        window.scrollTo(0,0);
  
    }
}