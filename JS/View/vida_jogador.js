const VIDA_EL = document.getElementById("status-vida");

function atualizarVida(vida, total = 100){
    
    VIDA_EL.innerHTML = `<i class="fa-solid fa-heart"></i> HP: ${vida} / ${total}`;
    atualizarHP(vida, total);
}

function atualizarHP(vidaAtual, vidaTotal) {
    const barraHP = document.getElementById('status-hp');

    let porcentagem = (vidaAtual / vidaTotal) * 100;


    barraHP.style.backgroundImage = `linear-gradient(
        to right,
        rgb(50, 14, 255) ${porcentagem}%,
        black ${porcentagem}%
    )`;
}