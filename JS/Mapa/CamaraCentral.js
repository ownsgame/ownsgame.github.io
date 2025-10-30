const SabioFalas = [ 
                [
                    "Ahn...Oi, ...Você se lembra de mim?...", 
                    "...",
                    "E...não? AH! Que coisa...",
                    "...Bem, não sei se importa muito quem eu sou...", 
                    "QUEM VOCÊ É?",
                    "...",
                    "...Bem, acho complicado viver a vida sem saber disto...",
                    "Por isso estou aqui para ajudar a recuperar suas memórias!",
                    "Que sorte ter-me aqui para relembra-lo",
                    "E digo que: 'Você é o <i>ESCOLHIDO!'</i>",
                    "SIM! o <i>ESCOLHIDO</i>! Uma grande missão o aguarda!",
                    "O mal anda junto a porta dos escarnecidos...",
                    "Você deve tirar deles o que pertence a nós, os 6 <i>FRAGMENTOS DO HEXOPODA</i>",
                    "Você deve elimina-los!", 
                    "Todo aquele que não pertence a tribo OWN, é inimigo!",
                    "Lembre-se disso!",
                    "Recomendo que encare o Espelho Profundo e entre no <i>REINO DOS ESPELHOS</i>",
                    "Lá obterás a espada fantasma! Irá lhe ajudar muito na missão",
                    "Boa sorte! Ao realizar a missão finalmente encontrarás a resposta: <i>'de quem tu és!'</i>" 
                ], 
                [
                    "Que bom tê-lo de volta",
                    "Esta câmara é bem interessante você não acha?",
                    "Foi construida por volta de 1600... após a batalha contra Helas!",
                    "Derrotamos os helanos! É claro! O chão que você pisa...",
                    "...é feito de cerâmica de Helas, uma belezura de material!",
                    "Como pode uma terra de Imundos possuir maravilha de tal natureza?",
                    "Cabe a nós, OWNS, tirar destes porcos, aquilo que é belo...",
                    "...e por direito nos pertence.",
                ],
                [
                    "Os mistérios que circuncidam o nosso mundo são demais!",
                    "Gostaria de saber a hora em que você saí daqui e vai explora-lo?"
                ],
                [
                    "Tá afim de bater um papinho?",
                    "Bem eu sei que você anda ocupado na sua missão...",
                    "Particularmente, espero que a conclua!",
                    "Ver o declinio das outras nações, é um sonho deste a infância",
                    "Não sei se lembra de quando era pequeno, bem...eu estava lá",
                    "Servindo a minha pátria, combatendo o Grande Dragão!",
                    "Fico feliz de ter servido aos OWNS",
                    "Fico feliz de ter nascido no povo escolhido para Reinar sobre todos os povos do mundo!",
                    "Hoje em dia, continuo servindo daqui da câmara",
                    "Quase não falamos do meu trabalho...",
                    "...",
                    "Prefiro manter isso sob sigilo.",
                ],
                [
                    "Eu não faço ideia do que exatamente é o reino dos espelhos!",
                    "Você já esteve lá, né?",
                    "Ouvi falar que o reino dos espelhos é um reflexo do seu interior...",
                    "...você vê no espelho alguém que é sua imagem e a sua semelhança...",
                    "...alguém que possui medos, sonhos, ambições, falhas...",
                    "Pra muitas pessoas o reino dos Espelhos é terrivel!",
                    "Cheio de fantasmas e monstros!",
                    "...É a própria imagem e semelhança do individuo",
                    "Mas por ser um espelho, aquilo que é visto não é verdade!",
                    "É apenas um reflexo e a forma como o enxerga muda tudo",
                    "Pra outros o reino dos espelhos é muito lindo! Cheio de flores e tudo mais",
                    "O que você viu lá?",
                ],
];
desenharGrade(5, "ceramica", false);

const sabioEl = document.createElement("div");
const bancadaEl = document.createElement("div");

sabioEl.classList.add("sabio");
sabioEl.classList.add("tamPadrao");
sabioEl.classList.add("npc");

bancadaEl.classList.add("mirror");
bancadaEl.classList.add("tamPadrao");

posicionarGrid(sabioEl, 3, 3);
fixarAoConteiner(sabioEl);

posicionarGrid(bancadaEl, 3, 5);
fixarAoConteiner(bancadaEl);

const posTochas = [[2, 3], [3, 2], [3, 4], [4, 3]]
for(let i =0; i<4; i++){
    const novaTocha = document.createElement("div");
    novaTocha.classList.add("tocha");
    novaTocha.classList.add("tamPadrao");
    posicionarGrid(novaTocha, posTochas[i][0], posTochas[i][1]);
    fixarAoConteiner(novaTocha);
}

const sabioOWN = new NPC("Sábio OWN", SabioFalas, sabioEl, 1);

function verificacaoInicialDeSala(){
    const JOGADOR = getDados();
    if(JOGADOR.iniciante){
        sabioOWN.falar(SabioFalas[0]);
    } 
}

document.addEventListener("DOMContentLoaded", ()=>{
    verificacaoInicialDeSala();
})

bancadaEl.addEventListener("click", abrirTeleporte);

function abrirTeleporte(){
    const TELA = document.getElementById("show-place");

    TELA.innerHTML = `
        <h3>Reino dos Espelhos</h3>
        <img src="Sprites/Places/MirrorRoom-capa.svg" width="200px" height="200px">
        <div class="botoes-alinhados">
            <button onclick="redirecionarSalaEspelhos()">Teleportar</button>
            <button class="botao-ativo" onclick="window.location = 'Inventario.html'">Inventário</button>
            <button onclick="fecharTela('show-place')">Fechar</button>
        </div>
    `;

    abrirTela("show-place");
}

function redirecionarSalaEspelhos(){
    window.location = "MirrorRoom.html";
}
