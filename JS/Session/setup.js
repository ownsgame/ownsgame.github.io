
const NOMES_SAVE = [
    "Reino de Hexopoda", "Heroí do Destino", "Carinha Azul",
    "Guerreiro de Helos", "Terras Distantes", "Terras Desconhecidas",
    "Aflorecer do Amanhã", "Jogador Profissional", "Guerreiro de virtudes",
];

function criarModelo(){
    const nomeRandom = randomVec(NOMES_SAVE);

    return {
        nome: nomeRandom,
        
        vida: 100,
        vidaMult: 1,
        vidaSum: 0,

        defesa: 0,
        defesaMult: 1,
        defesaSum: 0,

        ataque: 10,
        ataqueMult: 1,
        ataqueSum: 0,

        tempoEspera: 5,

        inventario: {},
        recursos: {},

        arvoreConclusao: {
            cap1: {
                espadaFantasma: false,
                chaveMestra: false
            },
            cap2: null,
            cap3: null,
            cap4: null,
            cap5: null,
            cap6: null,
        },

        armadura: {
            capacete: null,
            tronco: null,
            bota: null,
        },

        capituloCorrente: 1,
        fragmentosHexopoda: 0,
        porcentagem: 0,
        armaAtual: null,
        poderAtual: null,
        escudoAtual: null,
        ultimaSala: "laboratorio.html",
        iniciante: true,
        questsAtivas: [1],
    };
}

function createSaveAt(pos){
    const NEW_SAVE = criarModelo();
    addSave(pos, NEW_SAVE);
    mostrarTelaSaves();
}
