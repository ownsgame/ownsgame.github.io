const MENU_BUTTON = document.querySelector(".menu");
const MENU_OPTIONS = document.querySelector(".options");

MENU_OPTIONS.innerHTML = 
`
    <h1 class="fonte-futuretimes">Opcoes</h1>
    <div class="row-buttons">
        <button>
            <i class="fa-solid fa-volume-low"></i>
        </button>
        
        <button class="botao-ativo" onclick="window.location = 'Inventario.html'">
            <i class="fa-solid fa-toolbox"></i>
        </button>
        
        <button onclick="window.location = 'index.html'">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>

        <button onclick="fecharOpcoes()">
            <i class="fa-solid fa-x"></i>
        </button>
    </div>
`;

MENU_BUTTON.addEventListener("mousemove", function() {
    MENU_BUTTON.src = "Sprites/IU/home_icon_hover.svg";
})

MENU_BUTTON.addEventListener("mouseleave", function() {
    MENU_BUTTON.src = "Sprites/IU/home_icon.svg";
});

MENU_BUTTON.addEventListener("click", function() {
    MENU_BUTTON.style.display = "none";
});

function abrirOpcoes(){
    abrirTela('menu_options');
}

function fecharOpcoes(){
    MENU_BUTTON.style.display = "block";
    fecharTela('menu_options')
}