const SALA = getPlace("bossCiclop");

setBackground(SALA.background);
desenharGrade("bossCiclop", false);
setTemaFase(SALA);

Ciclop.gerar();

setInterval(()=>{
    const PS = [95, 5];
    let rd = randomInt(1, 3)

    if(rd == 1){
        let entPos = porcentagemTelaPixel(randomVec(PS), 40);
        let entidade = new FlyingEntity("vigilantes", [entPos.x, entPos.y]);
        entidade.perseguirJogador();
    }
    else if(rd == 2){
        let entPos = porcentagemTelaPixel(randomVec(PS), 40);
        let entidade = new FlyingEntity("fogoGrego", [entPos.x, entPos.y]);
        entidade.perseguirJogador();
    }
    else{
        let entPos = porcentagemTelaPixel(randomVec(PS), 40);
        let entidade = new FlyingEntity("lambisgoias", [entPos.x, entPos.y]);
        entidade.perseguirJogador();
    }

}, 6000);