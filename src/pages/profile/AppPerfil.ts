import { Block } from "../shared/model/block/Block";
export class AppPerfil extends Block{
    static componentName = "app-perfil";
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
                <input
                    type="file"
                    class="perfil__avatar-input"
                    hidden
                >

                <div class="perfil__foto">
                    <span class="perfil__foto-overlay">
                        Cambiar avatar
                    </span>
                </div>
                <h2 class="perfil__nombre">Emanuel</h2>

                <div class="perfil__info">
                    <div class="perfil__info-item">
                        <p>Correo Electrónico</p>
                        <p>olysancheznicolas@gmail.com</p>
                    </div>

                    <div class="perfil__info-item">
                        <p>Login</p>
                        <p>emanuel123</p>
                    </div>

                    <div class="perfil__info-item">
                        <p>Nombre</p>
                        <p>Emanuel</p>
                    </div>

                    <div class="perfil__info-item">
                        <p>Apellido</p>
                        <p>Sanchez</p>
                    </div>

                    <div class="perfil__info-item">
                        <p>Nombre en el chat</p>
                        <p>EmaDev</p>
                    </div>

                    <div class="perfil__info-item">
                        <p>Teléfono</p>
                        <p>+591 70000000</p>
                    </div>
                </div>
                <div class="perfil__acciones">
                    <a href="/perfil/edit" class="perfil__acciones-datos">Cambiar datos</a>
                    <a href="/perfil/edit/password" class="perfil__acciones-contraseña">Cambiar contraseña</a>
                    <a class="perfil__acciones-salir">Salir</a>
                </div>
            </div>
        </div>
   
    `
    
}

