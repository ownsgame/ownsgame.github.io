const RECEITAS = [
    {
        id: 1,
        resultado: "espadaFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 1,
        }
    }
];

function getReceita(id){
    const receita = RECEITAS.find(r => r.id === id);
    return receita ? receita : null;
}

