const TREINOS = [
    {
        id: 0,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 20,
        custo: 800,
    },
    {
        id: 1,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 25,
        custo: 800,
    },
    {
        id: 2,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 30,
        custo: 800,
    },
    {
        id: 3,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 35,
        custo: 800,
    },
    {
        id: 4,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 40,
        custo: 800,
    },
    {
        id: 5,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 45,
        custo: 800,
    },
    {
        id: 6,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 50,
        custo: 800,
    },
    {
        id: 7,
        vidaSum: 5,
        defesaSum: 5,
        ataqueSum: 100,
        custo: 800,
    },
    {
        id: 8,
        vidaSum: 10,
        defesaSum: 10,
        ataqueSum: 200,
        custo: 800,
    },
    {
        id: 9,
        vidaSum: 20,
        defesaSum: 20,
        ataqueSum: 200,
        custo: 800,
    },
    {
        id: 10,
        vidaSum: 20,
        defesaSum: 20,
        ataqueSum: 200,
        custo: 800,
    },
];

function getTreino(id){
    const treino = TREINOS.find(t => t.id === id);
    return treino ? treino : null;
}