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

function sorteioComProbabilidade(obj) {
    const total = Object.values(obj).reduce((soma, v) => soma + v, 0);
    const sorteio = Math.random() * total;

    let acumulado = 0;

    for (const chave in obj) {
        acumulado += obj[chave];
        if (sorteio < acumulado) {
            return chave;
        }
    }
}

function fatorVelocidadeTela(){
    const referencia = 1280;
    const atual = Math.min(window.innerWidth, window.innerHeight);

    return Math.min(1, atual / referencia);
}

function porcentagemTelaPixel(xPercent, yPercent) {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    return {
        x: (xPercent / 100) * largura,
        y: (yPercent / 100) * altura
    };
}

function fecharTela(id, blur = true){
    let tela = document.getElementById(id);
    tela.style.transition = "all ease-in-out 250ms";
    

    setTimeout(()=>{
        tela.style.opacity = 0;
    }, 50);
    setTimeout(()=>{
        tela.style.display = "none"
        tela.style.opacity = 1;
        if(blur){
            blurBoxClose();
        }
    }, 300);
}

function abrirTela(id, blur = true) {
    const tela = document.getElementById(id);
    
    tela.style.transition = "all ease-in-out 250ms";
    tela.style.display = "flex";
    tela.style.opacity = 0;

    setTimeout(() => {
        tela.style.opacity = 1;
        if(blur){
            blurBoxOpen();
        }
    }, 50);
}

const NOTIFICACOES = document.getElementById("notificacoes");
const TIPO_NOMES = ["Alerta", "Item Criado", "Conquista", "Quest Concluída", "Treinamento Concluído"];
const TIPO_ICONS = [
    '<i class="fa-solid fa-triangle-exclamation"></i>',
    '<i class="fa-solid fa-hammer"></i>',
    '<i class="fa-solid fa-trophy"></i>',
    '<i class="fa-solid fa-book"></i>',
    '<i class="fa-solid fa-dumbbell"></i>',
];

let idNotificacao = 0;

function emitirNotificacao(tipo, mensagem){
    const notificacao  = document.createElement("div");
    notificacao.innerHTML = `
        <h3 class="fonte-comum">${TIPO_ICONS[tipo]} ${TIPO_NOMES[tipo]}</h3>
        <p class="fonte-comum">${mensagem}</p>
    `;

    let idItem = `notificacao${idNotificacao}`;
    idNotificacao ++;
    notificacao.setAttribute("id", idItem);
    NOTIFICACOES.appendChild(notificacao);

    abrirTela(idItem, false);    

    setTimeout(() => {
        fecharTela(idItem, false);
    }, 2000);    
}

function redirecionarPara(link){
    location.replace(link);
}