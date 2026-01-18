const TREINOS = [
    {
        id: 0,
        vidaSum: 10,
        defesaSum: 10,
        ataqueSum: 20,
        custo: 800,
    },
    {
        id: 1,
        vidaSum: 0,
        defesaSum: 10,
        ataqueSum: 50,
        custo: 2000,
    },
    {
        id: 2,
        vidaSum: 10,
        defesaSum: 10,
        ataqueSum: 70,
        custo: 2000,
    },
    {
        id: 3,
        vidaSum: 0,
        defesaSum: 10,
        ataqueSum: 100,
        custo: 2000,
    },
    {
        id: 4,
        vidaSum: 0,
        defesaSum: 10,
        ataqueSum: 100,
        custo: 2000,
    },
    {
        id: 5,
        vidaSum: 10,
        defesaSum: 15,
        ataqueSum: 50,
        custo: 2000,
    },
    {
        id: 6,
        vidaSum: 15,
        defesaSum: 10,
        ataqueSum: 15,
        custo: 1000,
    },
    {
        id: 7,
        vidaSum: 15,
        defesaSum: 15,
        ataqueSum: 15,
        custo: 1000,
    },
    {
        id: 8,
        vidaSum: 100,
        defesaSum: 100,
        ataqueSum: 100,
        custo: 2700,
    },
    {
        id: 9,
        vidaSum: 10,
        defesaSum: 10,
        ataqueSum: 10,
        custo: 1000,
    },
    {
        id: 10,
        vidaSum: 100,
        defesaSum: 100,
        ataqueSum: 140,
        custo: 3500,
    },
];

function getTreino(id){
    const treino = TREINOS.find(t => t.id === id);
    return treino ? treino : null;
}