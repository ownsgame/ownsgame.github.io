const VOADORES = [
    {
        id: "bird",
        nome: "Pássaro da Floresta",
        dano: 1,
        tempo: 200,
        velocidade: 30,
        tempoVida: 12000,
        tamanho: "Médio",
        sprite: "Sprites/Enemys/1/bird.svg",
    }
];

function getVoador(id){
    const voador = VOADORES.find(v => v.id === id);
    return voador ? voador : null;
}