const RECEITAS = [
    {
        id: 1,
        resultado: "espadaFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 20,
        },
        concluiQuest: true,
        quests: [1]
    },
    {
        id: 2,
        resultado: "escudoFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 35,
        }
    }
];

function getReceita(id){
    const receita = RECEITAS.find(r => r.id === id);
    return receita ? receita : null;
}

