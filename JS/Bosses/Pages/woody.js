const SALA = getPlace("bossWoody");

setBackground(SALA.background);
desenharGrade("floresta", false);

Woody.gerar();

let entidade = new FlyingEntity("bird", [1, 1]);
entidade.perseguirJogador();

setInterval(()=>{
    let novaEntidade = new FlyingEntity("bird", [1, 1]);
    novaEntidade.perseguirJogador();
}, 8000);