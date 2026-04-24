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
        window.addEventListener("popstate", () => {
            router.go(location.pathname || "/", false);
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

        if(component){
            page = component.element();
        }
        else{
            
            page = document.createElement("app-not-found");
        }
        
        if(page){

            app.appendChild(page);
        }

        

        window.scrollTo(0,0);
  
    }
}