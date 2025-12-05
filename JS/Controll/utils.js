function randomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomVec(vetor){
    let max = (vetor.length) - 1;
    let idx = randomInt(0, max);
    return vetor[idx];
}

function randomBool(){
    let rd = randomInt();
    if(rd == 0){
        return true;
    }
    else{
        return false;
    }
}

function fecharTela(id){
    let tela = document.getElementById(id);
    tela.style.transition = "all ease-in-out 250ms";
    

    setTimeout(()=>{
        tela.style.opacity = 0;
    }, 50);
    setTimeout(()=>{
        tela.style.display = "none"
        tela.style.opacity = 1;
        blurBoxClose();
    }, 300);
}

function abrirTela(id) {
    const tela = document.getElementById(id);
    
    tela.style.transition = "all ease-in-out 250ms";
    tela.style.display = "flex";
    tela.style.opacity = 0;

    setTimeout(() => {
        tela.style.opacity = 1;
        blurBoxOpen();
    }, 50);
}
