
function iniciarCaixaDialogo(){
    abrirTela("caixa-dialogo");
}

function mostrarDialogo(ator, dialogo){
    const ATOR = document.getElementById("titulo-dialogo");
    ATOR.innerHTML = `${ator}`;
    const TEXTO = document.getElementById("textinho-dialogo");
    TEXTO.innerHTML = `${dialogo}`;
    iniciarCaixaDialogo();
}

function fecharCaixaDialogo(){
    const CAIXA = document.getElementById("caixa-dialogo");
    CAIXA.style.display = "none";
}