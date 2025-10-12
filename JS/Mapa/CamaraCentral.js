const SabioFalas = [ 
                [
                    "Ahn...Olá, como você está?", 
                    "Pode parcer uma pergunta muito idiota mas...",
                    "...Você se lembra de mim?...",
                    "...",
                    "E.....não? AH! Que coisa...",
                    "...Bem, não sei se importa muito quem eu sou...", 
                    "QUEM VOCÊ É?",
                    "...",
                    "...É complicado viver a vida sem saber disso...",
                    "Parece tortuso vagar por aí sem um proposito que lhe define...",
                    "O cetro que você possuí em sua mão já diz muita coisa",
                    "Que sorte ter-me aqui para relembra-lo",
                    "Você é o ESCOLHIDO!",
                    "SIM! o ESCOLHIDO meu pequeno, para uma grande missão!",
                    "O cetro que possuí é conhecido como CETRO DO TRANSLOCAMENTO",
                    "Ele lhe permite a capacidade de teletransportar-se livremente pelo piso",
                    "Não sei se cabe a mim explicar como ele foi feito, você pode encontrar aí alguém que melhor saiba lhe explicar",
                    "O mal anda junto a porta dos escarnecidos...",
                    "Você deve tirar deles o que pertence a nós, os 7 FRAGMENTOS DO HEXOPODA",
                    "A localização dos profanos se encontra em um mapa que você pode acessar aqui no templo",
                    "Boa sorte! Ao realizar a missão finalmente encontrarás a resposta de quem tu és" 
                ], 
                [
                    "Que bom tê-lo de volta",
                    "A visita a camara é bem interessante você não acha?"
                ],
                [
                    "Os mistérios que circuncidam o nosso mundo são demais!",
                    "Gostaria de saber a hora em que você saí daqui e vai explora-lo?"
                ]
];
desenharGrade(5, "ceramica", false);

const sabioEl = document.createElement("div");
sabioEl.classList.add("sabio");
sabioEl.classList.add("tamPadrao");
sabioEl.classList.add("npc");
posicionarGrid(sabioEl, 3, 3);
fixarAoConteiner(sabioEl);

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


