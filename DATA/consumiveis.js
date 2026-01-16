const CONSUMIVEIS = [
    {
        id: "frutaCoracao",
        nome: "Fruta do Coracao",
        sprite: "Sprites/Itens/health_fruit.svg",
        descricao: "Restaura 15 Pontos de Vida, Se você não estava precisando,que azar!",
        unico: true,
        consumivel: true,
        raridade: "Comum"
    },
    {
        id: "frutaEnergia",
        nome: "Fruta de Energia",
        sprite: "Sprites/Itens/energy_berry.svg",
        descricao: "Te dá vigor para explorar ainda mais a área!",
        unico: true,
        consumivel: true,
        raridade: "Comum"
    },
    {
        id: "moeda",
        nome: "Moedas",
        sprite: "Sprites/Itens/coin.svg",
        descricao: "Quem tem muito sempre mais quer ter!",
        unico: false,
        maxQuant: 20,
        minQuant: 5,
        consumivel: false,
        raridade: "Comum",
        destino: "recursos",
    },
    {
        id: "ectoplasma",
        nome: "Ectoplasmas",
        sprite: "Sprites/Itens/ectoplasma.svg",
        descricao: "A concentração de restos vitais de Ghosts deixados ao chão",
        unico: false,
        maxQuant: 6,
        minQuant: 1,
        consumivel: false,
        raridade: "Comum",
        destino: "recursos",
    }
];

function getConsumivel(id){
    const item = CONSUMIVEIS.find(e => e.id === id);
    return item ? item : null;
}
