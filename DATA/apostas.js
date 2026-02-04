const roleta = [
    {
        id: 1,
        nome: "Elefante",
        probabilidades: {
            ganho: 49,
            perca: 51,
        },
        fantasia: 50,

        custo: {
            ficha: 1
        },

        recompensa: {
            ficha: 2,
        }
    },

    {
        id: 2,
        nome: "Tigre",
        probabilidades: {
            ganho: 30,
            perca: 70,
        },
        fantasia: 35,

        custo: {
            ficha: 1
        },

        recompensa: {
            ficha: 3,
        }
    },

    {
        id: 3,
        nome: "Coelho",
        probabilidades: {
            ganho: 15,
            perca: 85,
        },
        fantasia: 10,

        custo: {
            ficha: 1
        },

        recompensa: {
            ficha: 5,
        }
    },
];

function getApostaRoleta(id){
    const aposta = roleta.find(a => a.id === id);
    return aposta ? aposta : null;
}

function getRoleta(){
    return roleta;
}
