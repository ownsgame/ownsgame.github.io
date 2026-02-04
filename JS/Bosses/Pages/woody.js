const SALA = getPlace("bossWoody");

setBackground(SALA.background);
desenharGrade("bossWoody", false);

Woody.gerar();

const BIRD_PS = [70, 30];

let entPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);

let entidade = new FlyingEntity("bird", [entPos.x, entPos.y]);
entidade.perseguirJogador();


setInterval(()=>{
    let player = getObjectPlayer();
    if(!player.getVenceu()){
        let newBirdPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);
        let novaEntidade = new FlyingEntity("bird", [newBirdPos.x, newBirdPos.y]);
        addFlyingEntity(novaEntidade);
        novaEntidade.perseguirJogador();
    }

}, 10000);

setInterval(()=>{
    let player = getObjectPlayer();
    if(!player.getVenceu()){
        let newEnergyPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);
        let novaEntidade = new FlyingEntity("energiaFloresta", [newEnergyPos.x, newEnergyPos.y]);
        addFlyingEntity(novaEntidade);
        novaEntidade.rasante();
    }
}, 5000);