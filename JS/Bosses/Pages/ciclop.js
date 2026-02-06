const SALA = getPlace("bossCiclop");

setBackground(SALA.background);
desenharGrade("bossCiclop", false);
setTemaFase(SALA);

Ciclop.gerar();

setInterval(()=>{
    const VIGIA_PS = [95, 5];
    let entPos = porcentagemTelaPixel(randomVec(VIGIA_PS), 40);
    let entidade = new FlyingEntity("vigilantes", [entPos.x, entPos.y]);
    entidade.perseguirJogador();
}, 6000);