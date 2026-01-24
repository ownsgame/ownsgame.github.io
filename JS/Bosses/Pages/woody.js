const SALA = getPlace("bossWoody");

setBackground(SALA.background);
desenharGrade("floresta", false);

Woody.gerar();

const BIRD_PS = [70, 30];

let entPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);

let entidade = new FlyingEntity("bird", [entPos.x, entPos.y]);
entidade.perseguirJogador();


setInterval(()=>{
    let newBirdPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);
    let novaEntidade = new FlyingEntity("bird", [newBirdPos.x, newBirdPos.y]);
    novaEntidade.perseguirJogador();
}, 10000);