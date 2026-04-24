import Handlebars from 'handlebars';
type ChildrenComponents = {
    component:Block<object>;
    embed(node:DocumentFragment):void;
}
export interface BlockProps{
    __children?:ChildrenComponents[];
}
type EventHandler = (e:Event) => void;
type EventName = keyof HTMLElementEventMap;
type EventType = Partial<Record<EventName,EventHandler>>;

export abstract class Block <T extends object = BlockProps>{
    static componentName:string ="";
    protected abstract template:string;
    protected props:T = {} as T & BlockProps;
    private domElement:Element|null = null;
    protected events:EventType = {};
    protected children:Block<object>[] = [];
    constructor(props:T = {} as T){
        this.props = props;
    };

    private compile():Element|null{
        const html = Handlebars.compile(this.template);
        const templateElement = document.createElement("template");
        const context = {...this.props , __children:[] as ChildrenComponents[]};
        
        templateElement.innerHTML = html(context);
        const fragment = templateElement.content;
        if(context.__children.length > 0){
            this.children = context.__children.map(c => c.component);
            context.__children.forEach(c => c.embed(fragment));
        };
        return templateElement.content.firstElementChild;
    };
    private attachListeners() {
        Object.entries(this.events).forEach(([eventName, handler]) => {
            if (this.domElement) {
            this.domElement.addEventListener(eventName, handler);
            }
        });
    }
    private removeListeners() {
        Object.entries(this.events).forEach(([eventName, handler]) => {
            if (this.domElement) {
            this.domElement.removeEventListener(eventName, handler);
            }
        });
    }

    protected render(){
        this.unmountComponent();
        const fragment = this.compile();
        if(fragment && this.domElement){
            this.domElement.replaceWith(fragment);
        }
        this.domElement = fragment;
        this.mountComponent();
    };
    public element(){
        if(!this.domElement){
            this.render();
        }
        
        return this.domElement;
    };

    public setProps(newProps:Partial<T>){
        this.props = {...this.props,...newProps};
        this.render();
    };
    protected componentDidMount(){
        //TO-DO CODE
    };
    protected mountComponent(){
        this.attachListeners();
        this.componentDidMount();
    };
    protected componentWillUnmount(){
        //TO-DO CODE
    };
    protected unmountComponent(){
        if(this.domElement){
            this.children.reverse().forEach(c => c.unmountComponent());
            this.componentWillUnmount();
            this.removeListeners();
        }
    };

}