function picarRed(){
    const camada = document.getElementById("camada-de-efeito");
    camada.style.backgroundColor = "rgba(255, 0, 0, 0.589)";
    camada.style.display = "block";
    

    setTimeout(()=>{
        camada.style.backgroundColor = "rgba(255, 0, 0, 0)";
    }, 500);
    setTimeout(()=>{
        camada.style.display = "none";
    }, 600);
}