import { Block } from "../shared/model/block/Block";
export class ChangeData extends Block{
    static componentName = "change-data";
    protected template: string = 
    `
        <div class="perfil">
            <div class="perfil__nav">
                <a class="perfil__atras" href="/">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
                    <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
                    <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
                    </svg>
                </a>
            </div>
            <div class="perfil__content">
                <div class="perfil__foto"></div>


                <form class="perfil__info">
                    <div class="perfil__info-item">
                        <p>Correo Electrónico</p>
                        <input class="perfil__info-item--input" type="email" value="olysancheznicolas@gmail.com">
                    </div>

                    <div class="perfil__info-item">
                        <p>Login</p>
                        <input class="perfil__info-item--input" type="text" placeholder="Login" value="nicosnz">
                    </div>

                    <div class="perfil__info-item">
                        <p>Nombre</p>
                        <input class="perfil__info-item--input" type="text" placeholder="Nombre" value="Emanuel">
                    </div>
                    <div class="perfil__info-item">
                        <p>Apellido</p>
                        <input class="perfil__info-item--input" type="text" value="Oly">
                    </div>

                    <div class="perfil__info-item">
                        <p>Nombre en el Chat</p>
                        <input class="perfil__info-item--input" type="text" placeholder="Nombre en el chat" value="nicosnz">
                    </div>

                    <div class="perfil__info-item">
                        <p>Teléfono Celular</p>
                        <input class="perfil__info-item--input" type="text" placeholder="Teléfono Celular" value="+591 78448371">
                    </div>

                   
                </form>
                <div class="perfil__acciones">
                    <button class="perfil__acciones--guardar">Guardar</button>
                    
                </div>
            </div>
        </div>
   
    `
    
}

