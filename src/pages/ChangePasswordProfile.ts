import { Block } from "../components/block/Block";
export class ChangePassword extends Block{
    static componentName = "change-password";
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
                        <p>Antigua Contraseña</p>
                        <input class="perfil__info-item--input" type="password" value="12345">
                    </div>

                    <div class="perfil__info-item">
                        <p>Nueva Contraseña</p>
                        <input class="perfil__info-item--input" type="password" placeholder="Nueva contraseña">
                    </div>

                    <div class="perfil__info-item">
                        <p>Repita la contraseña</p>
                    <input class="perfil__info-item--input" type="password" placeholder="Repita la contraseña">
                    </div>

                   
                </form>
                <div class="perfil__acciones">
                    <button class="perfil__acciones--guardar">Guardar</button>
                    
                </div>
            </div>
        </div>
   
    `
    
}

