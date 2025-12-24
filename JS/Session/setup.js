
const NOMES_SAVE = [
    "Reino de Hexopoda", "Heroí do Destino", "Carinha Azul",
    "Guerreiro de Helos", "Terras Distantes", "Terras Desconhecidas",
    "Aflorecer do Amanhã", "Jogador Profissional", "Guerreiro de virtudes",
];

function criarModelo(){
    const nomeRandom = randomVec(NOMES_SAVE);

    return {
        nome: nomeRandom,
        primeiraVez: true,

        vida: 100,
        defesa: 0,
        ataque: 10,
        espera: 5,

        inventario: {},
        recursos: {},

        arvoreConclusao: {
            cap1: null,
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

        capituloAtual: 0,
        armaAtual: null,
        poderAtual: null,
        escudoAtual: null,
        ultimaSala: null,
        iniciante: true,
    };
}

function createSaveAt(pos){
    const NEW_SAVE = criarModelo();
    addSave(pos, NEW_SAVE);
    mostrarTelaSaves();
}
