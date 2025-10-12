const MENU_EL = document.getElementById("menu");
const BOTAO_MENU = document.getElementById("menu-button");

let menuHabilitado = false;

BOTAO_MENU.addEventListener("click", ()=>{
    if(menuHabilitado){
        MENU_EL.style.display = "none";
        BOTAO_MENU.innerHTML = `Menu`;
        menuHabilitado = false;
    }
    else{
        MENU_EL.style.display = "flex";
        menuPrincipal();
        BOTAO_MENU.innerHTML = `Fechar`;
        menuHabilitado = true;
    }
});

function menuPrincipal(){
    MENU_EL.innerHTML = `
            <h2>Menu:</h2>
            <button onclick="apresentarMapa()">Viajar Pelo Mundo</button>
            <button>Inventário</button>
        `;
}

function apresentarMapa(){
    MENU_EL.innerHTML = `
            <h2>Mapa:</h2>
            <h3>Locais:</h3>
            <div class="menu-collection">
                <div class="menu-card">
                    <h3>Lugares</h3>
                    <img src="">
                    <button>Explorar</button>
                </div>
                <div class="menu-card">
                    <h3>Campos</h3>
                    <img src="Sprites/Places/campos.svg">
                    <button onclick="telaCampos()">Explorar</button>
                </div>
                <div class="menu-card">
                    <h3>Chefões</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button onclick="telaBosses()">Explorar</button>
                </div>
            </div>
            
            <button onclick="menuPrincipal()">Voltar</button>
        `;
}

function telaBosses(){
    MENU_EL.innerHTML = `
            <h2>Chefões:</h2>
            <h3>Apresentando:</h3>
            <div class="menu-collection">
                <div class="menu-card">
                    <h3>Capítulo 1:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
                <div class="menu-card">
                    <h3>Capítulo 2:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
                <div class="menu-card">
                    <h3>Capítulo 3:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
            </div>
            
            <button onclick="apresentarMapa()">Voltar</button>
        `;
}

function telaCampos(){
    MENU_EL.innerHTML = `
            <h2>Campos de Exploração:</h2>
            <h3>Aventure-se por:</h3>

            <div class="menu-collection">
                <div class="menu-card">
                    <h3>Campo de Flores</h3>
                    <img src="Sprites/Places/Campo_de_Flores.svg">
                    <button>Aventurar</button>
                </div>
                <div class="menu-card">
                    <h3>Reino Gelado</h3>
                    <img src="Sprites/Places/Campo_de_Flores.svg">
                    <button>Aventurar</button>
                </div>
                <div class="menu-card">
                    <h3>Colosso do Deserto</h3>
                    <img src="Sprites/Places/Campo_de_Flores.svg">
                    <button>Aventurar</button>
                </div>
                <div class="menu-card">
                    <h3>Vila do Sol Nascente</h3>
                    <img src="Sprites/Places/Campo_de_Flores.svg">
                    <button>Aventurar</button>
                </div>
            </div>
            
            <button onclick="apresentarMapa()">Voltar</button>
        `;
}

function telaLugares(){
    MENU_EL.innerHTML = `
            <h2>Chefões:</h2>
            <h3>Apresentando:</h3>
            <div class="menu-collection">
                <div class="menu-card">
                    <h3>Capítulo 1:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
                <div class="menu-card">
                    <h3>Capítulo 2:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
                <div class="menu-card">
                    <h3>Capítulo 3:</h3>
                    <img src="Sprites/Places/bosses.svg">
                    <button>Desafiar</button>
                </div>
            </div>
            
            <button onclick="apresentarMapa()">Voltar</button>
        `;
}