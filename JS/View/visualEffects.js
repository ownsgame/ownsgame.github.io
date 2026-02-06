function picarRed(){
    const camada = document.getElementById("camada-de-efeito");
    camada.style.backgroundColor = "rgba(255, 0, 0, 0.589)";
    camada.style.display = "block";
    
    setTimeout(()=>{
        fecharTela("camada-de-efeito")
    }, 600);
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
        <h1 class="fonte-comum">${Nome}</h1>
        <p class="fonte-comum"><i class="fa-solid fa-book"></i> Capítulo - ${Capitulo}</p>
    `;

    setTimeout(()=>{
        abrirTela("room-apresentation", false);
    }, 1000);
    
    setTimeout(()=>{
        fecharTela("room-apresentation", false);
    }, 2000);
}

let loopParticulas = null;

function iniciarParticulas(cor, intervalo = 110) {
    if (loopParticulas) return;

    const alturaMaximaPx = window.innerHeight * 0.75;

    loopParticulas = setInterval(() => {
        const particula = document.createElement("div");

        const tamanho = Math.random() * 6 + 10;
        const x = Math.random() * window.innerWidth;
        let y = window.innerHeight + Math.random() * 30;
        const velocidade = Math.random() * 1.5 + 0.5;

        particula.style.position = "absolute";
        particula.style.width = `${tamanho}px`;
        particula.style.height = `${tamanho}px`;
        particula.style.borderRadius = "50%";
        particula.style.backgroundColor = cor;
        particula.style.left = `${x}px`;
        particula.style.top = `${y}px`;
        particula.style.pointerEvents = "none";
        particula.style.opacity = "1";

        document.body.appendChild(particula);

        function animar() {
            y -= velocidade;
            particula.style.top = `${y}px`;
            particula.style.opacity = `${1 - (window.innerHeight - y) / alturaMaximaPx}`;

            if (window.innerHeight - y >= alturaMaximaPx) {
                particula.remove();
                return;
            }

            requestAnimationFrame(animar);
        }

        animar();
    }, intervalo);
}

function pararParticulas() {
    clearInterval(loopParticulas);
    loopParticulas = null;
}


