const VIDA_EL = document.getElementById("status-vida");

function atualizarVida(vida, total = 100){
    
    VIDA_EL.innerHTML = `HP: ${vida} / ${total}`;
    atualizarHP(vida, total);
}

function atualizarHP(vidaAtual, vidaTotal) {
    let porcentagem = (vidaAtual / vidaTotal) * 100;

    const barraHP = document.getElementById('status-hp');

    barraHP.style.width = porcentagem + '%';
}