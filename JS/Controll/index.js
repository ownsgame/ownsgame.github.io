const imgs = [
    "Sprites/IU/telaInicial/1.svg",
    "Sprites/IU/telaInicial/2.svg",
    "Sprites/IU/telaInicial/3.svg",
    "Sprites/IU/telaInicial/4.svg",
    "Sprites/IU/telaInicial/5.svg",
    "Sprites/IU/telaInicial/6.svg",
    "Sprites/IU/telaInicial/7.svg",
    "Sprites/IU/telaInicial/4.svg",
];

const ImagemTelaInicial = document.querySelector(".main-image");
let index = 0;

setInterval(()=>{
    ImagemTelaInicial.src = `../${imgs[index]}`;
    index = (index + 1) % imgs.length;
}, 500);

function mostrarTelaSaves(){
    const SAVES = getSaves();
    mostrarSaves(SAVES);
}

function mostrarOpcoesSaves(){
    const SAVES = getSaves();
    mostrarOpcoes(SAVES);
}

function jogar(pos){
    const SAVES = getSaves();
    const SAVE = SAVES[pos];

    setSession(pos, SAVE);
    if(SAVE.iniciante){
        redirecionarPara("cutscene.html");
    }
    else{
        redirecionarUltimaSala();
    }
}

function deletar(e, pos){
    e.stopPropagation();

    deleteSave(pos);
    logoutSession();
    mostrarTelaSaves(); 
}
