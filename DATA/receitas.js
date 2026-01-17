const RECEITAS = [
    {
        id: 1,
        resultado: "espadaFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 15,
        },
        concluiQuest: true,
        quests: [1]
    },
    {
        id: 2,
        resultado: "moeda",
        quantItensResultado: 1,
        ingredientes: {
            moeda: 15,
        }
    }
];

function getReceita(id){
    const receita = RECEITAS.find(r => r.id === id);
    return receita ? receita : null;
}

