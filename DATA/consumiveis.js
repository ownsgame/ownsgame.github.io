const CONSUMIVEIS = [
    {
        id: "frutaCoracao",
        nome: "Fruta do Coracao",
        sprite: "Sprites/Itens/health_fruit.svg",
        descricao: "Restaura 15 Pontos de Vida, Se você não estava precisando,que azar!",
        unico: false,
        consumivel: true,
        raridade: "Comum"
    },
    {
        id: "frutaEnergia",
        nome: "Fruta de Energia",
        sprite: "Sprites/Itens/energy_berry.svg",
        descricao: "Te dá vigor para explorar ainda mais a área!",
        unico: false,
        consumivel: true,
        raridade: "Comum"
    },
    {
        id: "moeda",
        nome: "Moedas",
        sprite: "Sprites/Itens/energy_berry.svg",
        descricao: "Quem tem muito sempre mais quer ter!",
        unico: false,
        consumivel: true,
        raridade: "Comum"
    }
];

function getItem(id){
    const item = CONSUMIVEIS.find(e => e.id === id);
    return item ? item : null;
}
