const imgs = [
    "Sprites/IU/TelaInicial1.svg",
    "Sprites/IU/TelaInicial2.svg",
    "Sprites/IU/TelaInicial3.svg",
];

const ImagemTelaInicial = document.querySelector(".main-image");
let index = 0;

setInterval(()=>{
    ImagemTelaInicial.src = `../${imgs[index]}`;
    index = (index + 1) % imgs.length;
}, 250);

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
    redirecionarUltimaSala();
}

function deletar(e, pos){
    e.stopPropagation();

    deleteSave(pos);
    logoutSession();
    mostrarTelaSaves(); 
}
