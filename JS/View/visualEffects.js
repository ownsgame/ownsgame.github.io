function picarRed(){
    const camada = document.getElementById("camada-de-efeito");
    camada.style.backgroundColor = "rgba(255, 0, 0, 0.589)";
    camada.style.display = "block";
    
    setTimeout(()=>{
        fecharTela("camada-de-efeito")
    }, 700);
}

function blurBoxOpen(){
    const BOX = document.querySelector(".blur-box");
    
    if(BOX.style.display != "block"){
        BOX.style.display = "block";
        setTimeout(()=>{
            BOX.style.opacity = 1;
        }, 200);
    }
}

function blurBoxClose(){
    const BOX = document.querySelector(".blur-box");
    
    if(BOX.style.display != "none"){
        BOX.style.opacity = 0;
        setTimeout(()=>{
            BOX.style.display = "none";
        }, 300);
    }
}

function salaApresentation(Nome, Capitulo){
    const apresentacaoEL = document.querySelector(".room-apresentation");
    apresentacaoEL.classList.add("animated-aparecer");

    apresentacaoEL.innerHTML = 
    `
        <h1 class="fonte-futuretimes">${Nome}</h1>
        <p class="fonte-comum">${Capitulo}° Capítulo</p>
    `;

    setTimeout(()=>{
        abrirTela("room-apresentation", false);
    }, 1000);
    
    setTimeout(()=>{
        fecharTela("room-apresentation", false);
    }, 2000);
}