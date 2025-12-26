const MENU_BUTTON = document.querySelector(".menu");

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